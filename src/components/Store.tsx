import { Coffee, Package, Phone, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Store() {
  const items = [
    {
      id: 1,
      title: 'Bebidas, Snacks & Recuerdos',
      description: 'Refresca tus días con bebidas heladas, deliciosos snacks y llévate hermosos souvenirs de San Andrés para recordar siempre tu visita.',
      image: '/store/store_1.jpeg?v=2',
      icon: <Coffee className="w-6 h-6 text-cyan-400" />,
      features: ['Bebidas frías', 'Snacks variados', 'Souvenirs típicos']
    },
    {
      id: 2,
      title: 'Productos de Primera Necesidad',
      description: 'Disponemos de artículos de aseo personal, papel higiénico y productos básicos indispensables para que no te falte nada durante tu estancia.',
      image: '/store/store_2.jpeg?v=2',
      icon: <Package className="w-6 h-6 text-cyan-400" />,
      features: ['Artículos de aseo', 'Papel higiénico', 'Cuidado personal']
    }
  ];

  return (
    <section id="store" className="py-24 bg-black/20 text-white relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 opacity-5" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[10px] font-bold tracking-widest text-cyan-300 uppercase mb-3">Comodidad y Servicios</h2>
          <h3 className="text-4xl font-sans font-extrabold text-white mb-4">Minimarket & Souvenirs</h3>
          <p className="text-white/80">
            Pensando en tu total comodidad, ofrecemos una selección de bebidas, recuerdos y productos de primera necesidad directamente en nuestras instalaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-black/30 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/10 p-3 rounded-2xl border border-white/10">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-sans font-bold text-white">{item.title}</h4>
                </div>
                
                <p className="text-white/70 mb-6 text-sm leading-relaxed">{item.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {item.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-cyan-300 font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-black/25 backdrop-blur-xl border border-white/10 p-8 rounded-3xl max-w-3xl mx-auto text-center"
        >
          <h4 className="text-xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
            <ShoppingCart className="w-6 h-6 text-cyan-400" />
            ¿Necesitas algo a la habitación?
          </h4>
          <p className="text-white/70 text-sm mb-6 max-w-xl mx-auto">
            Puedes solicitar tus bebidas, recuerdos o productos directamente por WhatsApp y te los llevaremos a tu apartamento para que sigas disfrutando sin interrupciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/573163893178" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-900 px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Solicitar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
