import menu from "@/menu.pdf"

export function Cardapio() {

    return (
        <section className="cardapio">
            <div className="cardapio__container">
                <h1>conheça Nosso Cardápio</h1>

                <div className="cardapio__container__itens">
                    <div className="cardapio__container__itens__item">
                        <p>Cozinha internacional</p>
                    </div>
                    <div className="cardapio__container__itens__item">
                        <p>Ampla carta de vinhos</p>
                    </div>
                </div>
                <a className="cardapio__container--button" target="_blank" href={menu}>Cardápio Completo</a>
            </div>
        </section>
    );
}