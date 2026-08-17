import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { useReveal } from '../../hooks/useReveal';
import { TypedText } from '../ui/TypedText';
import { Button } from '../ui/Button';
import { IconButton } from '../ui/IconButton';
import { FaFileDownload, FaArrowDown } from 'react-icons/fa';

export function Hero() {
  const [ref, isRevealed] = useReveal(0.05);

  return (
    <section
      id="top"
      ref={ref}
      aria-label="Introduction and Overview"
      className={`min-h-screen pt-28 pb-16 md:py-32 px-6 md:px-12 flex items-center justify-center relative overflow-hidden transition-all duration-700 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Background Decorative Grid & Glow */}
      <div className="hero-bg-grid" aria-hidden="true" />
      <div
        className="absolute top-1/4 -right-28 w-96 h-96 bg-[#7effd4]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-28 w-96 h-96 bg-[#5b9cf6]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1120px] w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        {/* Left Content Area */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <p className="font-mono text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[#5b9cf6] mb-4">
            {siteConfig.tagline}
          </p>

          <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
            Alessio <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e8e8f0] to-[#7effd4]">
              Naji-Sepasgozar
            </span>
          </h1>

          <p className="font-mono text-base md:text-lg text-[#a0a6bd] mb-8 leading-relaxed">
            I engineer{' '}
            <TypedText strings={siteConfig.heroTypedStrings} />
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
            <Button
              href={siteConfig.resumeUrl}
              variant="primary"
              size="md"
              icon={FaFileDownload}
              ariaLabel="Download Alessio's Resume PDF"
            >
              Download Resume
            </Button>
            <Button
              href="#projects"
              variant="ghost"
              size="md"
              icon={FaArrowDown}
              iconPosition="right"
              ariaLabel="Scroll down to projects section"
            >
              Explore Work
            </Button>
          </div>

          {/* Social Endpoints */}
          <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
            <span className="font-mono text-xs uppercase tracking-widest text-[#a0a6bd] mr-1">
              Connect:
            </span>
            {siteConfig.socials.map((social) => (
              <IconButton
                key={social.name}
                href={social.url}
                icon={social.icon}
                ariaLabel={social.label}
                size="md"
              />
            ))}
          </div>
        </div>

        {/* Right Photo Area */}
        <div className="shrink-0 relative">
          <div className="hero-photo-wrap p-1.5 rounded-full">
            <img
              src={siteConfig.avatarUrl}
              alt="Alessio Naji-Sepasgozar"
              width={260}
              height={260}
              loading="eager"
              decoding="async"
              className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-[#16161e] shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
