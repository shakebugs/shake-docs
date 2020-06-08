import React, {useState, useRef} from 'react';

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
      className={props.style}
      onClick={onCopyClick}>
    {showCopied ? "Copied":"Copy"}
  </button>
};

export default CopyButton;
