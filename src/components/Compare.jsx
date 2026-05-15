import { cvVsRl } from '../data/content';

export default function Compare() {
  return (
    <section id="compare" className="py-24 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-coral text-sm tracking-[0.15em] uppercase mb-3">Key difference</p>
        <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-4">CV training vs RL training</h2>
        <p className="text-text-muted max-w-2xl mb-12">
          Your team knows YOLO and image classification. Here's how RL fundamentally differs across every dimension.
        </p>

        <div className="space-y-3">
          {cvVsRl.map((row, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[140px_1fr_1fr] gap-3 md:gap-4 items-start">
              <div className="text-sm font-medium text-text-dim uppercase tracking-wider pt-3">{row.dim}</div>
              <div className="rounded-lg border border-border bg-surface-2 p-4">
                <span className="text-xs text-text-dim block mb-1">Supervised / CV</span>
                <p className="text-sm text-text-muted">{row.cv}</p>
              </div>
              <div className="rounded-lg border border-coral/20 bg-coral/5 p-4">
                <span className="text-xs text-coral block mb-1">Reinforcement learning</span>
                <p className="text-sm text-text">{row.rl}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
