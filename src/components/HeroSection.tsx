
import React, { useEffect, useState } from 'react';
import { Code, Terminal, Braces } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [text, setText] = useState('');
  const [codeIndex, setCodeIndex] = useState(0);
  
  const codeSnippets = [
    'function deployApp() {',
    '  const app = initializeApp();',
    '  const config = loadConfig();',
    '  return app.deploy(config);',
    '}',
    '',
    'class SystemArchitecture {',
    '  constructor(modules) {',
    '    this.modules = modules;',
    '  }',
    '  optimize() {',
    '    return this.modules.map(m => m.enhance());',
    '  }',
    '}',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (codeIndex < codeSnippets.length) {
        setText(prev => prev + codeSnippets[codeIndex] + '\n');
        setCodeIndex(codeIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [codeIndex]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-background opacity-90 z-0">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <pre className="font-mono text-lg md:text-xl text-primary whitespace-pre overflow-hidden">
            {text}
          </pre>
        </div>
        
        {/* Animated icons */}
        <div className="absolute top-1/4 left-1/4 animate-pulse">
          <Code size={48} className="text-primary/30" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}>
          <Terminal size={48} className="text-primary/30" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <Braces size={48} className="text-primary/30" />
        </div>
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          INNOVATIVE <span className="text-primary">TECHNICAL</span> SOLUTIONS
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          We build robust, scalable applications with cutting-edge technology 
          and industry best practices.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
