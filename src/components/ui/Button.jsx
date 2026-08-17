import React from 'react';

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  target,
  rel,
  fullWidth = false,
  download,
  type = 'button',
  ariaLabel,
  disabled = false,
  ...props
}) {
  const isExternal = href && (href.startsWith('http') || href.startsWith('//') || href.endsWith('.pdf'));
  const safeTarget = target || (isExternal ? '_blank' : undefined);
  const safeRel = rel || (isExternal ? 'noopener noreferrer' : undefined);

  const baseStyles = 'inline-flex items-center justify-center font-mono font-medium tracking-[0.04em] rounded-[12px] cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7effd4] focus:ring-offset-2 focus:ring-offset-[#0a0a0f] disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-[0.75rem] px-3.5 py-1.5 gap-1.5',
    md: 'text-[0.82rem] px-6 py-3 gap-2',
    lg: 'text-[0.92rem] px-8 py-3.5 gap-2.5'
  };

  const variantStyles = {
    primary: 'bg-[#7effd4] text-[#050508] border border-[#7effd4] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(126,255,212,0.3)] active:translate-y-0',
    ghost: 'bg-transparent text-[#7effd4] border border-[#7effd4] hover:-translate-y-0.5 hover:bg-[rgba(126,255,212,0.08)] active:translate-y-0',
    outline: 'bg-[rgba(255,255,255,0.03)] text-[#e8e8f0] border border-[rgba(255,255,255,0.12)] hover:border-[#7effd4] hover:text-[#7effd4] hover:-translate-y-0.5',
    link: 'bg-transparent text-[#7effd4] p-0 border-none hover:underline underline-offset-4 gap-1.5'
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${widthStyle} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="text-[1.1em] shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="text-[1.1em] shrink-0" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={safeTarget}
        rel={safeRel}
        download={download}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
