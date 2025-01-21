import { useNavigate } from "react-router-dom";

export function Hours() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/reservas");
    };

    return (
        <section className="hours">
            <h1>Horário de Funcionamento</h1>
            <h4>Segunda a Sábado</h4>
            <div className="hours__content">
                <div className="hours__item">
                    <h3>ALMOÇO</h3>
                    <p>Das 11h às 14h30</p>
                </div>
                <div className="hours__item">
                    <h3>JANTAR</h3>
                    <p>Das 19h às 23h30</p>
                </div>
            </div>
            <button onClick={handleClick} className="hours__button">FAZER UMA RESERVA</button>
        </section>
    );
}
