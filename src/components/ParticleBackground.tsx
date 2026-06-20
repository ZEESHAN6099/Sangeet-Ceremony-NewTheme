import React from 'react';

// MAX PERFORMANCE: Removed canvas particles entirely!
// Replaced with simple static gradient effect (zero CPU usage)
const ParticleBackground: React.FC = () => {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100]"
      style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(255, 140, 0, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 185, 15, 0.03) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 20, 147, 0.02) 0%, transparent 50%)',
      }}
    />
  );
};

export default ParticleBackground;
