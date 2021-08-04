import React from 'react';
import './IdolCard.css';

function IdolCard(props) {
    const { idol } = props;
    return (
        <div className="idol-card-warpper">
            <div className="idol-card-profile">
                <h1>{ idol.id }</h1>
                <h2>{ idol.name }</h2>
                <h3>{ idol.age }</h3>
            </div>
            <div className="idol-card-photo">
                <img src={ window.URL.createObjectURL(idol.pic) } alt="idol" />
            </div>
        </div>
    );
}



export default IdolCard;