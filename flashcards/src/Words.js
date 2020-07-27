import React from 'react';
import Word from './Word';

const words = (props) => {
    props.words.map(word => {
        return <Word
        key={word.card.id}
        word={word.card.word}
        definition={word.card.definition} />
    });

}
export default words;