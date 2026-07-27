import React, { useState } from 'react';
import { CalendarDays, Users, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Booking() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    room: 'standard'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate booking process by redirecting to WhatsApp
    const message = `¡Hola! Me gustaría confirmar una reserva con los siguientes datos:
- Entrada: ${formData.checkIn}
- Salida: ${formData.checkOut}
- Huéspedes: ${formData.guests}
- Habitación: ${formData.room === 'suite' ? 'Suite Confort' : formData.room === 'family' ? 'Familiar' : 'Estándar Tropical'}`;
    
    const whatsappUrl = `https://wa.me/573163893178?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-2xl rounded-[40px] shadow-2xl p-8 md:p-10"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-800 mb-2">Tu Reserva</h2>
            <p className="text-gray-500">Reserva directamente con nosotros al mejor precio.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
            <div className="lg:col-span-1">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1 mb-2">Check-in</label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="date" 
                  required
                  value={formData.checkIn}
                  onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-2xl text-gray-700 font-semibold focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="lg:col-span-1">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1 mb-2">Check-out</label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="date" 
                  required
                  value={formData.checkOut}
                  onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-2xl text-gray-700 font-semibold focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="lg:col-span-1">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1 mb-2">Huéspedes</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select 
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-2xl text-gray-700 font-semibold focus:ring-2 focus:ring-cyan-500 outline-none transition-all appearance-none"
                >
                  <option value="1">1 Persona</option>
                  <option value="2">2 Personas</option>
                  <option value="3">3 Personas</option>
                  <option value="4">4 Personas</option>
                  <option value="5+">5+ Personas</option>
                </select>
              </div>
            </div>

            <div className="lg:col-span-1">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1 mb-2">Habitación</label>
              <select 
                value={formData.room}
                onChange={(e) => setFormData({...formData, room: e.target.value})}
                className="w-full px-4 py-3 bg-gray-100 rounded-2xl text-gray-700 font-semibold focus:ring-2 focus:ring-cyan-500 outline-none transition-all appearance-none"
              >
                <option value="standard">Estándar Tropical</option>
                <option value="suite">Suite Confort</option>
                <option value="family">Familiar</option>
              </select>
            </div>

            <div className="lg:col-span-1">
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-3xl font-black shadow-lg hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2"
              >
                <span>CONFIRMAR RESERVA</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
