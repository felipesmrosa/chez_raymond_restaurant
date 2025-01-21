import logo from "@/assets/image/logo_branca.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "@/menu.pdf"

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <nav>
                <img src={logo} alt="Logo" />
                <ul className={menuOpen ? "open" : ""}>
                    <li onClick={toggleMenu}><Link to="/">Início</Link></li>
                    {/* Link para abrir o PDF em uma nova aba */}
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
                    <li onClick={toggleMenu}><Link to="/reservas">RESERVAS</Link></li>
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
