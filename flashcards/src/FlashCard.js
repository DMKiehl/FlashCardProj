import React from 'react';
import './FlashCard.css';

const stack = (props) => {
    return (
        <div className="FlashCard">
            <p>{props.title}</p>
        </div>
    )
};
   
export default stack;