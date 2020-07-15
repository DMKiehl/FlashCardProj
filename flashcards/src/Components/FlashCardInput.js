import React from 'react';
import axios from 'axios';

export default class FlashCardInput extends React.Component {
    state = {
        word: '',
    };

    handleChange = event => {
        this.setState({word: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefualt();

        const user = {
            word: this.state.word
        }

        axios.post('https://localhost:44393/api/card', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);

            });
    };



    render() {
        return (
         <form onSubmit={this.handleSubmit}>
             <label>Word:
                 <input type="text" name="word" onChange={this.handleChange}/>
             </label>
             <label>Definition:
                 <input type="text" name="definition" onChange={this.handleChange}/>
             </label>
             <button type="submit">Add</button>
         </form>
           
        )
    }
}