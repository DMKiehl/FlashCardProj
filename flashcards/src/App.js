import React, {Component} from 'react';
import './App.css';
import FlashCardInput from './Components/FlashCardInput';
import axios from 'axios';
import FlashCard from './FlashCard';


class App extends Component {
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

  toggleCardsHandler = () => {
    const doesShow = this.state.showCards;
    this.setState({showCards: !doesShow})
  }

  
  render() {

    let cards = null;
    if (this.state.showCards) {
      cards = (
        <div>
          {this.state.collections.map(card => {
            return <FlashCard title={card.title}/>
          })}
        </div>
      );
    }
   
    return (
      <div className="App">
      <header className="App-header">
        Software Development FlashCards   
      </header>
    
      <div>
        <button onClick={this.toggleCardsHandler}>
            Show FlashCards
        </button>
        {cards}
        

        
      
      </div>
      <div>
      <FlashCardInput />
      </div>
     
  
    </div>
    );
  } 
  
    
}

export default App;
