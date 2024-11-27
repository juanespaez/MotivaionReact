import '/src/components.css/Stats.css';
import React from "react";

const Stats = () => {
    return (
        <div className="stats-widget">
            <div className="stat">
                <h3>42</h3>
                <p>Projects Completed</p>
            </div>
            <div className="stat">
                <h3>120</h3>
                <p>Happy Clients</p>
            </div>
            <div className="stat">
                <h3>3</h3>
                <p>Years of Experience</p>
            </div>
            <a href="#stats" className="btn-primary">See More</a>
        </div>
    );
};

export default Stats;

