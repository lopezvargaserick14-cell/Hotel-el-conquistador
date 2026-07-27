import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/573163893178?text=Hola,%20quisiera%20más%20información%20sobre%20el%20hotel%20y%20actividades."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
    >
      <MessageCircle className="w-7 h-7" />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-medium px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¡Chatea con nosotros!
      </span>
    </motion.a>
  );
}
