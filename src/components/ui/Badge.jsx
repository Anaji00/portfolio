import React from 'react';

export function Badge({ children, variant = 'tag', className = '', ...props }) {
  const variantStyles = {
    tag: 'bg-[rgba(91,156,246,0.15)] text-[#7fb2ff] border border-[rgba(91,156,246,0.25)]',
    featured: 'bg-[rgba(126,255,212,0.18)] text-[#7effd4] border border-[rgba(126,255,212,0.35)]',
    category: 'bg-[rgba(255,255,255,0.06)] text-[#e8e8f0] border border-[rgba(255,255,255,0.12)]',
    success: 'bg-[rgba(126,255,212,0.12)] text-[#7effd4] border border-[rgba(126,255,212,0.2)]',
    neutral: 'bg-[rgba(255,255,255,0.04)] text-[#a0a6bd] border border-[rgba(255,255,255,0.08)]',
  };

  const baseStyle = 'inline-flex items-center text-[0.68rem] font-medium tracking-[0.04em] rounded-[4px] px-2 py-0.5 transition-colors duration-200';

  return (
    <span
      className={`${baseStyle} ${variantStyles[variant] || variantStyles.tag} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
