import React from 'react';
import { siteConfig } from '../../data/siteConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[#0a0a0f] py-12 px-6 md:px-12 text-[#a0a6bd]">
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-mono text-sm text-[#e8e8f0]">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-[#a0a6bd]/70 mt-1">
            Engineered with React, Tailwind CSS, and clean modular architecture.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {siteConfig.socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-lg bg-[#1c1c26] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#a0a6bd] hover:text-[#7effd4] hover:border-[#7effd4] hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon className="text-base" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
