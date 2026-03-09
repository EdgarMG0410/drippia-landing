import { motion } from 'framer-motion';

interface AuroraProps {
  colorStops: string[];
  amplitude?: number;
  blend?: number;
}

export default function Aurora({ colorStops, amplitude = 1, blend = 0.6 }: AuroraProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colorStops[0]}, ${colorStops[1]}, ${colorStops[2]})`,
          opacity: blend,
        }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 30%, ${colorStops[0]}, ${colorStops[1]}, ${colorStops[2]})`,
            `radial-gradient(circle at 80% 70%, ${colorStops[1]}, ${colorStops[2]}, ${colorStops[0]})`,
            `radial-gradient(circle at 40% 80%, ${colorStops[2]}, ${colorStops[0]}, ${colorStops[1]})`,
            `radial-gradient(circle at 70% 20%, ${colorStops[0]}, ${colorStops[2]}, ${colorStops[1]})`,
            `radial-gradient(circle at 20% 30%, ${colorStops[0]}, ${colorStops[1]}, ${colorStops[2]})`,
          ],
        }}
        transition={{
          duration: 15 * amplitude,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colorStops[1]}, ${colorStops[2]}, ${colorStops[0]})`,
          opacity: blend * 0.8,
        }}
        animate={{
          background: [
            `radial-gradient(circle at 60% 40%, ${colorStops[1]}, ${colorStops[2]}, ${colorStops[0]})`,
            `radial-gradient(circle at 30% 60%, ${colorStops[2]}, ${colorStops[0]}, ${colorStops[1]})`,
            `radial-gradient(circle at 70% 80%, ${colorStops[0]}, ${colorStops[1]}, ${colorStops[2]})`,
            `radial-gradient(circle at 40% 30%, ${colorStops[1]}, ${colorStops[0]}, ${colorStops[2]})`,
            `radial-gradient(circle at 60% 40%, ${colorStops[1]}, ${colorStops[2]}, ${colorStops[0]})`,
          ],
        }}
        transition={{
          duration: 12 * amplitude,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
