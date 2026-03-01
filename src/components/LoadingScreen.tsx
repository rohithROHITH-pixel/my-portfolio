"use client";

import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState("");
  const [sessionId, setSessionId] = useState("INIT_PENDING");

  useEffect(() => {
    // Prevent hydration error by generating random string only on client
    setSessionId(Math.random().toString(16).substring(2, 10).toUpperCase());
    
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
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800);
          }, 800);
          return 100;
        }

        if (prev % 20 === 0) {
          setLog(logs[logIdx]);
          logIdx = Math.min(logIdx + 1, logs.length - 1);
        }

        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden px-6">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 opacity-20 data-grid scale-150 animate-pulse" />
      
      {/* Falling Data Streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className="data-stream" 
            style={{ 
              left: `${i * 7}%`, 
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              height: '150px'
            }} 
          />
        ))}
      </div>
      
      <div className="w-full max-w-3xl relative z-10">
        {/* The Revealing Card Section */}
        <div className="relative mb-12 group overflow-hidden">
          {/* Top Decorative Line */}
          <div className="flex items-center gap-3 mb-6 opacity-40">
            <div className="w-4 h-4 border border-primary animate-spin-slow" />
            <span className="text-primary text-[10px] font-black tracking-[0.8em] uppercase">NEURAL_INIT_v4.0</span>
          </div>

          {/* Name Reveal with Mask */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-baseline gap-4">
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-headline font-black text-white tracking-tighter leading-none relative">
                {/* Reveal Shutter Animation */}
                <div className="absolute inset-0 bg-primary z-20 animate-[reveal-shutter_1.5s_ease-in-out_forwards]" />
                ROHITH <span className="text-primary/60">YP</span>
              </h1>
            </div>

            {/* Tactical Brackets Framing the Reveal */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary/30" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-secondary/30" />
          </div>
        </div>

        {/* Technical Data Bar */}
        <div className="space-y-6">
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-secondary animate-pulse" />
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em]">{log}</span>
              </div>
            </div>
            <div className="text-4xl font-mono text-primary font-black tracking-tighter tabular-nums">
              {progress}<span className="text-xs ml-1 opacity-50">%</span>
            </div>
          </div>

          {/* Precision Progress Track */}
          <div className="h-[1px] w-full bg-white/5 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_20px_rgba(130,26,252,1)] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
            {/* Scanning Spark */}
            <div 
              className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{ left: `${progress - 10}%` }}
            />
          </div>
        </div>
      </div>

      {/* Persistent System Metadata Overlay */}
      <div className="absolute bottom-10 left-10 text-[9px] font-mono text-white/10 space-y-1 hidden sm:block">
        <p>LOCATION: BANGALORE_IN</p>
        <p>PROTOCOL: HTTPS_SECURE</p>
        <p>NODE_ARCH: AIML_V4</p>
      </div>

      <div className="absolute bottom-10 right-10 text-[9px] font-mono text-white/20 text-right space-y-1">
        <div className="flex items-center justify-end gap-2">
          CORE_TEMP: <span className="text-emerald-500 font-bold">OPTIMAL</span>
        </div>
        <div className="flex items-center justify-end gap-2 text-primary">
          AUTH: <span className="font-bold">ADMIN_MASTER</span>
        </div>
        <p className="opacity-40 uppercase">SID: {sessionId}</p>
      </div>

      {/* Decorative Hud Lines */}
      <div className="scanning-line opacity-[0.05]" />
      
      <style jsx global>{`
        @keyframes reveal-shutter {
          0% { transform: scaleX(1); transform-origin: left; }
          100% { transform: scaleX(0); transform-origin: left; }
        }
      `}</style>
    </div>
  );
}
