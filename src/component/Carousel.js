

import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <img src={images[currentImageIndex]} alt="" />
      <div className="buttons">
        <button onClick={handlePrevClick}>Left</button>
        <button onClick={handleNextClick}>Right</button>
      </div>
    </div>
  );
};

export default Carousel;
