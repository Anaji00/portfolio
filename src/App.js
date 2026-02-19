import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


// ── Intersection Observer hook for scroll reveals ──────────────────────────
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) {setVisible(true); obs.disconnect(); }}, 
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();

  }, [threshold]);
  return [ref, visible];
}


// ── Typed text animation ───────────────────────────────────────────────────

function TypedText({ strings, speed = 80, pause = 1800}) {
  const [display, setDisplayed] = useState('');
  const [idx, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  useEffect(() => {
    const current = strings[idx % strings.length];
    let timeout;
    if (typing) {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, display.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplayed(display.slice(0, -1)), speed / 2);
      } else {
        setIndex(i => i + 1);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);

  }, [display, typing, idx, strings, speed, pause]);
  return (
    <span className='typed-text'>
      {display}
      <span className='cursor'></span>
    </span>
  );
}


// ── Projects data ──────────────────────────────────────────────────────────


// ── Projects data ──────────────────────────────────────────────────────────
const projects = [
  {
    title: 'UKNOWBALL',
    subtitle: 'NBA Player Predictive Models',
    description: 'ML pipeline using XGBoost + MLP to predict NBA player performance metrics. Feature-engineered from historical game data.',
    tags: ['Python', 'XGBoost', 'PyTorch', 'Data Engineering', 'ML Pipeline'],
    link: 'https://github.com/Anaji00/UKNOWBALL',
    featured: true,
  },
  {
    title: 'DebateAI',
    subtitle: 'Historical Figure Chatbot',
    description: 'FastAPI + React debate chatbot. Challenge historical figures, sharpen rhetoric. Persona-prompted LLM backend.',
    tags: ['FastAPI', 'React', 'LLM', 'Python', 'Data Cleaning', 'CI/CD'],
    link: 'https://github.com/Anaji00/debateai-frontend',
    featured: true,
  },
  {
    title: 'MarketMaker',
    subtitle: 'Agentic AI Trading Signals & Market Intelligence',
    description: 'AI-driven market signal and analysis platform that delivers real-time insights, trade alerts, and quantitative guidance across financial markets.',
    tags: ['Trading', 'AI', 'Signals', 'Market Analysis', 'Finance Tech', 'Isolation Forest'],
    link: 'https://github.com/Anaji00/MarketMaker',
    featured: true,
  },
  {
    title: 'functools2',
    subtitle: 'Async LRU Cache Library for Python',
    description:'A modern update to functools, feauturing an asyncio-aware caching library that provides TTL (time-to-live), single-flight execution, and stale-while-revalidate support to efficiently cache async function results in Python applications.',
    tags: ['Python', 'asyncio', 'caching', 'library', 'PyPI'],
    link: 'https://pypi.org/project/functools2/',
    featured: false,
  },
  {
  title: 'TrackApply',
  subtitle: 'Full-Stack Job Tracker',
  description: 'ASP.NET Core Web API + Angular frontend with JWT auth, role-secured endpoints, and SQLite persistence.',
  tags: ['ASP.NET Core', 'Angular', 'JWT', 'SQLite', 'Full-Stack', 'REST API'],
  link: 'https://github.com/Anaji00/TrackApply',
  featured: false,
  },
  {
    title: 'FabledKnights',
    subtitle: '2.5D Unity Game',
    description: 'Side-scrolling action game built in Unity with custom combat system, procedural elements, and original story.',
    tags: ['Unity', 'C#', 'Game Design', '2.5D'],
    link: 'https://github.com/Anaji00/FabledKnights',
    featured: false,
  },
  {
    title: 'Music-R-Us',
    subtitle: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform for music enthusiasts — catalog, cart, checkout, and admin dashboard.',
    tags: ['Full-Stack', 'E-Commerce', 'Web Dev'],
    link: 'https://github.com/Anaji00/ECommerce---Music-R-Us',
    featured: false,
  },
];

// ── Skills data ────────────────────────────────────────────────────────────
const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS', 'Java', 'C++', 'R', 'Go', 'Rust'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Angular', 'ASP.NET Core', 'FastAPI', 'Django', 'Flask', 'PowerBI', 'Tableu'],
  },
  {
    label: 'ML / Data',
    items: ['PyTorch', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'TensorFlow', 'NLP'],
  },
  {
    label: 'Concepts / Architecture',
    items: [
      'RESTful API Design',
      'Authentication & Authorization (JWT, OAuth 2.0)',
      'Caching Strategies (LRU, Redis, TTL)',
      'Rate Limiting & Throttling',
      'Design Patterns',
      'Asynchronous & Concurrent Programming',
      'Database Indexing & Query Optimization',
      'Microservices Architecture',
      'Dependency Injection',
      'Model Context Protocol (MCP)',
      'Agent Tooling & RAG Systems'
    ],
  },

  {
    label: 'Database / Caching Tools',
    items: ['PostgreSQL', 'SQLite', 'MongoDB', 'Redis']
  },
  {
    label: 'DevOps / Tools',
    items: ['Git', 'Docker', 'CI/CD', 'Cloud Deployments'],
  },
  {
    label: 'Certifications',
    items: ['AWS Cloud Practitioner', 'AWS Solutions Architect - Associate', 'Microsoft Azure Fundamentals', 'Google Associate Cloud Engineer']
  },
  
];

// -- project card component ───────────────────────────────────────────────────
function ProjectCard({ project, index}) {
  const [ref, visible] = useReveal();
  return (
    <div 
      ref={ref}
      className={`project-card ${project.featured ? 'featured' : ''} ${visible ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
      >
        <div className='card-inner'>
          <div className='card-header'>
            {project.featured && <span className='featured-badge'>Featured</span>}
            <h3 className='card-title'>{project.title}</h3>
            <p className='card-subtitle'>{project.subtitle}</p>
          </div>
          <p className='card-desc'>{project.description}</p>
          <div className='card-footer'>
            <div className='tags'>
            {project.tags.map(t=> <span key={t} className='tag'>{t}</span>)}
          </div>
          <a href={project.link} target='_blank' rel='noopener noreferrer' className='card-link'>
            <FaGithub size={14} /> 
            View Code
          </a>
        </div>
      </div>
    </div>    
  );
}

// -- Skill Group component ───────────────────────────────────────────────────────

function SkillGroup({ group, delay}) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`skill-group ${visible ? 'revealed' : ''}`}
      style={{ transitionDelay: `${delay}ms`}}
      >
        <p className={`skill-label`}>{group.label}</p>
        <div className='skill-items'>
          {group.items.map(s => <span key={s} className='skill-pill'>{s}</span>)}
        </div>
      </div>
  );
}


// ── Main App ───────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroRef, heroVisible] = useReveal(0.05);
  const [aboutRef, aboutVisible] = useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
}, []);

 return (
    <div className="portfolio">
      {/* ── NAV ────────────────────────────── */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <a href="#top" className="nav-logo">AN<span className="accent">.</span></a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['Projects', 'Skills', 'About', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          ))}
        </div>
        <button className='hamburger' onClick={() => setMenuOpen(m => !m)} aria-label='menu'>
          <span /> <span /> <span />
        </button>
      </nav>

      {/* ── HERO ────────────────────────────── */}
      <section id="top" ref={heroRef} className={`hero ${heroVisible ? 'revealed' : ''}`}>
        <div className='hero-bg-grid' />
        <div className='hero-content'>
          <p className='hero-eyebrow'>— AI Engineer & ML Developer</p>
          <h1 className='hero-name'>Alessio <br /> Naji-Sepasgozar</h1>
          <p className='hero-typed'>
            I build{' '}
            <TypedText strings={[
              'predictive ML models.',
              'full-stack applications.',
              'AI Agents.',
              'data pipelines.',
              'you know.. thinks that matter.'

            ]} />
          </p>
          <div className='hero-actions'>
            <a href='./resume.pdf' className='btn-primary'>Download Resume</a>
            <a href='#projects' className='btn-ghost'>See My Work ↓</a>
          </div>
          <div className='hero-social'>
            <a href='https://www.linkedin.com/in/alessio-naji/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin size={25} />
            </a>
            <a href='https://github.com/Anaji00' target='_blank' rel='noopener noreferrer'>
              <FaGithub size={25} />
            </a>
            <a href="mailto:alessionaji1@gmail.com">
              alessionaji1@gmail.com
            </a>
          </div>
        </div>
        <div className='hero-photo-wrap'>
          <div className='hero-photo-ring' />
          <img src='/alessiosi.jpg' alt='Alessio Naji-Sepasgozar' className='hero-photo' />
        </div>
      </section>


      {/* ── PROJECTS ───────────────────────── */}

      <section id='projects' className='projects-section'>
        <div className='section-inner'>
          <div className='section-header'>
            <span className='section-number'>01.</span>
            <h2 className='section-title'>Projects</h2>
          </div>
          <div className='projects-grid'>
            {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────── */}
      <section id='skills' className='skills-section'>
        <div className='section-inner'>
          <div className='section-header'>
            <span className='section-number'>02.</span>
            <h2 className='section-title'>Skills</h2>
          </div>
          <div className='skills-grid'>
            {skillGroups.map((g, i) => <SkillGroup key={g.label} group={g} delay={i * 100} />)}
          </div>
        </div>
      </section>
      {/* ── ABOUT ME ────────────────────────── */}
      <section id='about' className={'about-section'}>
        <div className='section-inner'>
          <div className='section-header'>
            <span className='section-number'>03.</span>
            <h2 className='section-title'>About</h2>
          </div>
          <div 
            ref = {aboutRef}
            className={`about-grid ${aboutVisible ? 'revealed' : ''}`}
            >
            <div className='about-text'>
              <p>
                I didn't find programming — <strong>it found me</strong>. For years I searched for direction, unsure where my skills and passions aligned. One day, joking around editing HTML to prank friends, something <em>clicked</em>. What started as curiosity turned into obsession: websites, then codebases, then deep learning models from scratch.
              </p>
              <p>
                I'm a CS graduate who operates at the intersection of creativity and logic. I've embraced living with <strong>OCD, Tourette's, and ADHD</strong> — not as obstacles but as signal. They sharpen my focus on details others miss, sustain deep work on hard problems, and produce thinking that takes unconventional paths.
              </p>
              <p>
                Whether crafting interfaces or training neural networks, I bring relentless energy, a hacker's mindset, and genuine curiosity to everything I build. 
              </p>

            </div>
            <div className='about-sidebar'>
              <div className='about-stat'>
                <span className='stat-num'>5+</span>
                <span className='stat-label'>Shipped Projects</span>
              </div>
              <div className='about-stat'>
                <span className='stat-num'>Machine Learning</span>
                <span className='stat-label'>& Full Stack development</span>
              </div>
              <div className='about-stat'>
                <span className='stat-num'>CS Graduate</span>
                <span className='stat-label'>Summa Cum Laude</span>
              </div>
            </div>
            </div>
        </div>
      </section>
      {/* ── CONTACT ─────────────────────────── */}
      <section id='contact' className='contact-section'>
        <div className='section-inner'>
          <div className='section-header'>
            <span className='section-number'>04.</span>
            <h2 className='section-title'>Contact</h2>
          </div>
          <p className='contact-sub'>
            Open to full-time roles, freelance, and interesting collaborations.
          </p>
          <form 
            className='contact-form'
            onSubmit={e => {e.preventDefault(); alert('Message Sent!'); }}
          >
            <div className='form-row'>
              <div className='form-field'>
                <label>Name</label>
                <input type='text' placeholder='Your Name' required />
              </div>
              <div className='form-field'>
                <label>Email</label>
                <input type='email' placeholder='Your Email' required />
              </div>
              </div>
            <div className='form-field'>
              <label>Message</label>
              <textarea rows='5' placeholder='Your Message' required />
            </div>
            <button type='submit' className='btn-primary btn-full'>Send Message →</button>
            </form>
            <div className='contact-alt'>
              <span>Or reach me directly:</span>
              <a href="mailto:alessionaji1@gmail.com">
                alessionaji1@gmail.com
              </a>
              <a href='https://www.linkedin.com/in/alessio-naji-sepasgozar/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
    
        <footer className='footer'>
          <p>© 2026 Alessio Naji=Sepasgozar. All rights reserved.</p>
          <p className='footer-sub'>Built with React + Tailwind. Designed with love.</p>
        </footer>
        </div>

  );
}