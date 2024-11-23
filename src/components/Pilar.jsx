import '/src/components.css/Pilar.css';
import React, { useState } from 'react';

const Pilar = () => {
    const words = ['Word1', 'Word2', 'Word3', 'Word4'];

    // State to track the hovered word
    const [hoveredWord, setHoveredWord] = useState(null);

    // Define images for each word
    const images = {
        Word1: 'https://via.placeholder.com/300/FF0000?text=Image1',
        Word2: 'https://via.placeholder.com/300/00FF00?text=Image2',
        Word3: 'https://via.placeholder.com/300/0000FF?text=Image3',
        Word4: 'https://via.placeholder.com/300/FFFF00?text=Image4',
    };

    return (
        <div className="pilar-container">
            <div className="pilar-text">
                <ul>
                    {words.map((word, index) => (
                        <li
                            key={index}
                            onMouseEnter={() => setHoveredWord(word)}
                            onMouseLeave={() => setHoveredWord(null)}
                        >
                            <a className="border-animation" href="#">
                                <span className="border-animation__inner">{word}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pilar-image">
                {/* Show the image corresponding to the hovered word */}
                <img
                    src={hoveredWord ? images[hoveredWord] : 'https://via.placeholder.com/300'}
                    alt={hoveredWord || 'Default Placeholder'}
                />
            </div>
        </div>
    );
};

export default Pilar;

