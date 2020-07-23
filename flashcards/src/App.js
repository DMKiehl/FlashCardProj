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

  useStackHandler = (stackIndex) => {
      const thisStack = this.state.collections.findIndex(p => {
        return p.id === stackIndex;
      });


  }

  
  render() {
     
    return (
      <div className="App">
      <header className="App-header">
        Software Development FlashCards   
      </header>
    
      <div>
       
        <div>
          {this.state.collections.map((stack, index) => {
            return <FlashCard 
              click={() => this.useStackHandler(stack.id)}
              key={stack.id} 
              title={stack.title}/>
          })}
        </div>    
      </div>
      <div>
      <FlashCardInput />
      </div>
     
  
    </div>
    );
  } 
  
    
}

export default App;
