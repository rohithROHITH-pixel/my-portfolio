"use client";

import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const bootSequence = [
      "INITIALIZING NEURAL CORE...",
      "FETCHING ASSETS FROM EDGE NODES...",
      "ENCRYPTING SESSION DATA...",
      "SYNCING SPATIAL INTERFACE...",
      "SYSTEM_READY_V3.0"
    ];

    let logIdx = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800);
          }, 800);
          return 100;
        }

        if (prev % 20 === 0 && logIdx < bootSequence.length) {
          setLogs(curr => [...curr, `> ${bootSequence[logIdx]}`].slice(-4));
          logIdx++;
        }

        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050508]">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 energy-grid opacity-30" />
      
      <div className="w-full max-w-lg px-8 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-1">
            <h2 className="text-primary text-[10px] font-bold tracking-[0.8em] uppercase opacity-60">Neural Uplink</h2>
            <div className="text-3xl font-headline font-bold text-white tracking-tighter">
              ROHITH <span className="text-primary/80">YP</span>
            </div>
          </div>
          <div className="text-right font-mono text-sm text-primary/50">
            {progress.toString().padStart(3, '0')}%
          </div>
        </div>

        {/* Loading Bar Container */}
        <div className="relative h-[1px] w-full bg-white/10 overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_rgba(130,26,252,0.8)] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dynamic Boot Logs */}
        <div className="mt-12 space-y-2 font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
          {logs.map((log, i) => (
            <p key={i} className={i === logs.length - 1 ? "text-primary/80" : ""}>{log}</p>
          ))}
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/10" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/10" />
    </div>
  );
}