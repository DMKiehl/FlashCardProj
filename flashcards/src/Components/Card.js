import React from 'react';
import './cards.css';

const Card = (props) => {
    console.log(props);
    

    
    return (
        <div onClick={() => props.onCardChange(props.index)} className="Cards">
            <p>
                {props.stackChoice[props.index].word}
             
            </p>
            <p>
                {props.stackChoice[props.index].definition}
            </p>
        </div>
    );
}

export default Card;