
import '/src/components.css/Stats.css';
import React from "react";

const statsData = [
    { value: 42, label: "Projects Completed" },
    { value: 120, label: "Happy Clients" },
    { value: 3, label: "Years of Experience" },
];

const Stats = () => {
    return (
        <div className="stats-widget">
            {statsData.map((stat, index) => (
                <div className="stat" key={index}>
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                </div>
            ))}
            <a href="#stats" className="btn-primary">See More</a>
        </div>
    );
};

export default Stats;

