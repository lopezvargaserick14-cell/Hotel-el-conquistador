import { useState, useEffect } from 'react';
import { Menu, X, Palmtree } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Reservas', href: '#booking' },
    { name: 'Habitaciones', href: '#rooms' },
    { name: 'Buceo & Actividades', href: '#activities' },
    { name: 'Galería', href: '#gallery' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/10 backdrop-blur-md border-b border-white/20 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
              <img 
                src="/logo.jpeg?v=15" 
                alt="Apartamento Turístico El Conquistador" 
                className="w-12 h-12 object-contain bg-white rounded-lg p-1" 
              />
            <div className="flex flex-col">
              <span className="font-sans text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
                Apartamento Turístico
              </span>
              <span className="font-sans text-base md:text-lg font-bold text-cyan-300 tracking-tight leading-tight">
                El Conquistador
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-white text-white/90"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              className="bg-white text-blue-900 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Reservar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 mt-4"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-white hover:bg-white/10 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
