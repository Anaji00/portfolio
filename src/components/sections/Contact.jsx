import React, { useState } from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaCheckCircle } from 'react-icons/fa';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate asynchronous sending
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <SectionWrapper
      id="contact"
      number="04."
      title="Let's Build Something Great"
      subtitle="Open to full-time engineering roles, high-impact ML initiatives, and strategic technical collaborations."
      altBg={true}
    >
      <div className="max-w-2xl mx-auto">
        {submitted ? (
          <div
            className="p-8 rounded-xl bg-[#1c1c26] border border-[#7effd4]/40 text-center flex flex-col items-center gap-4 animate-fadeIn"
            role="status"
            aria-live="polite"
          >
            <FaCheckCircle className="text-4xl text-[#7effd4]" />
            <h3 className="font-syne text-xl font-bold text-white">
              Message Transmitted Successfully!
            </h3>
            <p className="font-mono text-xs md:text-sm text-[#a0a6bd] max-w-md">
              Thank you for reaching out. I will review your note and respond promptly.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSubmitted(false)}
              className="mt-2"
            >
              Send Another Note
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#1c1c26]/60 border border-[rgba(255,255,255,0.08)] p-6 sm:p-8 rounded-2xl flex flex-col gap-5 shadow-xl"
            noValidate={false}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="font-mono text-xs font-semibold uppercase tracking-wider text-[#a0a6bd]"
                >
                  Your Name <span className="text-[#7effd4]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Turing"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#111118] border border-[rgba(255,255,255,0.09)] rounded-lg px-4 py-3 text-sm text-[#e8e8f0] font-mono focus:outline-none focus:border-[#7effd4] focus:ring-1 focus:ring-[#7effd4] placeholder-[#a0a6bd]/40 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="font-mono text-xs font-semibold uppercase tracking-wider text-[#a0a6bd]"
                >
                  Email Address <span className="text-[#7effd4]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#111118] border border-[rgba(255,255,255,0.09)] rounded-lg px-4 py-3 text-sm text-[#e8e8f0] font-mono focus:outline-none focus:border-[#7effd4] focus:ring-1 focus:ring-[#7effd4] placeholder-[#a0a6bd]/40 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="font-mono text-xs font-semibold uppercase tracking-wider text-[#a0a6bd]"
              >
                Project Details / Message <span className="text-[#7effd4]">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                placeholder="Tell me about your project, team, or opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#111118] border border-[rgba(255,255,255,0.09)] rounded-lg px-4 py-3 text-sm text-[#e8e8f0] font-mono focus:outline-none focus:border-[#7effd4] focus:ring-1 focus:ring-[#7effd4] placeholder-[#a0a6bd]/40 resize-y transition-colors"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              fullWidth={true}
              icon={FaPaperPlane}
              disabled={isSubmitting}
              className="mt-2"
            >
              {isSubmitting ? 'Transmitting...' : 'Send Message'}
            </Button>
          </form>
        )}

        {/* Direct Channels Alternative */}
        <div className="mt-10 pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#a0a6bd]">
          <span>Or reach me directly:</span>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-[#7effd4] hover:underline underline-offset-4"
            >
              <FaEnvelope aria-hidden="true" />
              <span>{siteConfig.email}</span>
            </a>
            <a
              href="https://www.linkedin.com/in/alessio-naji/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#5b9cf6] hover:underline underline-offset-4"
            >
              <FaLinkedin aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
