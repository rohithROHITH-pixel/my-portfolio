"use client";

import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING_CORE");

  useEffect(() => {
    const statuses = [
      "LOADING_ASSETS",
      "MOUNTING_DOM",
      "SYNCING_NEURAL_NODES",
      "ESTABLISHING_LINK",
      "READY"
    ];

    let currentStatusIdx = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 500);
          return 100;
        }
        
        // Update status text occasionally
        if (prev % 25 === 0 && currentStatusIdx < statuses.length - 1) {
          currentStatusIdx++;
          setStatus(statuses[currentStatusIdx]);
        }
        
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020205] transition-opacity duration-700 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
      <div className="w-full max-w-sm px-6">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-primary text-[10px] font-bold tracking-[0.5em] mb-2 uppercase">System Boot</h2>
            <div className="text-white font-mono text-lg font-bold tracking-tighter">
              ROHITH_YP.sh <span className="animate-pulse">_</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-white/40 font-mono text-xs">{progress}%</span>
          </div>
        </div>

        {/* Loading Bar */}
        <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-primary transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
          <div 
            className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]"
            style={{ left: `${progress - 10}%` }}
          />
        </div>

        {/* Logs */}
        <div className="mt-8 space-y-1 font-mono text-[9px] text-white/20 uppercase tracking-widest">
          <p className="flex justify-between"><span>[OK]</span> <span>Memory_Mapped_Successfully</span></p>
          <p className="flex justify-between"><span>[OK]</span> <span>Neural_Engines_Warm</span></p>
          <p className="flex justify-between text-primary/60"><span>[RUN]</span> <span>{status}...</span></p>
        </div>
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5" 
           style={{ backgroundImage: 'linear-gradient(to right, #6d28d9 1px, transparent 1px), linear-gradient(to bottom, #6d28d9 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  );
}