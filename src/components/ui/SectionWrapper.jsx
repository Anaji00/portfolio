import React from 'react';

export function SectionWrapper({
  id,
  number,
  title,
  subtitle,
  children,
  className = '',
  innerClassName = '',
  containerRef,
  isRevealed = true,
  altBg = false,
  ...props
}) {
  return (
    <section
      id={id}
      ref={containerRef}
      aria-labelledby={title ? `${id}-title` : undefined}
      className={`py-20 md:py-28 px-6 md:px-12 relative ${
        altBg ? 'bg-[#111118]' : 'bg-[#0a0a0f]'
      } transition-opacity duration-700 ${
        isRevealed ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      {...props}
    >
      <div className={`max-w-[1120px] mx-auto ${innerClassName}`}>
        {(title || number) && (
          <div className="flex flex-col mb-10 md:mb-14">
            <div className="flex items-baseline gap-3 mb-2">
              {number && (
                <span className="font-mono text-[0.85rem] md:text-[0.95rem] font-bold text-[#7effd4] tracking-widest">
                  {number}
                </span>
              )}
              {title && (
                <h2
                  id={`${id}-title`}
                  className="font-syne text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
                >
                  {title}
                </h2>
              )}
            </div>
            {subtitle && (
              <p className="font-mono text-sm md:text-base text-[#a0a6bd] max-w-2xl mt-1 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
