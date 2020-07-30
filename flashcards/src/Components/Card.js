import React from 'react';
import './cards.css';

const Card = (props) => {
    console.log(props)
    return (
        <div className="Cards">
            <p>
                {props.name}
             
            </p>
            <p>
                {props.definition}
            </p>
        </div>
    );
}

export default Card;