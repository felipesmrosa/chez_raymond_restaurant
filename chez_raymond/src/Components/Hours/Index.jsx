export function Hours() {

    const link = "https://api.whatsapp.com/send/?phone=5547984054573&text=Ol%C3%A1%21+Gostaria+de+fazer+uma+reserva+no+restaurante&type=phone_number&app_absent=0"

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
            <a href={link} className="hours__button" target="_blank">
                FAZER UMA RESERVA
            </a>
        </section>
    );
}
