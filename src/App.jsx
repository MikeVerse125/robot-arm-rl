import Nav from './components/Nav';
import Hero from './components/Hero';
import RLLoop from './components/RLLoop';
import Compare from './components/Compare';
import Tips from './components/Tips';
import FileMap from './components/FileMap';
import Stages from './components/Stages';
import Keywords from './components/Keywords';
import Failures from './components/Failures';

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <RLLoop />
      <Compare />
      <Tips />
      <FileMap />
      <Stages />
      <Keywords />
      <Failures />
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-text-dim text-sm">
            BlueOC — Vision-Guided Robot Manipulation PoC
          </p>
          <p className="text-text-dim text-xs mt-2">
            Isaac Lab + PPO + FoundationPose — 4-week sprint plan
          </p>
        </div>
      </footer>
    </div>
  );
}
