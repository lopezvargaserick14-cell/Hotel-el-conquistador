import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Booking from './components/Booking';
import Rooms from './components/Rooms';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-800 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Booking />
        <Activities />
        <Gallery />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
