function Footer(){


    return(<>
    <section className="Footer">
        <img className="FooterLogo" alt="LookFusion" src="/img/LookFusionLogo.jpg" />
        <p className="FooterSlogan">El <span className="lava-red">fuego</span> no sigue la moda, <span className="vibrant-green">la quema</span>.
        </p>
        <p className="FooterRights">
            © {new Date().getFullYear()} LookFusion. Todos los derechos reservados. 
        </p>
        <p className="FooterDev">Powered by <span className="lava-red">Pragma Once</span></p>
    </section>
    </>)
}

export default Footer;