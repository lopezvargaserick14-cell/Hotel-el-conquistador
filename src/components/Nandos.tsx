import { Phone, Utensils, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Nandos() {
  const phoneNumber = '+573183288795';
  const displayPhone = '+57 318 328 8795';

  return (
    <section id="nandos" className="py-24 bg-black/40 text-white relative overflow-hidden border-t border-white/10">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 mt-8 lg:mt-0"
          >
            <img 
              src="/nandos/nandos_1.jpeg?v=1" 
              alt="Nando's Pizza Comida Gourmet 1" 
              className="rounded-3xl h-64 object-cover w-full shadow-2xl mt-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
            />
            <img 
              src="/nandos/nandos_2.jpeg?v=1" 
              alt="Nando's Pizza Comida Gourmet 2" 
              className="rounded-3xl h-64 object-cover w-full shadow-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
            />
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-bold tracking-widest text-cyan-300 uppercase mb-3">Aliados Gastronómicos</h2>
            <h3 className="text-4xl md:text-5xl font-sans font-extrabold text-white mb-6 leading-tight">
              Nando's Pizza <br/> Comida Gourmet & Domicilios
            </h3>
            <p className="text-white/80 text-lg mb-8">
              Disfruta de las mejores pizzas artesanales y platos gourmet directamente en la comodidad de tu apartamento. Con nuestro aliado <strong>Nando's Pizza</strong>, tienes un servicio exclusivo de domicilio rápido y delicioso sin salir del hotel.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-black/20 backdrop-blur-md p-3 rounded-2xl h-fit border border-white/10">
                  <Utensils className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Carta de Pizza Gourmet</h4>
                  <p className="text-white/60 text-sm">Ingredientes premium, masa artesanal y el sabor único que andas buscando para tus cenas en la isla.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-black/20 backdrop-blur-md p-3 rounded-2xl h-fit border border-white/10">
                  <Heart className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Directo a tu Apartamento</h4>
                  <p className="text-white/60 text-sm">Servicio preferencial para huéspedes del Apartamento Turístico El Conquistador.</p>
                </div>
              </div>
            </div>

            {/* CTA/Phone Section */}
            <div className="mt-10 bg-black/20 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                Haz tu pedido a domicilio aquí:
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/${phoneNumber.replace('+', '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 bg-white/10 hover:bg-white/20 transition-colors border border-white/10 rounded-2xl p-4 text-center block"
                >
                  <span className="block font-bold text-lg mb-1">{displayPhone}</span>
                  <span className="text-xs text-white/60 uppercase tracking-widest">WhatsApp / Pedidos</span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
