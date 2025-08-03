import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Balloons from './components/Balloons';
import Confetti from './components/Confetti';
import BirthdayMessage from './components/BirthdayMessage';
import Cake from './components/Cake';
import PhotoFrame from './components/PhotoFrame';
import MusicPlayer from './components/MusicPlayer';
import Fireworks from './components/Fireworks';

export default function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showSpecialPhoto, setShowSpecialPhoto] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const audioRef = useRef(null);

  const handleSurprise = () => {
    // Show modal first
    setShowModal(true);
    
    // Trigger all surprise elements
    setShowConfetti(true);
    setShowCake(true);
    setShowFireworks(true);
    setShowSpecialPhoto(true);
    
    // Play birthday music
    if (audioRef.current) {
      audioRef.current.play();
      setIsMusicPlaying(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowConfetti(false);
    setShowCake(false);
    setShowFireworks(false);
    setShowSpecialPhoto(false);
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsMusicPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 relative overflow-hidden">
      <MusicPlayer audioRef={audioRef} isPlaying={isMusicPlaying} />
      <Hero />
      <BirthdayMessage />
      <Gallery />
      
      {/* Fixed button at bottom for mobile */}
      <div className="fixed bottom-6 w-full px-4 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSurprise}
          className="w-full sm:w-auto mx-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg relative overflow-hidden flex items-center justify-center space-x-2"
        >
          <span className="relative z-10">Click for Surprise!</span>
          <span className="text-2xl relative z-10">🎉</span>
        </motion.button>
      </div>

      {/* Modal with animations and surprises */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto py-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="relative bg-gradient-to-b from-white to-pink-50 rounded-2xl p-6 m-4 max-w-lg w-full shadow-2xl"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCloseModal}
              className="absolute -top-3 -right-3 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-pink-50 transition-colors text-xl font-medium z-50"
            >
              ✕
            </motion.button>
            
            <div className="relative min-h-[70vh] overflow-hidden rounded-xl bg-white/80 p-4">
              <div className="absolute inset-0">
                {showFireworks && <Fireworks />}
                <Balloons />
                {showConfetti && <Confetti />}
              </div>
              
              <div className="relative z-10">
                {showCake && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Cake />
                  </motion.div>
                )}
                
                {showSpecialPhoto && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <PhotoFrame />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}