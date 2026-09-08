import { motion } from 'motion/react';
import { IceCream, Coffee, UtensilsCrossed } from 'lucide-react';

export default function Desserts() {
  const menuFresas = [
    { name: 'Tradicional', desc: 'Fresas frescas, crema de la casa, galleta y cobertura de arequipe.', price: '$21.000' },
    { name: 'Fresita Top', desc: 'Fresas frescas, crema de la casa y cobertura de arequipe. Escoge 1 topping.', price: '$24.000' },
    { name: 'Encanto de Durazno', desc: 'Durazno fresco, crema de la casa y galleta.', price: '$23.000' },
    { name: 'Mega Antojo', desc: 'Fresas, crema, galleta, brownie, Oreo, M&M, Gol, Snickers y barquillos.', price: '$35.000' },
    { name: 'Bowl de la Felicidad', desc: 'Fresas, crema y 1 salsa. Escoge un Topping.', price: '$26.000' },
    { name: 'Bowl del Delirio', desc: 'Waffle, arequipe, queso, crema de la casa, fresas y obleas.', price: '$30.000' },
  ];

  const menuChurros = [
    { name: '8 Churros Españoles', desc: 'Se puede escoger 1 salsa (Arequipe, Chocolate, Leche condensada)', price: '$15.000' },
    { name: '12 Churros Españoles', desc: 'Se puede escoger 1 salsa', price: '$25.000' },
    { name: '24 Churros Españoles', desc: 'Se puede escoger 1 salsa', price: '$35.000' },
    { name: '12 Mini Churros', desc: 'Se puede escoger 1 salsa', price: '$13.000' },
    { name: '24 Mini Churros', desc: 'Se puede escoger 1 salsa', price: '$26.000' },
  ];

  const menuJugos = [
    { name: 'Jugos Naturales', desc: 'Maracuyá, Lulo, Guanábana, Mora, Tomate de árbol, Níspero, Zapote, Mango, Fresa, Milo. En agua o leche.', price: '$9.000' }
  ];

  const menuDesayunos = [
    { name: 'Desayuno Tradicional', desc: 'Huevos al gusto, 2 ingredientes, y acompañante.', price: '$12.000' },
    { name: 'Desayuno Costeño', desc: 'Elige entre jamón y queso, tocineta y queso o tomate y cebolla.', price: '$14.000' },
    { name: 'Envuelto Árabe Falafel', desc: 'Falafel, lechuga, cebolla y salsa de la casa.', price: '$16.000' },
    { name: 'Sándwich 15 cm Mixto', desc: 'Incluye papas de paquete.', price: '$22.000' }
  ];

  return (
    <section id="desserts" className="py-24 bg-rose-50 text-slate-800 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] font-bold tracking-[0.2em] text-rose-500 uppercase mb-3"
          >
            Dulce Encanto
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-extrabold text-slate-900 mb-6"
          >
            Fresas, Postres y Más
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            Disfruta de nuestros deliciosos postres, desayunos y jugos naturales. Un toque dulce para hacer tu estadía inolvidable.
          </motion.p>
        </div>

        {/* Image Gallery Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <motion.img initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} src="/desserts/WhatsApp Image 2026-09-08 at 8.38.07 AM (1).jpeg" alt="Postre 1" className="rounded-3xl h-48 md:h-64 object-cover w-full shadow-lg" />
          <motion.img initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} src="/desserts/WhatsApp Image 2026-09-08 at 8.38.08 AM (1).jpeg" alt="Postre 2" className="rounded-3xl h-48 md:h-64 object-cover w-full shadow-lg" />
          <motion.img initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} src="/desserts/WhatsApp Image 2026-09-08 at 8.38.07 AM (3).jpeg" alt="Postre 3" className="rounded-3xl h-48 md:h-64 object-cover w-full shadow-lg" />
          <motion.img initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} src="/desserts/WhatsApp Image 2026-09-08 at 8.38.08 AM.jpeg" alt="Postre 4" className="rounded-3xl h-48 md:h-64 object-cover w-full shadow-lg" />
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Fresas */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-rose-100 rounded-2xl text-rose-500">
                <IceCream size={24} />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">Menú Fresas</h4>
            </div>
            <div className="space-y-6">
              {menuFresas.map((item, idx) => (
                <div key={idx} className="border-b border-rose-200/50 pb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <h5 className="font-bold text-lg text-slate-900">{item.name}</h5>
                    <span className="font-bold text-rose-500">{item.price}</span>
                  </div>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Churros & Jugos */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            
            {/* Churros */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-100 rounded-2xl text-amber-600">
                  <UtensilsCrossed size={24} />
                </div>
                <h4 className="text-2xl font-bold text-slate-800">Churros Españoles</h4>
              </div>
              <div className="space-y-6">
                {menuChurros.map((item, idx) => (
                  <div key={idx} className="border-b border-amber-200/50 pb-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <h5 className="font-bold text-lg text-slate-900">{item.name}</h5>
                      <span className="font-bold text-amber-600">{item.price}</span>
                    </div>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Desayunos & Jugos */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
                  <Coffee size={24} />
                </div>
                <h4 className="text-2xl font-bold text-slate-800">Desayunos & Jugos</h4>
              </div>
              <div className="space-y-6">
                {menuDesayunos.map((item, idx) => (
                  <div key={idx} className="border-b border-blue-200/50 pb-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <h5 className="font-bold text-lg text-slate-900">{item.name}</h5>
                      <span className="font-bold text-blue-600">{item.price}</span>
                    </div>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
                {menuJugos.map((item, idx) => (
                  <div key={idx} className="border-b border-blue-200/50 pb-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <h5 className="font-bold text-lg text-slate-900">{item.name}</h5>
                      <span className="font-bold text-blue-600">{item.price}</span>
                    </div>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
