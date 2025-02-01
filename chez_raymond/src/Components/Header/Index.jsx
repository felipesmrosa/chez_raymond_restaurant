import logo from "@/assets/image/logo_branca.png";
import { Link } from "react-router-dom";
import menu from "@/menu.pdf"

export function Header() {

    const link = "https://api.whatsapp.com/send/?phone=5547984054573&text=Ol%C3%A1%21+Gostaria+de+fazer+uma+reserva+no+restaurante&type=phone_number&app_absent=0"

    return (
        <div className="header">
            <div className="header__image">
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li>
                        <a
                            href={menu} // Substitua pelo caminho do seu PDF
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cardápio
                        </a>
                    </li>
                    <li><Link to="/eventos">EVENTOS</Link></li>
                    <li>
                        <a
                            href={link} // Substitua pelo caminho do seu PDF
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            RESERVAS
                        </a>
                    </li>
                </ul>
                <span>
                    <img src={logo} alt="" />
                    <p>Desde 1985</p>
                </span>
            </div>
        </div >
    );
}
