import menu from "@/menu.pdf"

export function Cardapio() {

    return (
        <section className="cardapio">
            <div className="cardapio__container">
                <h1>conheça Nosso Cardápio</h1>
                <h4 className="cardapio__container--subtitulo">
                    Sabor para todos gostos
                </h4>
                <a className="cardapio__container--button" target="_blank" href={menu}>Cardápio Completo</a>
            </div>
        </section>
    );
}