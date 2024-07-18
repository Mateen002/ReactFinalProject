import React, { useState } from 'react';
import '../src/index.css';

const images = [
    '../sunglasses/img1.png',
    '../sunglasses/img1.png',
    '../sunglasses/img1.png',
    '../sunglasses/img1.png',
    '../sunglasses/img1.png',
    '../sunglasses/img1.png'
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
        <h1 className='new-arr'>NEW ARRIVALS</h1>
        <div className="carousel">
            
            <button id="btn"className="prev" onClick={prevSlide}>&#10094;</button>
            <div className="carousel-images" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img src={image} alt={`Slide ${index}`} key={index} />
                ))}
            </div>
            <button id="btn" className="next" onClick={nextSlide}>&#10095;</button>
        </div>
        </>
    );
};

export default Carousel;
