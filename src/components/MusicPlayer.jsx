import { motion } from 'framer-motion';

export default function MusicPlayer({ audioRef, isPlaying }) {
  return (
    <div>
      <audio 
        ref={audioRef} 
        src="/assets/shivangi.mp3" 
        loop
      />
      {isPlaying && (
        <motion.div 
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="fixed top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-50 flex items-center space-x-2"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-xl"
          >
            🎵
          </motion.span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-medium">
            Playing Birthday Music
          </span>
        </motion.div>
      )}
    </div>
  );
}