import React, {Component} from 'react';
import axios from 'axios';

class FlashCardInput extends Component {
    
    state = {
        word: '',
        definition: '',
        collection: '',
    };

    handleWordChange = event => {
        this.setState({word: event.target.value});
    }

    handleDefinitionChange = event => {
        this.setState({definition: event.target.value});
    }

    handleCollectionChange = event => {
    
        this.setState({collection: event.target.value});

    }

    handleSubmit = event => {
        console.log(this.props.collections);
        console.log("submit");
        // event.preventDefault();

        let stack = this.props.collections.find(c => c.title === this.state.collection);
        let stackId = stack.id;

        const card = {
            word: this.state.word,
            definition: this.state.definition,
            stackId: stackId,
        }

        axios ({
            method: 'post',
            url: 'https://localhost:44393/api/card',
            data: card,
        })
            .then(res => {
                console.log(res);
                console.log(res.data);

            });
    };



    render() {
        return (
         <form onSubmit={this.handleSubmit}>
             <label>Word:
                 <input type="text" name="word" onChange={this.handleWordChange}/>
             </label>
             <label>Definition:
                 <input type="text" name="definition" onChange={this.handleDefinitionChange}/>
             </label>
             <label>Collection:
                <input type="text" name="title" onChange={this.handleCollectionChange}/>
             </label>
             <button type="submit">Add</button>
         </form>
           
        )
    }
}

export default FlashCardInput;