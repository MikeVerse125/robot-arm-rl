import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_50%)] opacity-[0.07]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/30 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-border/20 rounded-full" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
          BlueOC — Isaac Lab + PPO + FoundationPose
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-[var(--font-display)] text-5xl md:text-7xl leading-[1.1] mb-6">
          Train a robot arm<br />
          <span className="italic text-accent-light">to pick and place</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-text-muted text-lg max-w-xl mx-auto mb-8">
          Complete guide to RL training pipeline — from environment setup to demo-ready policy.
          Covers the full RL loop, file structure, reward design, debugging, and evaluation.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap">
          <a href="#loop" className="px-6 py-2.5 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-light transition-colors">
            Explore the RL loop
          </a>
          <a href="#files" className="px-6 py-2.5 border border-border text-text-muted rounded-lg text-sm hover:border-accent hover:text-accent transition-colors">
            File structure
          </a>
        </motion.div>
      </div>
    </section>
  );
}
