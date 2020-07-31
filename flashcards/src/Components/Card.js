import React from 'react';
import './cards.css';

const Card = (props) => {

    

    
    return (
        <div>
             <div className="Cards">
                <p>
                    {props.stackChoice[props.index].word}            
                </p>
                <p>
                    {props.stackChoice[props.index].definition}
                </p>            
            </div>
            <div>
                
                <p className="Number"><button onClick={() => props.onCardPrevious(props.index)} className="btn btn-primary m-5">Previous</button>
                    {props.index + 1} / {props.cardTotal}  <button onClick={() => props.onCardNext(props.index)} className="btn btn-primary m-5">Next</button>
                </p>
               
            </div>
        </div>
       
    );
}

export default Card;