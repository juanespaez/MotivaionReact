import '/src/components.css/Recomendations.css';
import React, { useState, useEffect } from 'react';

const Recomendations = () => {
    const images = [
        'https://via.placeholder.com/600x300/FF5733?text=Image+1',
        'https://via.placeholder.com/600x300/33FF57?text=Image+2',
        'https://via.placeholder.com/600x300/3357FF?text=Image+3',
        'https://via.placeholder.com/600x300/FFFF33?text=Image+4',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically switch images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]);

    // Handler for selecting an image manually
    const handleSelect = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="fullscreen-container">
            <div className="recomendations-container">
                <section className="recomendation">
                    {/* Image Display */}
                    <img
                        src={images[currentIndex]}
                        alt={`Recomendation ${currentIndex + 1}`}
                        className="recomendation-image"
                    />

                    {/* Navigation Dots */}
                    <div className="navigation-dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => handleSelect(index)}
                            ></span>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Recomendations;
