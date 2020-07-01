/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import React, {useEffect, useState} from 'react';
import classnames from 'classnames';
import Highlight, {defaultProps} from 'prism-react-renderer';
import rangeParser from 'parse-numeric-range';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import usePrismTheme from '@theme/hooks/usePrismTheme';
import CopyButton from "../CopyButton";

import styles from './styles.module.css';

const highlightLinesRangeRegex = /{([\d,-]+)}/;
const getHighlightDirectiveRegex = (
  languages = ['js', 'jsBlock', 'jsx', 'python', 'html', 'dart'],
) => {
  // supported types of comments
  const comments = {
    js: {
      start: '\\/\\/',
      end: '',
    },
    jsBlock: {
      start: '\\/\\*',
      end: '\\*\\/',
    },
    jsx: {
      start: '\\{\\s*\\/\\*',
      end: '\\*\\/\\s*\\}',
    },
    python: {
      start: '#',
      end: '',
    },
    html: {
      start: '<!--',
      end: '-->',
    },
    dart: {
      start: '\\/\\/',
      end: '',
    },
    dartBlock: {
      start: '\\/\\*',
      end: '\\*\\/',
    }
  };
  // supported directives
  const directives = [
    'highlight-next-line',
    'highlight-start',
    'highlight-end',
  ].join('|');
  // to be more reliable, the opening and closing comment must match
  const commentPattern = languages
    .map(
      (lang) =>
        `(?:${comments[lang].start}\\s*(${directives})\\s*${comments[lang].end})`,
    )
    .join('|');
  // white space is allowed, but otherwise it should be on it's own line
  return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);
};
// select comment styles based on language
const highlightDirectiveRegex = (lang) => {
  switch (lang) {
    case 'js':
    case 'javascript':
    case 'ts':
    case 'typescript':
      return getHighlightDirectiveRegex(['js', 'jsBlock']);

    case 'jsx':
    case 'tsx':
      return getHighlightDirectiveRegex(['js', 'jsBlock', 'jsx']);

    case 'html':
      return getHighlightDirectiveRegex(['js', 'jsBlock', 'html']);

    case 'python':
    case 'py':
      return getHighlightDirectiveRegex(['python']);
    
    case 'dart':
      return getHighlightDirectiveRegex(['dart']);
      
    default:
      // all comment types
      return getHighlightDirectiveRegex();
  }
};
const codeBlockTitleRegex = /title=".*"/;

export default ({children, className: languageClassName, metastring}) => {
  const {
    siteConfig: {
      themeConfig: {prism = {}},
    },
  } = useDocusaurusContext();

  const [mounted, setMounted] = useState(false);
  // The Prism theme on SSR is always the default theme but the site theme
  // can be in a different mode. React hydration doesn't update DOM styles
  // that come from SSR. Hence force a re-render after mounting to apply the
  // current relevant styles. There will be a flash seen of the original
  // styles seen using this current approach but that's probably ok. Fixing
  // the flash will require changing the theming approach and is not worth it
  // at this point.
  useEffect(() => {
    setMounted(true);
  }, []);
  let highlightLines = [];
  let codeBlockTitle = '';

  const prismTheme = usePrismTheme();

  if (metastring && highlightLinesRangeRegex.test(metastring)) {
    const highlightLinesRange = metastring.match(highlightLinesRangeRegex)[1];
    highlightLines = rangeParser
      .parse(highlightLinesRange)
      .filter((n) => n > 0);
  }

  if (metastring && codeBlockTitleRegex.test(metastring)) {
    codeBlockTitle = metastring
      .match(codeBlockTitleRegex)[0]
      .split('title=')[1]
      .replace(/"+/g, '');
  }

  let language =
    languageClassName && languageClassName.replace(/language-/, '');

  if (!language && prism.defaultLanguage) {
    language = prism.defaultLanguage;
  }

  // only declaration OR directive highlight can be used for a block
  let code = children.replace(/\n$/, '');
  if (highlightLines.length === 0 && language !== undefined) {
    let range = '';
    const directiveRegex = highlightDirectiveRegex(language);
    // go through line by line
    const lines = children.replace(/\n$/, '').split('\n');
    let blockStart;
    // loop through lines
    for (let index = 0; index < lines.length; ) {
      const line = lines[index];
      // adjust for 0-index
      const lineNumber = index + 1;
      const match = line.match(directiveRegex);
      if (match !== null) {
        const directive = match
          .slice(1)
          .reduce((final, item) => final || item, undefined);
        switch (directive) {
          case 'highlight-next-line':
            range += `${lineNumber},`;
            break;

          case 'highlight-start':
            blockStart = lineNumber;
            break;

          case 'highlight-end':
            range += `${blockStart}-${lineNumber - 1},`;
            break;

          default:
            break;
        }
        lines.splice(index, 1);
      } else {
        // lines without directives are unchanged
        index += 1;
      }
    }
    highlightLines = rangeParser.parse(range);
    code = lines.join('\n');
  }

  function calculateChunks(tokens, getLineProps) {
    const chunks = [];

    tokens.forEach((lineTokens, lineIndex) => {
      if (lineIndex === 0) {
        chunks.push({
          highlighted: highlightLines.includes(lineIndex + 1),
          lines: []
        })
      }
      else
      if (highlightLines.includes(lineIndex + 1) && !highlightLines.includes(lineIndex)) {
        chunks.push({
          highlighted: true,
          lines: []
        })
      }
      else
      if (!highlightLines.includes(lineIndex + 1) && highlightLines.includes(lineIndex)) {
        chunks.push({
          highlighted: false,
          lines: []
        })
      }

      const lineText = lineTokens.map((token)=> {
        return token.content
      }).reduce((old, item) => {
        return old + item;
      });

      if (lineTokens.length === 1 && lineTokens[0].content === '') {
        lineTokens[0].content = '\n'; // eslint-disable-line no-param-reassign
      }

      const lineProps = getLineProps({lineTokens, key: lineIndex});
      if (highlightLines.includes(lineIndex + 1)) {
        lineProps.className = `${lineProps.className} docusaurus-highlight-code-line`;
      }

      chunks[chunks.length - 1].lines.push({
        lineIndex,
        lineTokens,
        lineText,
        lineProps
      })
    });

    return chunks;
  }

  function renderRegularChunk(chunk, getTokenProps) {
    return chunk.lines.map((line) => {
      return <div key={line.lineIndex} {...line.lineProps}>
        {line.lineTokens.map((token, key) => (
            <span key={key} {...getTokenProps({token, key})} />
        ))}
      </div>
    })
  }

  function renderHighlightedChunk(chunk, getTokenProps) {
    const chunkText = chunk.lines.map((line) => {
      return line.lineText
    }).join("\n");

    return <div className={styles.copyButtonContent}>
      <CopyButton text={chunkText} style={styles.copyButton}/>
      {renderRegularChunk(chunk, getTokenProps)}
    </div>
  }

  function renderCodeLines(tokens, getLineProps, getTokenProps) {
    const chunks = calculateChunks(tokens, getLineProps);
    return chunks.map((chunk) => {
      if (chunk.highlighted) {
        return renderHighlightedChunk(chunk, getTokenProps);
      } else {
        return renderRegularChunk(chunk, getTokenProps);
      }
    });
  }

  return (
    <Highlight
      {...defaultProps}
      key={mounted}
      theme={prismTheme}
      code={code}
      language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <>
          {codeBlockTitle && (
            <div style={style} className={styles.codeBlockTitle}>
              {codeBlockTitle}
            </div>
          )}
          <div className={styles.codeBlockContent}>
            <div
              tabIndex="0"
              className={classnames(className, styles.codeBlock, {
                [styles.codeBlockWithTitle]: codeBlockTitle,
              })}>
              <div className={styles.codeBlockLines} style={style}>
                {renderCodeLines(tokens, getLineProps, getTokenProps)}
              </div>
            </div>
          </div>
        </>
      )}
    </Highlight>
  );
};
