import React from 'react';

interface TextAnimationProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {}

const TextAnimation: React.FC<TextAnimationProps> = ({ style, ...props }) => {
  const defaultStyle: React.CSSProperties = {
    width: '100%',
    height: '500px',
    border: 'none',
  };

  return (
    <iframe
      src="/ascii.html"
      style={{ ...defaultStyle, ...style }}
      {...props}
    />
  );
};

export default TextAnimation;
