import logo from "@/assets/image/logo_branca.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "@/menu.pdf"

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const link = "https://api.whatsapp.com/send/?phone=5547984054573&text=Ol%C3%A1%21+Gostaria+de+fazer+uma+reserva+no+restaurante&type=phone_number&app_absent=0"

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <nav>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>

                <ul className={menuOpen ? "open" : ""}>
                    <li onClick={toggleMenu}><Link to="/">Início</Link></li>
                    <li onClick={toggleMenu}>
                        <a
                            href={menu} // Substitua pelo caminho do seu PDF
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cardápio
                        </a>
                    </li>
                    <li onClick={toggleMenu}><Link to="/eventos">EVENTOS</Link></li>
                    <li onClick={toggleMenu}>
                        <a
                            href={link} // Substitua pelo caminho do seu PDF
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            RESERVAS
                        </a>
                    </li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </nav>
        </header>
    );
}
