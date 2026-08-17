import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiPypi } from 'react-icons/si';

export const siteConfig = {
  name: 'Alessio Naji-Sepasgozar',
  shortName: 'Alessio',
  role: 'AI Engineer & ML Developer',
  tagline: '— AI Engineer & ML Developer',
  email: 'alessionaji1@gmail.com',
  resumeUrl: './resume.pdf',
  avatarUrl: '/alessiosi.jpg',
  location: 'United States',
  
  heroTypedStrings: [
    'predictive ML models.',
    'agentic AI systems.',
    'full-stack applications.',
    'high-throughput data pipelines.',
    'things that matter.'
  ],

  navLinks: [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ],

  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alessio-naji/',
      icon: FaLinkedin,
      label: 'Visit Alessio\'s LinkedIn profile'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Anaji00',
      icon: FaGithub,
      label: 'Visit Alessio\'s GitHub profile'
    },
    {
      name: 'PyPI',
      url: 'https://pypi.org/user/Anaji00/',
      icon: SiPypi,
      label: 'Visit Alessio\'s PyPI packages'
    },
    {
      name: 'Email',
      url: 'mailto:alessionaji1@gmail.com',
      icon: FaEnvelope,
      label: 'Send an email to Alessio'
    }
  ],

  stats: [
    {
      value: '8+',
      label: 'Shipped Projects',
      detail: 'Production AI, ML & Full-Stack'
    },
    {
      value: 'ML & Full-Stack',
      label: 'Core Specialization',
      detail: 'Neural Nets to Cloud APIs'
    },
    {
      value: 'Summa Cum Laude',
      label: 'CS Graduate',
      detail: 'Top Academic Honors'
    },
    {
      value: '4x',
      label: 'Cloud Certifications',
      detail: 'AWS, Azure, Google Cloud'
    }
  ],

  about: {
    paragraphs: [
      `I didn't find programming — <strong>it found me</strong>. For years I searched for direction, unsure where my skills and passions aligned. One day, experimenting with HTML and scripts, something <em>clicked</em>. What started as curiosity turned into obsession: responsive web apps, backend microservices, and deep learning architectures from the ground up.`,
      `I'm a Computer Science graduate (Summa Cum Laude) who thrives at the intersection of creative intuition and rigorous systems design. I've embraced living with <strong>OCD, Tourette's, and ADHD</strong> — not as obstacles, but as hyper-focused signal. They sharpen my precision on nuances others overlook, fuel marathon deep-work sessions, and drive unconventional problem-solving.`,
      `Whether architecting low-latency ML pipelines, deploying autonomous AI agents, or building robust full-stack platforms, I bring relentless energy, a hacker's curiosity, and dedication to excellence in every line of code.`
    ]
  }
};
