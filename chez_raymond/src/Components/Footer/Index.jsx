import logo from "@/assets/image/logo_branca.png";
import rosatech from "@/assets/image/rosatech.svg";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="social">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/chezraymondoficial/">
                        <FaInstagram />
                    </a>
                    <p>(47) 3348-7032 / (47) 3348-7015</p>
                    <p>R. Floriano Peixoto, 610 - Cabeçudas, Itajaí - SC</p>
                </div>

                <div className="location">
                    <iframe
                        title="location"
                        src="https://www.google.com/maps?q=R.+Floriano+Peixoto,+610+-+Cabeçudas,+Itajaí+-+SC,+88306-430&output=embed"
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </div>

            <div className="desenvolvidoPor">
                <span className="desenvolvidoPor__icon">
                    <img src={rosatech} alt="Logo RosaTech" />
                </span>
                <p>
                    Desenvolvido por:{" "}
                    <a target="_blank" rel="noopener noreferrer" href="https://rosa-tech.vercel.app/">
                        RosaTech
                    </a>
                </p>
            </div>

        </footer>
    );
}
