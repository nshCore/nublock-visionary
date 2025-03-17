
import React, { useEffect, useState, useRef } from 'react';

// Kernel messages for the boot animation
const KERNEL_MESSAGES = [
  "[ OK ] Reached target Paths.",
  "[ OK ] Reached target Basic System.",
  "Starting Nublock Tech System...",
  "Loading kernel modules...",
  "[ OK ] Mounted FUSE Control File System.",
  "[ OK ] Listening on Load/Save RF Kill Switch Status /dev/rfkill Watch.",
  "Starting Load/Save RF Kill Switch Status...",
  "Starting Apply Kernel Variables...",
  "[ OK ] Started Create Volatile Files and Directories.",
  "[ OK ] Started Load/Save RF Kill Switch Status.",
  "Starting Update UTMP about System Boot/Shutdown...",
  "[ OK ] Started Update UTMP about System Boot/Shutdown.",
  "[ OK ] Reached target System Initialization.",
  "[ OK ] Started Daily Cleanup of Temporary Directories.",
  "[ OK ] Listening on D-Bus System Message Bus Socket.",
  "[ OK ] Reached target Sockets.",
  "[ OK ] Reached target Basic System.",
  "Starting NublockTech Daemon...",
  "Starting Security Auditing Service...",
  "Starting System Logging Service...",
  "[ OK ] Started D-Bus System Message Bus.",
  "[ OK ] Started Security Auditing Service.",
  "[ OK ] Found device /dev/ttyS0.",
  "[ OK ] Started System Logging Service.",
  "[ OK ] Started NublockTech Daemon.",
  "Starting Create Volatile Files and Directories...",
  "[ OK ] Started Create Volatile Files and Directories.",
  "Starting Update UTMP about System Boot/Shutdown...",
  "[ OK ] Started Update UTMP about System Boot/Shutdown.",
  "[ OK ] Reached target System Initialization.",
  "[ OK ] Reached target Timers.",
  "[ OK ] Listening on D-Bus System Message Bus Socket.",
  "[ OK ] Reached target Sockets.",
  "[ OK ] Reached target Basic System.",
  "Starting Permit User Sessions...",
  "Starting Network Service...",
  "[ OK ] Started Permit User Sessions.",
  "[ OK ] Started Network Service.",
  "Starting Terminal Login Service...",
  "[ OK ] Started Terminal Login Service.",
  "Starting Machine Learning Engine...",
  "[ OK ] Started Machine Learning Engine.",
  "Starting Cloud Services Integration...",
  "[ OK ] Started Cloud Services Integration.",
  "Starting Web Server Configuration...",
  "[ OK ] Started Web Server Configuration.",
  "NUBLOCK TECH SYSTEM INITIALIZED",
  "BOOTING WEBSITE..."
];

const Terminal: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [bootComplete, setBootComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start with an empty terminal
    setVisibleLines([]);
    
    // Add kernel messages line by line
    let currentLineIndex = 0;
    
    const addLine = () => {
      if (currentLineIndex < KERNEL_MESSAGES.length) {
        setVisibleLines(prev => [...prev, KERNEL_MESSAGES[currentLineIndex]]);
        currentLineIndex++;
        
        // Scroll to bottom
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
        
        // Determine if we should continue adding lines
        if (currentLineIndex < KERNEL_MESSAGES.length) {
          // Random delay between 70ms and 180ms for a slightly slower typing effect
          const delay = Math.random() * 110 + 70;
          setTimeout(addLine, delay);
        } else {
          // Boot animation complete
          setTimeout(() => {
            setBootComplete(true);
            // Begin slide up animation after a longer delay after showing "BOOTING WEBSITE..."
            setTimeout(() => {
              setAnimate(true);
            }, 2500); // Increased from 1500ms to 2500ms for a longer pause
          }, 1000); // Increased from 500ms to 1000ms for a longer pause
        }
      }
    };
    
    // Start the animation after a short delay
    setTimeout(addLine, 1000);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-50 w-full h-screen bg-terminal-bg flex flex-col justify-start items-center overflow-hidden
                 ${animate ? 'animate-slide-up' : ''}`}
      style={{ 
        // Adding a custom animation with longer duration
        '--animation-duration': '1.5s', // Slowing down the animation
        animationDuration: 'var(--animation-duration)'
      } as React.CSSProperties}
    >
      <div 
        ref={terminalRef}
        className="w-full h-full max-w-4xl p-6 overflow-y-auto font-mono text-sm sm:text-base"
      >
        {visibleLines.map((line, index) => (
          <div key={index} className="py-0.5">
            <span 
              className={`inline-block ${
                line.includes("NUBLOCK TECH SYSTEM INITIALIZED") ? 
                'text-terminal-green font-bold text-xl' : 
                line.includes("BOOTING WEBSITE") ? 
                'text-terminal-green font-bold text-2xl' : 
                'text-terminal-green'
              }`}
            >
              {line}
            </span>
          </div>
        ))}
        {!bootComplete && (
          <div className="py-0.5">
            <span className="inline-block text-terminal-green animate-terminal-blink">_</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
