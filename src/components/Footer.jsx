function Footer(){


    return(<>
    <section className="Footer">
        <img className="FooterLogo" alt="LookFusion" src="/img/LookFusionLogo.jpg" />
        <p className="FooterSlogan">El <span className="lava-red">fuego</span> no sigue la moda, <span className="vibrant-green">la quema</span>.
        </p>
    <a
      className="FooterSocials"
      href="https://www.instagram.com/lookfusion.arg/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Seguinos en Instagram: @lookfusion.arg"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
           strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
      <span>@lookfusion.arg</span>
    </a>

    <a
      className="FooterSocials"
      href="https://www.facebook.com/LookFusion/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visitá nuestra página de Facebook: LookFusion"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
           strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 9h2V6h-2c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9.5c0-.28.22-.5.5-.5z" />
      </svg>
      <span>LookFusion.arg</span>
    </a>
        <p className="FooterRights">
            © {new Date().getFullYear()} LookFusion. Todos los derechos reservados. 
        </p>
        <p className="FooterDev">Powered by <span className="lava-red">Pragma Once</span></p>
    </section>
    </>)
}

export default Footer;