import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Coffee, Layers2, RotateCcw, WalletCards, Waves } from "lucide-react";

const stages = [
  { icon: WalletCards, title: "Apple Pay", detail: "You make a purchase" },
  { icon: Layers2, title: "Your Shortcut", detail: "Passes your chosen fields" },
  { icon: Waves, title: "SyncFlo", detail: "Checks and saves the expense" },
];

export default function CaptureDemo() {
  const container = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);
  const [phase, setPhase] = useState(2);
  const [playing, setPlaying] = useState(false);

  function finish() {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
    setPhase(2);
    setPlaying(false);
  }

  function play() {
    finish();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setPlaying(true);
    setPhase(0);
    timers.current = [
      window.setTimeout(() => setPhase(1), 850),
      window.setTimeout(() => setPhase(2), 1700),
      window.setTimeout(() => setPlaying(false), 2600),
    ];
  }

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        play();
        observer.disconnect();
      }
    }, { threshold: 0.55 });
    if (container.current) observer.observe(container.current);
    const stopWhenHidden = () => { if (document.hidden) finish(); };
    motion.addEventListener("change", finish);
    document.addEventListener("visibilitychange", stopWhenHidden);
    return () => {
      observer.disconnect();
      timers.current.forEach(window.clearTimeout);
      motion.removeEventListener("change", finish);
      document.removeEventListener("visibilitychange", stopWhenHidden);
    };
  }, []);

  return (
    <div className="capture-demo" ref={container} data-phase={phase} data-playing={playing}>
      <div className="demo-heading">
        <span>A coffee, from tap to log</span>
        <button className="replay-button" type="button" onClick={play} aria-label="Replay example expense capture">
          <RotateCcw size={15} aria-hidden="true" /> Replay
        </button>
      </div>
      <ol className="demo-pipeline" aria-label="Example expense journey">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <li key={stage.title} data-active={phase >= index}>
              <span className="pipeline-icon"><Icon size={25} strokeWidth={1.8} aria-hidden="true" /></span>
              <strong>{stage.title}</strong>
              <span>{stage.detail}</span>
              {index < 2 && <ArrowRight className="pipeline-arrow" size={20} aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
      <div className="demo-expense">
        <span className="coffee-icon"><Coffee size={23} aria-hidden="true" /></span>
        <div><strong>Coffee</strong><span>Food &amp; Drink</span></div>
        <div className="expense-amount"><strong>USD 2.00</strong><span>{phase === 2 && <Check size={13} aria-hidden="true" />} {['Purchase made', 'Fields received', 'Added to Expenses'][phase]}</span></div>
      </div>
      <p className="demo-caption">Example shown. Requires the Wallet automation you set up in Shortcuts.</p>
    </div>
  );
}
