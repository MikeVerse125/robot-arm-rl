import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stages } from '../data/content';
import { AlertTriangle } from 'lucide-react';

const colorMap = {
  accent: { bg: 'bg-accent/10', border: 'border-accent/30', text: 'text-accent-light', dot: 'bg-accent', line: 'border-accent/30' },
  teal: { bg: 'bg-teal/10', border: 'border-teal/30', text: 'text-teal', dot: 'bg-teal', line: 'border-teal/30' },
  coral: { bg: 'bg-coral/10', border: 'border-coral/30', text: 'text-coral', dot: 'bg-coral', line: 'border-coral/30' },
  blue: { bg: 'bg-blue/10', border: 'border-blue/30', text: 'text-blue', dot: 'bg-blue', line: 'border-blue/30' },
  green: { bg: 'bg-green/10', border: 'border-green/30', text: 'text-green', dot: 'bg-green', line: 'border-green/30' },
};

export default function Stages() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  const c = colorMap[stage.color];

  return (
    <section id="stages" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue text-sm tracking-[0.15em] uppercase mb-3">After setup</p>
        <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-4">What you can achieve</h2>
        <p className="text-text-muted max-w-2xl mb-12">
          Five progressive stages — each unlocks new capabilities. Every stage has a decision gate before proceeding.
        </p>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {stages.map((s, i) => {
            const sc = colorMap[s.color];
            return (
              <button key={i} onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all border flex-shrink-0 ${
                  i === active ? `${sc.bg} ${sc.border} ${sc.text}` : 'border-border text-text-muted hover:border-border-light'
                }`}>
                Stage {s.num}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}>
            <div className={`rounded-xl border ${c.border} ${c.bg} p-6 md:p-8`}>
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <h3 className={`text-xl font-medium ${c.text}`}>{stage.title}</h3>
                  <p className="text-sm text-text-dim mt-1">{stage.time}</p>
                </div>
                <code className="text-xs font-[var(--font-mono)] text-text-dim">{stage.files}</code>
              </div>

              <ul className="space-y-3">
                {stage.unlocks.map((u, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full ${c.dot} mt-2 flex-shrink-0`} />
                    <span className="text-text-muted">{u}</span>
                  </li>
                ))}
              </ul>

              {stage.gate && (
                <div className="mt-6 flex items-start gap-3 p-4 rounded-lg bg-amber/5 border border-amber/20">
                  <AlertTriangle size={16} className="text-amber mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-medium text-amber uppercase tracking-wider">Decision gate</span>
                    <p className="text-sm text-text-muted mt-1">{stage.gate}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
