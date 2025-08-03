import { motion } from "framer-motion";

export default function BirthdayMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 }}
      className="max-w-2xl mx-auto my-8 sm:my-12 p-6 sm:p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <motion.h3 
        className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        A Special Message for You ✨
      </motion.h3>
      <motion.p 
        className="text-gray-700 text-lg sm:text-xl leading-relaxed"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Shivangi, on your special day, may your heart be light, your smile be bright, and your joy be infinite! Here's to celebrating the amazing person you are and all the beautiful moments ahead. 
      </motion.p>
      <motion.div 
        className="mt-6 text-4xl sm:text-5xl flex justify-center space-x-4"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🎂✨�
      </motion.div>
    </motion.div>
  );
}