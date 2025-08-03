import { motion } from "framer-motion";
import { useState } from 'react';

const images = [
  { 
    id: 1, 
    src: "/assets/Shivangi_1.jpeg",
    alt: "Birthday celebration",
    caption: "Happy moments with friends"
  },
  { 
    id: 2, 
    src: "/assets/3.png", 
    alt: "Happy moment",
    caption: "Beautiful smile!"
  },
  { 
    id: 3, 
    src: "/assets/4.png", 
    alt: "Smiling face",
    caption: "Always shining bright"
  },
//    { 
//     id: 3, 
//     src: "/assets/5.png", 
//     alt: "Smiling face",
//     caption: "Always shining bright"
//   },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">Shivangi's Memories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {images.map((img) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img 
              src={img.src} 
              alt={img.alt}
              className="w-full h-64 object-cover transition-all duration-500 hover:scale-110"
              loading="lazy"
            />
            <div className="p-4">
              <p className="text-gray-600">{img.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img 
              src={selectedImage.src.replace('300', '800')} 
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
              <p className="text-center">{selectedImage.caption}</p>
            </div>
            <button 
              className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}