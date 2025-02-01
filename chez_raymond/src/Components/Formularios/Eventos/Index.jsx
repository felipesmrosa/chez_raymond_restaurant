import { useState } from "react";

import evento1 from "@/assets/image/evento01.jpg"
import evento2 from "@/assets/image/evento02.jpg"
import evento3 from "@/assets/image/evento03.jpg"
import evento4 from "@/assets/image/evento04.jpg"

export function EventsForm() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [date, setDate] = useState("");
    const [eventType, setEventType] = useState("");

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const today = new Date().toISOString().split("T")[0];

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedDate = date ? formatDate(date) : "";
        const message = `Olá, gostaria de realizar um evento no dia ${formattedDate}, serão ${quantity} convidados. O evento será de ${eventType}.`;
        const whatsappNumber = "5547984054573";
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="formEventos-Galeria">
            <form className="form-container" onSubmit={handleSubmit}>
                <h2>REALIZE SEU EVENTO</h2>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome" required />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantidade de Pessoas:</label>
                    <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Digite a quantidade" required />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Data:</label>
                    <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} min={today} required />
                </div>
                <div className="form-group">
                    <label htmlFor="eventType">Tipo de Evento:</label>
                    <input type="text" id="eventType" value={eventType} onChange={(e) => setEventType(e.target.value)} placeholder="Ex: Casamento, Aniversário, etc." required />
                </div>
                <button type="submit" className="submit-btn">SOLICITAR ORÇAMENTO</button>
            </form>

            <div className="formEventos-Galeria__galeria">
                <div className="gallery">
                    {[evento1, evento2, evento3, evento4].map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Evento ${index + 1}`}
                            onClick={() => handleImageClick(image)}
                        />
                    ))}
                </div>
            </div>

            {/* 📌 Lightbox */}
            {selectedImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content">
                        <img src={selectedImage} alt="Evento" />
                    </div>
                </div>
            )}
        </div>
    );
}
