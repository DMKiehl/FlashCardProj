import React from 'react';
import './cards.css';

const Card = (props) => {

    

    
    return (
        <div>
             <div onClick={() => props.onCardChange(props.index)} className="Cards">
                <p>
                    {props.stackChoice[props.index].word}            
                </p>
                <p>
                    {props.stackChoice[props.index].definition}
                </p>            
            </div>
            <div>
                <p className="Number">
                    {props.index + 1} / {props.cardTotal}
                </p>
            </div>
        </div>
       
    );
}

export default Card;