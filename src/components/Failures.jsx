import { failureModes } from '../data/content';
import { AlertTriangle, ArrowRight } from 'lucide-react';

export default function Failures() {
  return (
    <section id="failures" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-coral text-sm tracking-[0.15em] uppercase mb-3">Troubleshooting</p>
        <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-4">Common failure modes</h2>
        <p className="text-text-muted max-w-2xl mb-12">
          When training goes wrong, match the symptom to the cause. Print this and keep it next to your monitor.
        </p>

        <div className="space-y-3">
          {failureModes.map((f, i) => (
            <div key={i} className="rounded-xl border border-border bg-surface-2 p-4 md:p-5
              grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 md:gap-4 items-center">
              <div>
                <span className="text-[10px] text-coral uppercase tracking-wider font-medium">Symptom</span>
                <p className="text-sm text-text mt-0.5">{f.symptom}</p>
              </div>
              <ArrowRight size={14} className="text-text-dim hidden md:block" />
              <div>
                <span className="text-[10px] text-amber uppercase tracking-wider font-medium">Likely cause</span>
                <p className="text-sm text-text-muted mt-0.5">{f.cause}</p>
              </div>
              <ArrowRight size={14} className="text-text-dim hidden md:block" />
              <div>
                <span className="text-[10px] text-teal uppercase tracking-wider font-medium">Fix</span>
                <p className="text-sm text-teal mt-0.5">{f.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
