import { motion } from 'motion/react';
import { MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/demo/video/upload/v1689255734/sea_turtle.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-4 md:p-12"
        >
          <div className="flex items-center justify-center gap-2 text-white/90 mb-6">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <span className="tracking-widest uppercase text-[10px] font-bold">San Andrés Islas, Colombia</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-sans font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
            Descubre el Mar de los <br/> <span className="text-cyan-300">Siete Colores</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-2xl mx-auto font-light drop-shadow">
            Tu refugio tropical en el Caribe. Relájate en nuestras suites de lujo, 
            explora vibrantes arrecifes de coral y vive la magia de San Andrés.
          </p>
          <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto font-medium drop-shadow bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/10">
            Estamos ubicados cerca del Aeropuerto Gustavo Rojas Pinilla, aproximadamente a 15 minutos caminando o 5 minutos en taxi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#booking"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl text-base font-bold transition-all shadow-xl hover:scale-105"
          >
            Reserva tu estadía
          </a>
          <a 
            href="#activities"
            className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-8 py-4 rounded-2xl text-base font-bold hover:bg-white/30 transition-all hover:scale-105"
            >
              Explorar Buceo
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs tracking-widest uppercase opacity-70">Deslizar</span>
        <ChevronDown className="w-5 h-5 opacity-70" />
      </motion.div>
    </section>
  );
}
