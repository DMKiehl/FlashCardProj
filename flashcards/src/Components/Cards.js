import React from 'react';
import Card from './Card';

const Cards = (props) => {
    console.log(props)
    return (
        <div>
            {props.stackChoice.cards.map(card => (
                <Card name={card.word} definition={card.definition} />
            ))}
        </div>
    );
};

export default Cards;