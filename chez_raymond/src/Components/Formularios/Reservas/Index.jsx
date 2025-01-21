import { useState } from "react";

export function ReservationForm() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [date, setDate] = useState("");

    // Função para formatar a data no formato DD/MM/YYYY
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Formata a data
        const formattedDate = date ? formatDate(date) : "";

        // Cria a mensagem personalizada
        const message = `Olá! Gostaria de fazer uma reserva no restaurante.\n\nNome: ${name}\nQuantidade de Pessoas: ${quantity}\nData: ${formattedDate}`;

        // Cria o link do WhatsApp com a mensagem
        const whatsappNumber = "5547984054573"; // Substitua pelo seu número do WhatsApp
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Abre o WhatsApp no navegador com a mensagem preenchida
        window.open(url, "_blank");
    };

    return (
        <div className="form-container">
            <h2>REALIZE SUA RESERVA</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite seu nome"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantidade de Pessoas:</label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="Digite a quantidade"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Data:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Reservar</button>
            </form>
        </div>
    );
}
