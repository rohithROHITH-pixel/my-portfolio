"use client";

import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState("");

  useEffect(() => {
    const logs = [
      "SYNCHRONIZING_CORES...",
      "FETCHING_NEURAL_WEIGHTS...",
      "BUILDING_SPATIAL_GRIDS...",
      "ALLOCATING_MEMORY_SEGMENTS...",
      "SYSTEM_READY_V4.0"
    ];

    let logIdx = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }

        if (prev % 20 === 0) {
          setLog(logs[logIdx]);
          logIdx = Math.min(logIdx + 1, logs.length - 1);
        }

        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      {/* Background Energy Matrix */}
      <div className="absolute inset-0 opacity-10 data-grid scale-150" />
      
      <div className="w-full max-w-2xl px-12 relative z-10">
        <div className="flex items-end justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-primary text-[11px] font-black tracking-[1em] uppercase">Tactical_OS</h2>
            <div className="text-5xl font-headline font-black text-white tracking-tighter leading-none">
              ROHITH <span className="text-primary">YP</span>
            </div>
          </div>
          <div className="font-mono text-xl text-primary font-black">
            {progress}%
          </div>
        </div>

        {/* Tactical Progress Bar */}
        <div className="h-[2px] w-full bg-white/5 relative overflow-hidden mb-8">
          <div 
            className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_20px_rgba(130,26,252,1)] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dynamic Log Line */}
        <div className="flex items-center gap-4 text-[10px] font-mono text-white/40 uppercase tracking-[0.4em]">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {log}
        </div>
      </div>

      {/* Hardware Identifiers */}
      <div className="absolute bottom-12 right-12 text-[9px] font-mono text-white/10 text-right space-y-1">
        <p>CORE_TEMP: OPTIMAL</p>
        <p>SECURE_SESSION_ID: {Math.random().toString(16).substring(2, 10).toUpperCase()}</p>
      </div>
    </div>
  );
}
