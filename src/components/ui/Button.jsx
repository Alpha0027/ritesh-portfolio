import React from 'react';

const Button = ({ children, variant = 'primary', onClick, href, className = '', target, rel }) => {
  const baseClass = 'btn';
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const combinedClass = `${baseClass} ${variantClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
};

export default Button;
