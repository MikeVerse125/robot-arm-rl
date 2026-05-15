import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { rlLoopSteps } from '../data/content';

const colorMap = {
  teal: { bg: 'bg-teal/10', border: 'border-teal/30', text: 'text-teal', dot: 'bg-teal' },
  accent: { bg: 'bg-accent/10', border: 'border-accent/30', text: 'text-accent-light', dot: 'bg-accent' },
  coral: { bg: 'bg-coral/10', border: 'border-coral/30', text: 'text-coral', dot: 'bg-coral' },
  blue: { bg: 'bg-blue/10', border: 'border-blue/30', text: 'text-blue', dot: 'bg-blue' },
  amber: { bg: 'bg-amber/10', border: 'border-amber/30', text: 'text-amber', dot: 'bg-amber' },
  green: { bg: 'bg-green/10', border: 'border-green/30', text: 'text-green', dot: 'bg-green' },
};

export default function RLLoop() {
  const [active, setActive] = useState(0);
  const step = rlLoopSteps[active];
  const c = colorMap[step.color];

  return (
    <section id="loop" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent text-sm tracking-[0.15em] uppercase mb-3">How it works</p>
        <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-4">The RL training loop</h2>
        <p className="text-text-muted max-w-2xl mb-12">
          Six stages repeat millions of times. The robot goes from random flailing to precise pick-and-place.
          Click each stage to see what happens.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {rlLoopSteps.map((s, i) => {
            const sc = colorMap[s.color];
            return (
              <button key={s.id} onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                  i === active
                    ? `${sc.bg} ${sc.border} ${sc.text}`
                    : 'border-border text-text-muted hover:border-border-light'
                }`}>
                <span className="mr-2 text-xs opacity-60">{i + 1}</span>
                {s.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className={`rounded-xl border ${c.border} ${c.bg} p-6 md:p-8`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-3 h-3 rounded-full ${c.dot}`} />
              <h3 className={`text-xl font-medium ${c.text}`}>{step.title}</h3>
              <span className="ml-auto text-xs font-[var(--font-mono)] text-text-dim">WBS {step.wbs}</span>
            </div>
            <p className="text-text-muted leading-relaxed">{step.detail}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-center gap-1">
          {rlLoopSteps.map((s, i) => (
            <div key={i} className={`h-1 rounded-full transition-all ${i === active ? `w-8 ${colorMap[s.color].dot}` : 'w-2 bg-border'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
