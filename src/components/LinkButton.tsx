import React from 'react';

import './LinkButton.css';

interface LinkButtonProps {
  href?: string,
  onClick?: any,
  children: any,
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, onClick, children }) => {
  return (
    <a className="link-button" href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default LinkButton;
