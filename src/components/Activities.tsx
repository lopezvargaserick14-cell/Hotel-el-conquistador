import { Anchor, Compass, Fish, Palmtree, Phone, Waves, Sun, Map } from 'lucide-react';
import { motion } from 'motion/react';

export default function Activities() {
  return (
    <>
      <section id="activities" className="py-24 bg-transparent text-white relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[10px] font-bold tracking-widest text-cyan-300 uppercase mb-3">Aventuras</h2>
              <h3 className="text-4xl md:text-5xl font-sans font-extrabold text-white mb-6 leading-tight">
                Sumérgete en la magia <br/> de San Andrés
              </h3>
              <p className="text-white/80 text-lg mb-8">
                San Andrés alberga la tercera barrera coralina más grande del mundo. 
                Nuestro centro de buceo asociado te llevará a explorar un ecosistema vibrante, 
                lleno de vida marina, barcos hundidos y aguas cristalinas.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-black/20 backdrop-blur-md p-3 rounded-2xl h-fit border border-white/10">
                    <Anchor className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Cursos PADI & Certificaciones</h4>
                    <p className="text-white/60 text-sm">Desde Open Water hasta Divemaster. Instructores bilingües y equipo de última generación.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-black/20 backdrop-blur-md p-3 rounded-2xl h-fit border border-white/10">
                    <Fish className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Inmersiones y Snorkel</h4>
                    <p className="text-white/60 text-sm">Visita "La Piscinita", "West View" y majestuosos arrecifes. Experiencias nocturnas disponibles.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-black/20 backdrop-blur-md p-3 rounded-2xl h-fit border border-white/10">
                    <Palmtree className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Toures VIP</h4>
                    <p className="text-white/60 text-sm">Disfruta de nuestros tours exclusivos: Jhonny Cay, Hans Cay - Acuario y Manglares - Palito.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-black/20 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  Mayor información contáctanos:
                </h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/573184410466" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white/10 hover:bg-white/20 transition-colors border border-white/10 rounded-2xl p-4 text-center">
                    <span className="block font-bold text-lg mb-1">318 441 0466</span>
                    <span className="text-xs text-white/60 uppercase tracking-widest">WhatsApp / Celular</span>
                  </a>
                  <a href="https://wa.me/573163893178" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white/10 hover:bg-white/20 transition-colors border border-white/10 rounded-2xl p-4 text-center">
                    <span className="block font-bold text-lg mb-1">316 389 3178</span>
                    <span className="text-xs text-white/60 uppercase tracking-widest">WhatsApp / Celular</span>
                  </a>
                </div>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mt-8 lg:mt-0"
            >
              <img 
                src="/diving/diving_1.jpeg?v=15" 
                alt="Buceo en San Andrés" 
                className="rounded-3xl h-64 object-cover w-full shadow-2xl mt-8"
              />
              <img 
                src="/diving/diving_2.jpeg?v=15" 
                alt="Arrecifes de Coral" 
                className="rounded-3xl h-64 object-cover w-full shadow-2xl"
              />
              <img 
                src="/diving/diving_3.jpeg?v=15" 
                alt="Mar de San Andrés" 
                className="rounded-3xl h-48 object-cover w-full shadow-2xl col-span-2 mt-4"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Tour de Padel Section */}
      <section className="py-24 bg-black/40 text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 opacity-5" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
             
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 grid grid-cols-2 gap-4 mt-8 lg:mt-0"
            >
              <img 
                src="/padel/padel_1.jpeg?v=15" 
                alt="Tour de Padel" 
                className="rounded-3xl h-48 md:h-64 object-cover w-full shadow-2xl mt-8"
              />
              <img 
                src="/padel/padel_2.jpeg?v=15" 
                alt="Tour de Padel San Andrés" 
                className="rounded-3xl h-48 md:h-64 object-cover w-full shadow-2xl"
              />
              <img 
                src="/padel/padel_3.jpeg?v=15" 
                alt="Tour de Padel San Andrés" 
                className="rounded-3xl h-48 md:h-64 object-cover w-full shadow-2xl mt-4"
              />
              <img 
                src="/padel/padel_4.jpeg?v=15" 
                alt="Tour de Padel San Andrés" 
                className="rounded-3xl h-48 md:h-64 object-cover w-full shadow-2xl -mt-4"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-[10px] font-bold tracking-widest text-cyan-300 uppercase mb-3">Deporte y Naturaleza</h2>
              <h3 className="text-4xl md:text-5xl font-sans font-extrabold text-white mb-6 leading-tight">
                Tour de Padel <br/> Exclusivo
              </h3>
              <p className="text-white/80 text-lg mb-8">
                Disfruta de una experiencia única remando por las aguas cristalinas de San Andrés. 
                El Tour de Padel te permite conectar con la naturaleza mientras haces ejercicio y 
                disfrutas de los paisajes más impresionantes de la isla.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-black/20 backdrop-blur-md p-3 rounded-2xl h-fit border border-white/10">
                    <Waves className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Paseos Guiados</h4>
                    <p className="text-white/60 text-sm">Navega por rutas seguras y descubre rincones ocultos de la costa con nuestros guías expertos.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-black/20 backdrop-blur-md p-3 rounded-2xl h-fit border border-white/10">
                    <Sun className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Amanecer o Atardecer</h4>
                    <p className="text-white/60 text-sm">Vive la magia del sol sobre el mar en los horarios más especiales del día.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-black/20 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  Reserva tu tour de padel:
                </h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/573184410466" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white/10 hover:bg-white/20 transition-colors border border-white/10 rounded-2xl p-4 text-center">
                    <span className="block font-bold text-lg mb-1">318 441 0466</span>
                    <span className="text-xs text-white/60 uppercase tracking-widest">WhatsApp</span>
                  </a>
                  <a href="https://wa.me/573163893178" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white/10 hover:bg-white/20 transition-colors border border-white/10 rounded-2xl p-4 text-center">
                    <span className="block font-bold text-lg mb-1">316 389 3178</span>
                    <span className="text-xs text-white/60 uppercase tracking-widest">WhatsApp</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
