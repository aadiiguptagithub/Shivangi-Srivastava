import { motion } from "framer-motion";

const elements = ["🎈", "🎁", "🎀", "🎊", "🎉", "🌸", "✨"];

export default function Balloons() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: Math.random() * 100 + 800,
            x: Math.random() * window.innerWidth,
            rotate: Math.random() * 360
          }}
          animate={{ 
            y: -100,
            x: Math.random() * 200 - 100,
            rotate: Math.random() * 360
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-3xl md:text-4xl"
          style={{ 
            left: `${Math.random() * 100}%`,
            opacity: 0.7
          }}
        >
          {el}
        </motion.div>
      ))}
    </div>
  );
}