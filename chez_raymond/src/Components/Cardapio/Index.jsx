import menu from "@/menu.pdf"

export function Cardapio() {

    return (
        <section className="menu-section">
            <div className="container">
                <h1>Nosso Cardápio</h1>
                <p className="menu-subtitle">
                    Explore as delícias do nosso cardápio.
                    <br />
                    Com opções para todos os gostos, estamos prontos para surpreender você com sabores incríveis!
                </p>
                <a target="_blank" href={menu}>Cardápio Completo</a>
            </div>
        </section>
    );
}