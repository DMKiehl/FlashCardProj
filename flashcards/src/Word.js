import React from 'react';
import './Word.css';

const word = (props) => {
    return (
        <div className="Card">
            <p>{props.word}</p>
            <p>{props.definition}</p>
        </div>
    )
};

export default word;