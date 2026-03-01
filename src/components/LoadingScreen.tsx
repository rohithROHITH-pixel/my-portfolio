"use client";

import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState("");
  const [sessionId, setSessionId] = useState("INIT_PENDING");

  useEffect(() => {
    setSessionId(Math.random().toString(16).substring(2, 10).toUpperCase());
    
    const logs = [
      "SYNCHRONIZING_NEURAL_CORES...",
      "FETCHING_SPATIAL_WEIGHTS...",
      "BUILDING_TACTICAL_GRID...",
      "ALLOCATING_BUFFER_SEGMENTS...",
      "NEURAL_INTERFACE_STABLE_V4.0"
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
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Background Matrix */}
      <div className="absolute inset-0 opacity-10 data-grid scale-150" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            className="data-stream" 
            style={{ 
              left: `${i * 10}%`, 
              animationDelay: `${i * 0.5}s`,
              height: '100px'
            }} 
          />
        ))}
      </div>
      
      <div className="w-full max-w-2xl px-12 relative z-10">
        <div className="flex items-end justify-between mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-primary animate-pulse" />
              <h2 className="text-primary text-[10px] font-black tracking-[1em] uppercase">Tactical_Neural_OS</h2>
            </div>
            <div className="text-6xl md:text-8xl font-headline font-black text-white tracking-tighter leading-none">
              ROHITH <span className="text-primary/60">YP</span>
            </div>
          </div>
          <div className="font-mono text-3xl text-primary font-black animate-pulse">
            {progress}%
          </div>
        </div>

        {/* Technical Progress Bar */}
        <div className="h-[2px] w-full bg-white/5 relative overflow-hidden mb-8">
          <div 
            className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_30px_rgba(130,26,252,1)] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dynamic Log Line */}
        <div className="flex items-center gap-6 text-[10px] font-mono text-white/60 uppercase tracking-[0.5em] h-4">
          <span className="w-1 h-full bg-secondary animate-bounce" />
          {log}
        </div>
      </div>

      {/* Hardware Identifiers */}
      <div className="absolute bottom-12 right-12 text-[10px] font-mono text-white/20 text-right space-y-2">
        <p className="flex items-center justify-end gap-2">
          CORE_TEMP: <span className="text-emerald-400">OPTIMAL</span>
        </p>
        <p className="flex items-center justify-end gap-2">
          AUTH_LEVEL: <span className="text-primary">ADMIN_01</span>
        </p>
        <p className="text-white/10 uppercase">Session_ID: {sessionId}</p>
      </div>
    </div>
  );
}