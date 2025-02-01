import logo from "@/assets/image/logo_branca.png"

import menu from "@/menu.pdf"

export function HeaderEventos() {
    return (
        <header class="headerEventos">
            <nav class="headerEventos__nav">  
                <a href="/">
                    <img src={logo} alt="" />
                </a>
                <ul class="headerEventos__nav__ul">
                    <li>
                        <a href="/" data-discover="true">Início</a>
                    </li>
                    <li>
                        <a href={menu} target="_blank" rel="noopener noreferrer">Cardápio</a>
                    </li>
                    <li>
                        <a href="/eventos" data-discover="true">EVENTOS</a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send/?phone=5547984054573&amp;text=Ol%C3%A1%21+Gostaria+de+fazer+uma+reserva+no+restaurante&amp;type=phone_number&amp;app_absent=0" target="_blank" rel="noopener noreferrer">RESERVAS</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}