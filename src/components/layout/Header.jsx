import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../data/siteConfig';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(10,10,15,0.92)] border-b border-[rgba(255,255,255,0.08)] backdrop-blur-md py-3.5 px-6 md:px-12 shadow-lg shadow-black/20'
          : 'bg-transparent py-5 px-6 md:px-12'
      }`}
    >
      <nav
        className="max-w-[1120px] mx-auto flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <a
          href="#top"
          className="font-syne text-xl md:text-2xl font-extrabold text-white tracking-tight hover:opacity-90 transition-opacity"
          aria-label="Return to top of page"
        >
          AN<span className="text-[#7effd4]">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#a0a6bd] hover:text-[#7effd4] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-medium px-4 py-2 rounded-lg border border-[#7effd4] text-[#7effd4] hover:bg-[#7effd4]/10 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#1c1c26] text-[#e8e8f0] focus:outline-none focus:ring-2 focus:ring-[#7effd4]"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-current rounded transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current rounded transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current rounded transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
            }`}
          />
        </button>

        {/* Mobile Drawer Menu */}
        <div
          className={`md:hidden fixed top-[65px] left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)] px-8 py-8 flex flex-col items-center gap-6 shadow-2xl transition-all duration-300 ${
            menuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm uppercase tracking-widest text-[#e8e8f0] hover:text-[#7effd4] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center font-mono text-sm py-3 rounded-lg border border-[#7effd4] text-[#7effd4] hover:bg-[#7effd4]/10 transition-colors mt-2"
          >
            Download Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
