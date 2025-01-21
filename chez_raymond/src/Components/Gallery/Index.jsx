import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export function Gallery () {
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
    <section className="gallery">
      <div className="carousel">
        <button onClick={prevImage} className="arrow left"><FontAwesomeIcon icon={faChevronLeft} /></button>
        <img
          src={images[currentIndex]}
          alt={`Foto ${currentIndex + 1}`}
          className="carousel-image"
        />
        <button onClick={nextImage} className="arrow right"><FontAwesomeIcon icon={faChevronRight} /></button>
      </div>
    </section>
  );
};