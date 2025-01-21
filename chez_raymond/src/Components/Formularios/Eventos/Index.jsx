import { useState } from "react";

export function EventsForm() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [date, setDate] = useState("");
    const [eventType, setEventType] = useState("");

    // Obtém a data de hoje no formato YYYY-MM-DD para usar no atributo "min"
    const today = new Date().toISOString().split("T")[0];

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
        const message = `Olá, gostaria de realizar um evento no dia ${formattedDate}, serão ${quantity} convidados.
O evento será de ${eventType}.`;

        // Cria o link do WhatsApp com a mensagem
        const whatsappNumber = "5547984054573"; // Substitua pelo seu número do WhatsApp
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Abre o WhatsApp no navegador com a mensagem preenchida
        window.open(url, "_blank");
    };

    return (
        <div className="form-container">
            <h2>REALIZE SEU EVENTO</h2>
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
                        min={today} // Define a data mínima como hoje
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eventType">Tipo de Evento:</label>
                    <input
                        type="text"
                        id="eventType"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        placeholder="Ex: Casamento, Aniversário, etc."
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">SOLICITAR ORÇAMENTO</button>
            </form>
        </div>
    );
}
