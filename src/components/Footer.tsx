export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 text-white/80 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-sans font-extrabold text-white mb-4">Apartamento Turístico El Conquistador</h3>
            <p className="mb-4 max-w-sm">
              Descubre la magia del Mar de los Siete Colores en San Andrés. 
              Tu destino perfecto para descansar y explorar el mundo submarino.
            </p>
            <p className="mb-6 max-w-sm text-sm text-white/70">
              Estamos ubicados cerca del Aeropuerto Gustavo Rojas Pinilla, aproximadamente a 15 minutos caminando o 5 minutos en taxi.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>Cra. 12 #16-2, Br. Natania</li>
              <li>San Andrés y Providencia</li>
              <li>info@hotelelconquistador.com</li>
              <li>+57 316 389 3178 / +57 608 501 0164</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Inicio</a></li>
              <li><a href="#rooms" className="hover:text-cyan-400 transition-colors">Habitaciones</a></li>
              <li><a href="#activities" className="hover:text-cyan-400 transition-colors">Buceo & Tours</a></li>
              <li><a href="#gallery" className="hover:text-cyan-400 transition-colors">Galería</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Apartamento Turístico El Conquistador San Andrés. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
