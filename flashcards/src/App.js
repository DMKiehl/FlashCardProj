import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Stack from './Components/Stack';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './Components/Card';
import FlashCardInput from './Components/FlashCardInput';




class App extends Component {
  state = {
    collections: [],
    showCards: false,
    index: 0,
    cardTotal: 0

  };

  componentDidMount() {
    axios.get('https://localhost:44393/api/collection')
        .then(res => {
            this.setState({ collections: res.data })
        });
  }

  handleStackChoice = (stack) => {
    let count = stack.cards.length;
    this.setState({showCards: true});
    this.setState({index: 0});
    this.setState({stackChoice: stack});
    this.setState({cardTotal: count})


  };

  handleCardNext = (index) => {
    if (index === this.state.cardTotal - 1) {
      this.setState({showCards: false});
    }
      this.setState({index: index + 1});
  };

  handleCardPrevious = (index) => {
    if (index === 0) {
      this.setState({showCards: false});
    }
    this.setState({index: index - 1});
  }
  
  render() {

   
    return (
      <div>
          <header className="App-header">
          Software Development FlashCards   
        </header>
        <div className='Add'>
          <h4>Add a Flash Card to a Collection: </h4>
          <FlashCardInput collections={this.state.collections} />
        </div>
    
        <div className="row">  
          <div className='col-4'>
            <p className="title">Please choose a category!</p>
              {this.state.collections.map((stack, index) => {
                return <Stack
                  click={() => this.handleStackChoice(stack)}
                  key={stack.id} 
                  title={stack.title}/>
                })}
          </div> 
          <div className='col-1'>

          </div>
          <div className='col-6'>
                
                {this.state.showCards && <Card stackChoice={this.state.stackChoice.cards} index={this.state.index} onCardPrevious={this.handleCardPrevious} onCardNext={this.handleCardNext} cardTotal={this.state.cardTotal}/>}
          </div>
     
  
        </div>
       
      </div>
        
    );
  } 
  
    

}
export default App;
