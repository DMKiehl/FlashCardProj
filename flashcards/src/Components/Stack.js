import React from 'react';
import './Stack.css';

const Stack = (props) => {
    return (
        <div className="FlashCard">
            <p onClick={props.click}>
                {props.title}
            </p>
        </div>

    );
}
 
export default Stack;