import { useTransform, useScroll, useMotionValueEvent } from 'framer-motion';
import {useState, useEffect} from 'react';

export function Navbar(){
  const {scrollY} = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest)=> {
    const shouldBeScrolled = latest > 50;

    if (shouldBeScrolled !== scrolled){
      setScrolled(shouldBeScrolled);
    }
  })
  return (
    <>
      <nav className={`UpperNavBar ${scrolled? 'scrolled' : ''}`} style = {{scrollY}}>
      <a href="Inicio">
        <img className="UpperBarLogo" alt="LookFusion" src="/img/LookFusionLogo.jpg" />
      </a>
      <ul className="NavBarButtons">
        <li><a className="NavBarReserva" href="Reservas">Reservar</a></li>
        <li><a href="Servicios">Precios</a></li>
        <li><a href="Equipo">Equipo</a></li>
        <li><a href="Locales">Locales</a></li>
        <li><a href="">Galería</a></li>
      </ul>
    </nav>
    </>
  )
}
/*
  useEffect(() => {
    console.log('EFECTO MONTADO');                      // 2
    const handleScroll = () => {
      console.log('scroll', window.scrollY);            // 3
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return(
          <nav className={`UpperNavBar ${scrolled ? 'scrolled' : ''}`}>
      <a href="Inicio">
        <img className="UpperBarLogo" alt="LookFusion" src="/img/LookFusionLogo.jpg" />
      </a>
      <ul className="NavBarButtons">
        <li><a>Reservas</a></li>
        <li><a href="Servicios">Precios</a></li>
        <li><a href="Reservas">Equipo</a></li>
        <li><a href="Locales">Locales</a></li>
        <li><a href="Reservas">Galería</a></li>
      </ul>
    </nav>
    );
    */

export default Navbar;
