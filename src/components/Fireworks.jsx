import { motion } from "framer-motion";

const fireworks = ["✨", "🎆", "🎇", "💥", "🌟", "⭐"];

export default function Fireworks() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: window.innerHeight,
            x: Math.random() * window.innerWidth,
            scale: 0,
            opacity: 1
          }}
          animate={{ 
            y: Math.random() * window.innerHeight/2,
            scale: [0, 1.5, 0],
            opacity: [1, 0.5, 0]
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: i * 0.3
          }}
          className="absolute text-3xl md:text-5xl"
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
          {fireworks[Math.floor(Math.random() * fireworks.length)]}
        </motion.div>
      ))}
    </div>
  );
}