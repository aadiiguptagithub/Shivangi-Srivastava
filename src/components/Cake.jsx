import { motion } from "framer-motion";

export default function Cake() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", damping: 10 }}
      className="relative flex justify-center items-center py-8"
    >
      <motion.div
        className="relative text-8xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        🎂
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-4xl flex space-x-2"
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
          >
            🕯️
          </motion.span>
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
          >
            🕯️
          </motion.span>
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
          >
            🕯️
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}