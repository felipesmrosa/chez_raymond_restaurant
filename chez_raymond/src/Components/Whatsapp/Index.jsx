import { FaWhatsapp } from "react-icons/fa"; // Importando ícone do WhatsApp (precisa instalar react-icons)
import "./Whatsapp.css"; // Importando o CSS para animações e estilo

export function FloatingWhatsapp() {
    const whatsappNumber = "5547984054573"; // Substitua pelo seu número do WhatsApp
    const message = "Olá, gostaria de conhecer o restaurante!"; // Mensagem pré-definida

    return (
        <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} // Adiciona a mensagem ao link
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-floating"
        >
            <div className="whatsapp-background">
                <FaWhatsapp className="whatsapp-icon" />
            </div>
        </a>
    );
}
