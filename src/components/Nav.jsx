import { useState, useEffect } from 'react';

const links = [
  { id: 'loop', label: 'RL loop' },
  { id: 'compare', label: 'CV vs RL' },
  { id: 'tips', label: 'Tips' },
  { id: 'files', label: 'File map' },
  { id: 'stages', label: 'Stages' },
  { id: 'keywords', label: 'Keywords' },
  { id: 'failures', label: 'Debug' },
];

export default function Nav() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map(l => document.getElementById(l.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].getBoundingClientRect().top < 200) {
          setActive(links[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-[var(--font-display)] text-lg tracking-tight">BlueOC <span className="text-accent">RL Guide</span></span>
        <div className="hidden md:flex gap-1">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors ${active === l.id ? 'bg-accent/15 text-accent-light' : 'text-text-muted hover:text-text'}`}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
