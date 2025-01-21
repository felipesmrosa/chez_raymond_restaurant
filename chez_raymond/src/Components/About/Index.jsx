import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


export function About() {
    const images = [
        "/foto1.jpg",
        "/foto2.jpg",
        "/foto3.jpg",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <section id="sobre" className="about">
            <div className="about__container">
                <div className="about__text">
                    <h1>Nossa História</h1>
                    <h4>Gastronomia com Tradição e Elegância</h4>
                    <br />
                    <p>
                        Após 20 anos no Grand Hotel Cad’oro, em São Paulo, Raimundo Pletz realizou seu sonho de trabalhar com gastronomia.
                        Em 1985, ele e sua esposa Vera fundaram o <strong>Chez Raymond</strong>, na Praia de Cabeçudas, Itajaí-SC.<br />
                        Focado na culinária francesa, o restaurante oferece carnes, massas e frutos do mar em um ambiente elegante e acolhedor,
                        instalado em uma charmosa casa de arquitetura austríaca.<br />
                        Hoje, os filhos Sabina, Fabio e Bruno mantêm viva a tradição de qualidade e atendimento da “Família Chez Raymond”.
                    </p>
                </div>
                <div className="carousel">
                    <button onClick={prevImage} className="arrow left"><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <img
                        src={images[currentIndex]}
                        alt={`Foto ${currentIndex + 1}`}
                        className="carousel-image"
                    />
                    <button onClick={nextImage} className="arrow right"><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
            </div>
        </section>
    );
}