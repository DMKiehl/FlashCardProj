import React from 'react';
import './cards.css';

const Card = (props) => {
    const card = props.stackChoice.cards.filter(c => c.id === props.cardNumber);
    console.log(props);
    console.log(card);
    return (
        <div onClick={() => props.onCardChange(props.cardNumber)} className="Cards">
            <p>
                {card[0].word}
             
            </p>
            <p>
                {card[0].definition}
            </p>
        </div>
    );
}

export default Card;