import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tips } from '../data/content';
import { ChevronDown, Check, X } from 'lucide-react';

export default function Tips() {
  const [open, setOpen] = useState(null);
  const [filter, setFilter] = useState('all');

  const cats = ['all', ...new Set(tips.map(t => t.cat))];
  const filtered = filter === 'all' ? tips : tips.filter(t => t.cat === filter);

  return (
    <section id="tips" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-teal text-sm tracking-[0.15em] uppercase mb-3">Practical wisdom</p>
        <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-4">10 tips for successful training</h2>
        <p className="text-text-muted max-w-2xl mb-8">
          The difference between "RL works in theory" and "the robot actually picks up the cube."
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {cats.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={`px-3 py-1.5 rounded-md text-sm capitalize transition-colors ${
                filter === c ? 'bg-teal/15 text-teal border border-teal/30' : 'text-text-muted border border-border hover:border-border-light'
              }`}>
              {c}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {filtered.map(tip => (
            <div key={tip.num}
              className={`rounded-xl border transition-colors cursor-pointer ${
                open === tip.num ? 'border-teal/30 bg-teal/5' : 'border-border bg-surface hover:border-border-light'
              }`}
              onClick={() => setOpen(open === tip.num ? null : tip.num)}>
              <div className="flex items-center gap-4 p-4 md:p-5">
                <span className="text-2xl font-[var(--font-display)] text-text-dim w-8 text-center">
                  {tip.num}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-text">{tip.title}</h3>
                  <div className="flex gap-2 mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      tip.priority === 'critical' ? 'bg-coral/15 text-coral' : 'bg-amber/15 text-amber'
                    }`}>
                      {tip.priority}
                    </span>
                    <span className="text-xs text-text-dim font-[var(--font-mono)]">WBS {tip.wbs}</span>
                  </div>
                </div>
                <ChevronDown size={18} className={`text-text-dim transition-transform ${open === tip.num ? 'rotate-180' : ''}`} />
              </div>

              <AnimatePresence>
                {open === tip.num && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
                    className="overflow-hidden">
                    <div className="px-5 pb-5 grid md:grid-cols-2 gap-4" onClick={e => e.stopPropagation()}>
                      <div className="rounded-lg bg-green/5 border border-green/20 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Check size={14} className="text-green" />
                          <span className="text-xs font-medium text-green uppercase tracking-wider">Do</span>
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed">{tip.do_text}</p>
                      </div>
                      <div className="rounded-lg bg-coral/5 border border-coral/20 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <X size={14} className="text-coral" />
                          <span className="text-xs font-medium text-coral uppercase tracking-wider">Don't</span>
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed">{tip.dont_text}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
