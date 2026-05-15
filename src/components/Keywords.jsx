import { useState } from 'react';
import { keywords } from '../data/content';

const catColors = {
  foundations: { bg: 'bg-accent/10', text: 'text-accent-light', label: 'MDP' },
  ppo: { bg: 'bg-teal/10', text: 'text-teal', label: 'PPO' },
  reward: { bg: 'bg-coral/10', text: 'text-coral', label: 'Reward' },
  training: { bg: 'bg-blue/10', text: 'text-blue', label: 'Training' },
  sim: { bg: 'bg-amber/10', text: 'text-amber', label: 'Simulation' },
  perception: { bg: 'bg-pink/10', text: 'text-pink', label: 'Perception' },
  eval: { bg: 'bg-green/10', text: 'text-green', label: 'Evaluation' },
};

export default function Keywords() {
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState(null);

  const cats = ['all', ...Object.keys(catColors)];
  const filtered = filter === 'all' ? keywords : keywords.filter(k => k.cat === filter);

  return (
    <section id="keywords" className="py-24 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-pink text-sm tracking-[0.15em] uppercase mb-3">Vocabulary</p>
        <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-4">Key RL keywords</h2>
        <p className="text-text-muted max-w-2xl mb-8">
          {filtered.length} terms your team needs to know. Click any card to expand.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {cats.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={`px-3 py-1.5 rounded-md text-sm capitalize transition-colors border ${
                filter === c ? 'bg-accent/15 text-accent-light border-accent/30' : 'text-text-muted border-border hover:border-border-light'
              }`}>
              {c === 'all' ? `All (${keywords.length})` : catColors[c]?.label || c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((kw, i) => {
            const cc = catColors[kw.cat] || { bg: 'bg-surface-3', text: 'text-text-muted', label: kw.cat };
            return (
              <div key={i}
                className={`rounded-xl border p-4 cursor-pointer transition-all ${
                  open === i ? 'border-accent/30 bg-accent/5' : 'border-border bg-surface-2 hover:border-border-light'
                }`}
                onClick={() => setOpen(open === i ? null : i)}>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-text text-sm">{kw.term}</p>
                    {kw.alias && <p className="text-xs font-[var(--font-mono)] text-text-dim mt-0.5">{kw.alias}</p>}
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 ${cc.bg} ${cc.text}`}>
                    {cc.label}
                  </span>
                </div>
                {open === i && (
                  <p className="text-sm text-text-muted mt-3 pt-3 border-t border-border/50 leading-relaxed">{kw.def}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
