import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

const photos = [
  { id: 17, url: '/general_gallery/gal_1.jpeg?v=15', title: 'Galería 1' },
  { id: 18, url: '/general_gallery/gal_2.jpeg?v=15', title: 'Galería 2' },
  { id: 19, url: '/general_gallery/gal_3.jpeg?v=15', title: 'Galería 3' },
  { id: 20, url: '/general_gallery/gal_4.jpeg?v=15', title: 'Galería 4' },
  { id: 21, url: '/general_gallery/gal_5.jpeg?v=15', title: 'Galería 5' },
  { id: 22, url: '/general_gallery/gal_6.jpeg?v=15', title: 'Galería 6' },
  { id: 23, url: '/general_gallery/gal_7.jpeg?v=15', title: 'Galería 7' },
  { id: 24, url: '/general_gallery/gal_8.jpeg?v=15', title: 'Galería 8' },
  { id: 25, url: '/general_gallery/gal_9.jpeg?v=15', title: 'Galería 9' },
  { id: 26, url: '/general_gallery/gal_10.jpeg?v=15', title: 'Galería 10' },
  { id: 27, url: '/general_gallery/gal_11.jpeg?v=15', title: 'Galería 11' },
  { id: 28, url: '/general_gallery/gal_12.jpeg?v=15', title: 'Galería 12' },
  { id: 29, url: '/general_gallery/gal_13.jpeg?v=15', title: 'Galería 13' },
  { id: 30, url: '/general_gallery/gal_14.jpeg?v=15', title: 'Galería 14' },
  { id: 31, url: '/general_gallery/gal_15.jpeg?v=15', title: 'Galería 15' },
  { id: 32, url: '/general_gallery/gal_16.jpeg?v=15', title: 'Galería 16' },
  { id: 33, url: '/general_gallery/gal_17.jpeg?v=15', title: 'Galería 17' },
  { id: 34, url: '/general_gallery/gal_18.jpeg?v=15', title: 'Galería 18' },
  { id: 35, url: '/general_gallery/gal_19.jpeg?v=15', title: 'Galería 19' },
  { id: 36, url: '/general_gallery/gal_20.jpeg?v=15', title: 'Galería 20' },
  { id: 37, url: '/general_gallery/gal_21.jpeg?v=15', title: 'Galería 21' },
  { id: 38, url: '/general_gallery/gal_22.jpeg?v=15', title: 'Galería 22' },
  { id: 39, url: '/general_gallery/gal_23.jpeg?v=15', title: 'Galería 23' },
  { id: 40, url: '/general_gallery/gal_24.jpeg?v=15', title: 'Galería 24' },
  { id: 41, url: '/general_gallery/gal_25.jpeg?v=15', title: 'Galería 25' },
  { id: 42, url: '/general_gallery/gal_26.jpeg?v=15', title: 'Galería 26' },
  { id: 43, url: '/general_gallery/gal_27.jpeg?v=15', title: 'Galería 27' },
  { id: 44, url: '/general_gallery/gal_28.jpeg?v=15', title: 'Galería 28' },
  { id: 45, url: '/general_gallery/gal_29.jpeg?v=15', title: 'Galería 29' },
  { id: 46, url: '/general_gallery/gal_30.jpeg?v=15', title: 'Galería 30' },
  { id: 47, url: '/general_gallery/gal_31.jpeg?v=15', title: 'Galería 31' },
  { id: 48, url: '/general_gallery/gal_32.jpeg?v=15', title: 'Galería 32' },
  { id: 49, url: '/general_gallery/gal_33.jpeg?v=15', title: 'Galería 33' },
  { id: 50, url: '/general_gallery/gal_34.jpeg?v=15', title: 'Galería 34' },
  { id: 51, url: '/general_gallery/gal_35.jpeg?v=15', title: 'Galería 35' },
  { id: 52, url: '/general_gallery/gal_36.jpeg?v=15', title: 'Galería 36' }
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[10px] font-bold tracking-widest text-cyan-300 uppercase mb-3">Galería</h2>
          <h3 className="text-4xl font-sans font-extrabold text-white mb-4">Conoce Nuestro Paraíso</h3>
          <p className="text-white/80">Un vistazo a las instalaciones, el entorno y las experiencias que te esperan en San Andrés.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.4 }}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group bg-white/10 border border-white/20"
              onClick={() => setSelectedImg(photo.url)}
            >
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-cyan-400 transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg}
              alt="Vista ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
