import React, {useState, useRef} from 'react';
import styles from "../CodeBlock/styles.module.css";
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';

function copyTextToClipboard(text) {
  let dummy = document.createElement("textarea");

  document.body.appendChild(dummy);

  dummy.value = text;
  dummy.select();
  document.execCommand("copy");

  document.body.removeChild(dummy);
}

const CopyButton = (props) => {
  const button = useRef(null);

  const [showCopied, setShowCopied] = useState(false);

  const onCopyClick = () => {
    copyTextToClipboard(props.text);

    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

   return <button
      ref={button}
      type="button"
      aria-label={translate({
        id: 'theme.CodeBlock.copyButtonAriaLabel',
        message: 'Copy code to clipboard',
        description: 'The ARIA label for copy code blocks button',
      })}
      className={clsx(styles.copyButton, 'clean-btn')}
      onClick={onCopyClick}>
    {showCopied ? (
        <Translate
            id="theme.CodeBlock.copied"
            description="The copied button label on code blocks">
          Copied
        </Translate>
    ) : (
        <Translate
            id="theme.CodeBlock.copy"
            description="The copy button label on code blocks">
          Copy
        </Translate>
    )}
  </button>;
};

export default CopyButton;
