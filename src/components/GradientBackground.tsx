import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  className?: string;
}

export default function GradientBackground({ className = '' }: GradientBackgroundProps) {
  const colors = [
    '#1C1C1C', // carbon-black (predominante)
    '#2A2A2A', // gris muy oscuro
    '#3A3A3A', // gris oscuro
    '#4A4A4A', // gris medio-oscuro
    '#1C1C1C', // carbon-black (loop)
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-carbon-black"
        style={{
          background: `#1C1C1C`,
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 20% 50%, ${colors[0]} 0%, transparent 40%),
                       radial-gradient(circle at 80% 80%, ${colors[1]} 0%, transparent 45%),
                       radial-gradient(circle at 40% 20%, ${colors[2]} 0%, transparent 40%),
                       radial-gradient(circle at 60% 60%, ${colors[3]} 0%, transparent 45%)`,
        }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 50%, ${colors[0]} 0%, transparent 40%),
             radial-gradient(circle at 80% 80%, ${colors[1]} 0%, transparent 45%),
             radial-gradient(circle at 40% 20%, ${colors[2]} 0%, transparent 40%),
             radial-gradient(circle at 60% 60%, ${colors[3]} 0%, transparent 45%)`,
            `radial-gradient(circle at 80% 20%, ${colors[1]} 0%, transparent 45%),
             radial-gradient(circle at 20% 80%, ${colors[2]} 0%, transparent 40%),
             radial-gradient(circle at 60% 40%, ${colors[3]} 0%, transparent 45%),
             radial-gradient(circle at 40% 70%, ${colors[0]} 0%, transparent 40%)`,
            `radial-gradient(circle at 40% 80%, ${colors[2]} 0%, transparent 40%),
             radial-gradient(circle at 60% 20%, ${colors[3]} 0%, transparent 45%),
             radial-gradient(circle at 20% 40%, ${colors[0]} 0%, transparent 40%),
             radial-gradient(circle at 80% 60%, ${colors[1]} 0%, transparent 45%)`,
            `radial-gradient(circle at 20% 50%, ${colors[0]} 0%, transparent 40%),
             radial-gradient(circle at 80% 80%, ${colors[1]} 0%, transparent 45%),
             radial-gradient(circle at 40% 20%, ${colors[2]} 0%, transparent 40%),
             radial-gradient(circle at 60% 60%, ${colors[3]} 0%, transparent 45%)`,
          ],
        }}
        transition={{
          duration: 20,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl" />
    </div>
  );
}
