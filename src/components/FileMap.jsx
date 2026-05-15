import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fileMap } from '../data/content';
import { FileCode, ChevronRight } from 'lucide-react';

const catColors = {
  create: { badge: 'bg-teal/15 text-teal', label: 'You create' },
  config: { badge: 'bg-accent/15 text-accent-light', label: 'You configure' },
  use: { badge: 'bg-blue/15 text-blue', label: 'Use as-is' },
  asset: { badge: 'bg-amber/15 text-amber', label: 'Asset' },
};

export default function FileMap() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="files" className="py-24 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent text-sm tracking-[0.15em] uppercase mb-3">Project structure</p>
        <h2 className="font-[var(--font-display)] text-3xl md:text-4xl mb-4">Files you need to create</h2>
        <p className="text-text-muted max-w-2xl mb-12">
          Click any file to see its role, what goes inside, and example code.
          80% of Sprint 3 work happens in a single file.
        </p>

        {fileMap.map((section, si) => (
          <div key={si} className="mb-8">
            <h3 className="text-sm font-medium text-text-dim uppercase tracking-wider mb-3">{section.section}</h3>
            <div className="space-y-2">
              {section.files.map((file, fi) => {
                const key = `${si}-${fi}`;
                const isOpen = expanded === key;
                const cc = catColors[file.cat];
                return (
                  <div key={key}
                    className={`rounded-xl border transition-colors cursor-pointer ${
                      isOpen ? 'border-accent/30 bg-accent/5' : 'border-border bg-surface-2 hover:border-border-light'
                    }`}
                    onClick={() => setExpanded(isOpen ? null : key)}>
                    <div className="flex items-center gap-3 p-4">
                      <FileCode size={18} className="text-text-dim flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <code className="text-sm font-[var(--font-mono)] text-text">{file.path}</code>
                        <p className="text-xs text-text-muted mt-0.5">{file.role}</p>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${cc.badge}`}>{cc.label}</span>
                      <ChevronRight size={16} className={`text-text-dim transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
                          className="overflow-hidden" onClick={e => e.stopPropagation()}>
                          <div className="px-4 pb-4 border-t border-border/50 pt-4">
                            <p className="text-sm text-text-muted mb-4">{file.detail}</p>
                            {file.code && (
                              <pre className="rounded-lg bg-bg p-4 overflow-x-auto text-xs font-[var(--font-mono)] text-text-muted leading-relaxed border border-border">
                                {file.code}
                              </pre>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
