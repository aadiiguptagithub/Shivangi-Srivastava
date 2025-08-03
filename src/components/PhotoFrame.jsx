import { motion } from "framer-motion";

export default function PhotoFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto mt-8"
    >
      <motion.div 
        className="relative bg-white rounded-xl overflow-hidden shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img 
          src="/assets/2.png"
          alt="Special memory"
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="p-6 text-center bg-white/90 backdrop-blur-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
            A Special Memory
          </h3>
          <p className="text-gray-700 text-lg">
            Shivangi, you make every moment special! ✨
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}