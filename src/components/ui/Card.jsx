import React from 'react';

export function Card({
  children,
  className = '',
  featured = false,
  interactive = true,
  onClick,
  ...props
}) {
  const baseClasses = 'bg-[#1c1c26] border rounded-[12px] transition-all duration-300 relative overflow-hidden';
  const borderClasses = featured
    ? 'border-[rgba(126,255,212,0.25)] bg-gradient-to-br from-[#1c1c26] to-[rgba(126,255,212,0.04)]'
    : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(126,255,212,0.25)]';
  const interactiveClasses = interactive
    ? 'hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:shadow-[0_0_30px_rgba(126,255,212,0.07)]'
    : '';

  return (
    <div
      className={`${baseClasses} ${borderClasses} ${interactiveClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
