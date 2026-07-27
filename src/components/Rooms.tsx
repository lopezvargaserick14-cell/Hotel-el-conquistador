import { Wifi, Tv, Refrigerator, Wind, Utensils, BedDouble, Trees, Wine, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const rooms = [
  {
    id: 1,
    name: 'Apartamento Caracoles 202',
    description: 'Amplio y cómodo, ideal para estancias largas. Cuenta con cocina equipada y nevera.',
    price: '$120.000 COP',
    pricingList: [
      { persons: 5, price: '$400.000 COP' },
      { persons: 4, price: '$320.000 COP' },
      { persons: 3, price: '$240.000 COP' },
      { persons: 2, price: '$160.000 COP' },
      { persons: 1, price: '$120.000 COP' },
    ],
    image: '/gallery/apartamento201/1.jpeg?v=15',
    gallery: [
      '/gallery/apartamento201/1.jpeg?v=15',
      '/gallery/apartamento201/2.jpeg?v=15',
      '/gallery/apartamento201/3.jpeg?v=15',
      '/gallery/apartamento201/4.jpeg?v=15',
      '/gallery/apartamento201/5.jpeg?v=15',
      '/gallery/apartamento201/6.jpeg?v=15'
    ],
    amenities: ['Cocina', 'Nevera', 'A/C', 'TV'],
  },
  {
    id: 2,
    name: 'Apartamento Cangrejo 201',
    description: 'Espacioso y cómodo, ideal para familias. Cuenta con espacios agradables para descansar.',
    price: '$120.000 COP',
    pricingList: [
      { persons: 4, price: '$320.000 COP' },
      { persons: 3, price: '$240.000 COP' },
      { persons: 2, price: '$160.000 COP' },
      { persons: 1, price: '$120.000 COP' },
    ],
    image: '/gallery/apartamento301/1.jpeg?v=15',
    gallery: [
      '/gallery/apartamento301/1.jpeg?v=15',
      '/gallery/apartamento301/2.jpeg?v=15',
      '/gallery/apartamento301/3.jpeg?v=15',
      '/gallery/apartamento301/4.jpeg?v=15'
    ],
    amenities: ['2 Camas Dobles', 'TV', 'A/C', 'Minibar'],
  },
  {
    id: 3,
    name: 'Habitación Acuario 203',
    description: 'Cómodo y acogedor, perfecto para parejas o grupos pequeños.',
    price: '$120.000 COP',
    pricingList: [
      { persons: 3, price: '$180.000 COP' },
      { persons: 2, price: '$120.000 COP' },
      { persons: 1, price: '$140.000 COP' },
    ],
    image: '/gallery/acuario203/1.jpeg?v=16',
    gallery: [
      '/gallery/acuario203/1.jpeg?v=16',
      '/gallery/acuario203/2.jpeg?v=15',
      '/gallery/acuario203/3.jpeg?v=15'
    ],
    amenities: ['1 Cama Doble', 'TV', 'A/C'],
  },
  {
    id: 4,
    name: 'Habitación Aquarium 204',
    description: 'Habitación ideal para parejas, con un ambiente cálido y relajante.',
    price: '$120.000 COP',
    pricingList: [
      { persons: 2, price: '$120.000 COP' },
      { persons: 1, price: '$120.000 COP' },
    ],
    image: '/gallery/aquarium204/1.jpeg?v=16',
    gallery: [
      '/gallery/aquarium204/1.jpeg?v=16',
      '/gallery/aquarium204/2.jpeg?v=15',
      '/gallery/aquarium204/3.jpeg?v=15'
    ],
    amenities: ['1 Cama Doble', 'TV', 'A/C'],
  }
];

const getIcon = (amenity: string) => {
  const iconProps = { className: "w-4 h-4 text-cyan-500" };
  if (amenity.includes('Cocina')) return <Utensils {...iconProps} />;
  if (amenity.includes('Nevera')) return <Refrigerator {...iconProps} />;
  if (amenity.includes('A/C')) return <Wind {...iconProps} />;
  if (amenity.includes('TV')) return <Tv {...iconProps} />;
  if (amenity.includes('Cama')) return <BedDouble {...iconProps} />;
  if (amenity.includes('Minibar')) return <Wine {...iconProps} />;
  if (amenity.includes('jardín')) return <Trees {...iconProps} />;
  return <Wifi {...iconProps} />;
};

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);

  const handleBookRoom = (roomName: string) => {
    const message = `¡Hola! Me gustaría confirmar disponibilidad para la ${roomName}.`;
    const whatsappUrl = `https://wa.me/573163893178?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="rooms" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[10px] font-bold tracking-widest text-cyan-300 uppercase mb-3">Alojamiento</h2>
          <h3 className="text-4xl font-sans font-extrabold text-white mb-4">Habitaciones & Suites</h3>
          <p className="text-white/80">
            Diseñadas para el confort y el descanso absoluto. Disfruta de la brisa caribeña
            y el sonido del mar desde la comodidad de tu habitación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-black/20 backdrop-blur-md border border-white/10 hover:bg-black/30 transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedRoom(room)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-slate-900">
                  {room.price} <span className="text-xs font-normal text-slate-500">/noche</span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-2xl font-sans font-bold text-white mb-2">{room.name}</h4>
                <p className="text-white/70 mb-6 text-sm">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6 mt-auto">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/80 font-medium">
                      {getIcon(amenity)}
                      {amenity}
                    </div>
                  ))}
                </div>

                <div 
                  className="w-full text-center bg-white/10 border border-white/20 text-white py-2.5 rounded-xl font-bold hover:bg-white/20 transition-colors"
                >
                  Ver Detalles y Fotos
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedRoom(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 my-8"
            >
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedRoom.name}</h3>
                    <p className="text-white/70">{selectedRoom.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{selectedRoom.price}</div>
                    <div className="text-sm text-white/50">por noche</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {selectedRoom.gallery.map((img, i) => (
                    <div key={i} className={`rounded-xl overflow-hidden ${i === 0 ? 'md:col-span-2 aspect-video' : 'aspect-[4/3]'}`}>
                      <img src={img} alt={`${selectedRoom.name} vista ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white/5 p-6 rounded-2xl border border-white/10 mb-8">
                  <div className="flex flex-wrap gap-4">
                    {selectedRoom.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-white/90 font-medium bg-white/10 px-3 py-1.5 rounded-full">
                        {getIcon(amenity)}
                        {amenity}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => handleBookRoom(selectedRoom.name)}
                    className="w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-indigo-500/40 transition-all shrink-0"
                  >
                    <span>Reservar por WhatsApp</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                {selectedRoom.pricingList && (
                  <div className="mb-8">
                    <h4 className="text-white font-bold mb-4">Tarifas por noche</h4>
                    <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                      <div className="grid grid-cols-2 bg-white/10 p-3 font-semibold text-white text-sm">
                        <div>Número de personas</div>
                        <div className="text-right">Precio (COP)</div>
                      </div>
                      {selectedRoom.pricingList.map((pricing, i) => (
                        <div key={i} className="grid grid-cols-2 p-3 border-t border-white/5 text-white/80 text-sm hover:bg-white/5 transition-colors">
                          <div>{pricing.persons} {pricing.persons === 1 ? 'persona' : 'personas'}</div>
                          <div className="text-right font-medium text-cyan-300">{pricing.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-white font-bold mb-4">Explorar otras opciones</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {rooms.filter(r => r.id !== selectedRoom.id).map(room => (
                      <div 
                        key={room.id}
                        onClick={() => setSelectedRoom(room)}
                        className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer group"
                      >
                        <img src={room.image} alt={room.name} className="w-16 h-16 rounded-lg object-cover" />
                        <div>
                          <div className="text-white font-bold group-hover:text-cyan-400 transition-colors">{room.name}</div>
                          <div className="text-white/60 text-sm">{room.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => setSelectedRoom(null)}
                    className="mt-6 w-full py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    Volver a todas las habitaciones
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
