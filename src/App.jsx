import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Locales from './components/Locales';
import Equipo from './components/Equipo';
import Opiniones from './components/Opiniones';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Equipo />
      <Locales />
      <Opiniones />
      <Footer />
    </>
  );
}

export default App;