import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import FlashCardList from './Components/FlashCardList';
import FlashCardInput from './Components/FlashCardInput';
class App extends Component() {
  state = {
    collections: [],
    showCards: false
  };

  componentDidMount() {
    axios.get('https://localhost:44393/api/collection')
        .then(res => {
            this.setState({ collections: res.data })
        });
  }
  render() {
   
    return (
      <div className="App">
      <header className="App-header">
        Software Development FlashCards   
      </header>
    
      <div>
        <button onClick={this.toggleCardsHandler}>
            Show FlashCards
        </button>
        

        
      
      </div>
      <div>
      <FlashCardInput />
      </div>
     
  
    </div>
    );
  } 
  
    
}

export default App;
