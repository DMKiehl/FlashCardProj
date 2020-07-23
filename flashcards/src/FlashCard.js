import React from 'react';
import './FlashCard.css';

const card = (props) => {
    return (
        <div className="FlashCard">
            <p>{props.title}</p>
        </div>
    )
};
   
export default card;