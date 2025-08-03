import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

export default function ConfettiExplosion() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      numberOfPieces={200}
      recycle={false}
      colors={['#ff0099', '#00ffcc', '#ffcc00', '#cc00ff']}
    />
  );
}