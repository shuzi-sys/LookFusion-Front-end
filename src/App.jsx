import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Locales from './components/Locales';
import Equipo from './components/Equipo';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Equipo />
      <Locales />
    </>
  );
}

export default App;