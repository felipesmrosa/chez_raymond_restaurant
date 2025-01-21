import logo from "@/assets/image/logo_branca.png";
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="social">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/chezraymondoficial/">
                        <FaInstagram />Instagram
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=5547984054573&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20o%20restaurante!&type=phone_number&app_absent=0">
                        <FaWhatsapp />WhatsApp
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/chezraymondoficial">
                        <FaFacebook />Facebook
                    </a>
                    <a href="mailto:contato@chezraymond.com" rel="noopener noreferrer">
                        <FaEnvelope />E-mail
                    </a>
                </div>

                <div className="location">
                    <iframe
                        title="location"
                        src="https://www.google.com/maps?q=R.+Floriano+Peixoto,+610+-+Cabeçudas,+Itajaí+-+SC,+88306-430&output=embed"
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                    <p>R. Floriano Peixoto, 610 - Cabeçudas, Itajaí - SC</p>
                </div>
            </div>
        </footer>
    );
}
