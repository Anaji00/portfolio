import React from 'react';

export function IconButton({
  icon: Icon,
  href,
  onClick,
  ariaLabel,
  className = '',
  size = 'md',
  target,
  rel,
  ...props
}) {
  if (!ariaLabel) {
    console.warn('IconButton: `ariaLabel` is required for accessibility.');
  }

  const isExternal = href && (href.startsWith('http') || href.startsWith('//'));
  const safeTarget = target || (isExternal ? '_blank' : undefined);
  const safeRel = rel || (isExternal ? 'noopener noreferrer' : undefined);

  const sizeStyles = {
    sm: 'w-8 h-8 text-[0.85rem]',
    md: 'w-10 h-10 text-[1.1rem]',
    lg: 'w-12 h-12 text-[1.35rem]'
  };

  const baseStyles = 'inline-flex items-center justify-center rounded-[8px] bg-[#1c1c26] text-[#a0a6bd] border border-[rgba(255,255,255,0.08)] hover:text-[#7effd4] hover:border-[#7effd4] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7effd4] focus:ring-offset-2 focus:ring-offset-[#0a0a0f]';

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        target={safeTarget}
        rel={safeRel}
        {...props}
      >
        <Icon aria-hidden="true" />
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
      {...props}
    >
      <Icon aria-hidden="true" />
    </button>
  );
}

export default IconButton;
