import React from 'react';

// MAX PERFORMANCE: Removed canvas particles entirely!
// Replaced with simple static gradient effect (zero CPU usage)
const ParticleBackground: React.FC = () => {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[5]"
      style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(255, 105, 180, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.05) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255, 69, 0, 0.04) 0%, transparent 50%)',
      }}
    />
  );
};

export default ParticleBackground;
