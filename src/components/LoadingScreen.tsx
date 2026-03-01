"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface StreamProps {
  left: string;
  delay: string;
  duration: string;
}

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [streams, setStreams] = useState<StreamProps[]>([]);
  const [stage, setStage] = useState(0); // 0: Macro, 1: Spatial, 2: Final

  useEffect(() => {
    setSessionId(Math.random().toString(16).substring(2, 10).toUpperCase());
    
    const generatedStreams = Array.from({ length: 15 }).map((_, i) => ({
      left: `${i * 7}%`,
      delay: `${i * 0.3}s`,
      duration: `${2 + Math.random() * 3}s`
    }));
    setStreams(generatedStreams);

    const logs = [
      "ESTABLISHING_NEURAL_LINK...",
      "SYNCING_SPATIAL_NODES...",
      "DECRYPTING_CORE_PROTOCOL...",
      "INITIALIZING_TACTICAL_HUD...",
      "SYSTEM_STABLE_READY"
    ];

    let logIdx = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 1;
        
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800);
          }, 1200);
          return 100;
        }

        if (next === 30) setStage(1);
        if (next === 70) setStage(2);

        if (next % 20 === 0) {
          setLog(logs[logIdx]);
          logIdx = Math.min(logIdx + 1, logs.length - 1);
        }

        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden px-6">
      {/* Dynamic Background Data Grid */}
      <div 
        className={cn(
          "absolute inset-0 opacity-20 data-grid transition-all duration-[2000ms] ease-in-out",
          stage === 0 ? "scale-[2] rotate-12 blur-md" : 
          stage === 1 ? "scale-[1.5] -rotate-6 blur-sm" : 
          "scale-100 rotate-0 blur-none"
        )} 
      />
      
      {/* Cinematic Lens Flare */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-primary/20 blur-[100px] animate-pulse" />
      </div>

      {/* Vertical Data Matrix Streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {streams.map((stream, i) => (
          <div 
            key={i} 
            className="data-stream" 
            style={{ 
              left: stream.left, 
              animationDelay: stream.delay,
              animationDuration: stream.duration,
              height: '150px'
            }} 
          />
        ))}
      </div>
      
      {/* Main Cinematic Container - Centered Alignment */}
      <div className={cn(
        "w-full max-w-7xl relative z-10 transition-all duration-1000 flex flex-col items-center",
        stage === 0 ? "scale-90 opacity-40 blur-sm" : 
        stage === 1 ? "scale-105 opacity-80" : 
        "scale-100 opacity-100"
      )}>
        
        {/* Reveal Title Section */}
        <div className="relative mb-16 group overflow-hidden perspective-1000 flex flex-col items-center w-full">
          <div className="flex items-center gap-3 mb-12 opacity-40">
            <div className="w-4 h-4 border border-primary animate-spin-slow" />
            <span className="text-primary text-[10px] font-black tracking-[1em] uppercase">NEURAL_INIT_V5.0</span>
          </div>

          <div className={cn(
            "relative transition-transform duration-1000",
            stage === 0 ? "translate-y-10" : "translate-y-0"
          )}>
            <div className="flex flex-col items-center text-center">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter leading-[0.85] relative uppercase">
                {/* Reveal Shutter Mask Animation - Centered Reveal */}
                <div className={cn(
                  "absolute -inset-8 bg-primary z-20 origin-center transition-transform duration-[1500ms] ease-in-out",
                  progress > 15 ? "scale-x-0" : "scale-x-100"
                )} />
                <span className="relative block text-white mb-2">
                  WELCOME TO
                </span>
                <span className="relative block text-primary glow-text mb-2">
                  ROHITH YP
                </span>
                <span className="relative block text-white/20">
                  PORTFOLIO
                </span>
                
                {/* Horizontal Scan Light Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full -translate-x-full animate-[sweep_3s_infinite_linear]" />
              </h1>
            </div>

            {/* Tactical Frame Brackets - Centered relative to title */}
            <div className="absolute -top-16 -left-16 w-32 h-32 border-t-2 border-l-2 border-primary/30 transition-all duration-700" style={{ transform: `scale(${1 + (progress/200)})` }} />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 border-b-2 border-r-2 border-secondary/30 transition-all duration-700" style={{ transform: `scale(${1 + (progress/200)})` }} />
          </div>
        </div>

        {/* Technical Data Bar & Progress - Centered */}
        <div className="space-y-10 max-w-4xl mx-auto w-full px-12">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary animate-pulse" />
              <span className="text-[11px] font-mono text-white/40 uppercase tracking-[0.5em]">{log}</span>
            </div>
            
            <div className="text-7xl md:text-8xl font-mono text-primary font-black tracking-tighter tabular-nums flex items-baseline">
              {progress}<span className="text-xs ml-3 opacity-50 tracking-normal font-light">LINK_SYNC</span>
            </div>
          </div>

          {/* Precision Hardware Progress Track */}
          <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_25px_rgba(130,26,252,1)] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
            {/* Dynamic Scanning Spark */}
            <div 
              className="absolute top-0 h-full w-64 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              style={{ left: `${progress - 30}%` }}
            />
          </div>
        </div>
      </div>

      {/* Cinematic HUD Overlays */}
      <div className="absolute top-10 left-10 text-[10px] font-mono text-white/10 space-y-2 hidden sm:block">
        <div className="flex items-center gap-2"><div className="w-1 h-1 bg-primary" /> COORDINATES: 12.9716° N, 77.5946° E</div>
        <div className="flex items-center gap-2"><div className="w-1 h-1 bg-white/10" /> NODE_STATUS: INITIALIZING_V5</div>
      </div>

      <div className="absolute bottom-10 left-10 text-[9px] font-mono text-white/10 space-y-1 hidden sm:block">
        <div>SYSTEM: NEURAL_ARCH_OS</div>
        <div>ENCRYPTION: AES_256_ACTIVE</div>
        <div>PROTOCOL: SYNC_V5</div>
      </div>

      <div className="absolute bottom-10 right-10 text-[10px] font-mono text-white/20 text-right space-y-2">
        <div className="flex items-center justify-end gap-3">
          <span className="opacity-30">CORE_TEMP:</span> 
          <span className="text-emerald-500 font-bold animate-pulse">32.4°C</span>
        </div>
        <div className="flex items-center justify-end gap-3 text-primary">
          <span className="opacity-30 text-white">AUTH_LEVEL:</span> 
          <span className="font-black tracking-widest">MASTER_NODE</span>
        </div>
        <div className="pt-2 border-t border-white/5 opacity-40 uppercase tracking-[0.2em] text-[8px]">
          SID: {sessionId || "SYNC_PENDING"}
        </div>
      </div>

      {/* Final Cinematic Scan Line */}
      <div className="scanning-line opacity-[0.08]" />
      
      <style jsx global>{`
        @keyframes sweep {
          0% { transform: translateX(-100%) skewX(-45deg); }
          100% { transform: translateX(200%) skewX(-45deg); }
        }
      `}</style>
    </div>
  );
}
