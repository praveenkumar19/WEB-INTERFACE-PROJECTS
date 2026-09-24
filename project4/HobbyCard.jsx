import React from 'react';
import './HobbyCard.css';

function HobbyCard(props) {
    return (
        <div className="hobby-cardd">
            <div className="hobby-image-containerr">
                <img 
                    src={props.image} 
                    alt={props.hobbyName} 
                    className="hobby-imagee"
                />
            </div>
            <div className="hobby-contentt">
                <h3 className="hobby-namee">{props.hobbyName}</h3>
                <p className="hobby-descriptionn">{props.description}</p>
            </div>
        </div>
    );
}

export default HobbyCard