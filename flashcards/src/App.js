import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Stack from './Components/Stack';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './Components/Card';



class App extends Component {
  state = {
    collections: [],
    showCards: false,
    cardNumber: 1,
    cardTotal: 0

  };

  componentDidMount() {
    axios.get('https://localhost:44393/api/collection')
        .then(res => {
            this.setState({ collections: res.data })
        });
  }

  handleStackChoice = (stack) => {
    console.log(stack);
    this.setState({showCards: true});
    this.setState({stackChoice: stack});

  };

  handleCardChange = (cardNumber) => {
    console.log(cardNumber);
      this.setState({cardNumber: cardNumber + 1});
  };
  
  render() {

   
    return (
      <div>
          <header className="App-header">
          Software Development FlashCards   
        </header>
    
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
          <div className='col'>
                
                {this.state.showCards && <Card stackChoice={this.state.stackChoice} cardNumber={this.state.cardNumber} onCardChange={this.handleCardChange}/>}
          </div>
     
  
        </div>
      </div>
        
    );
  } 
  
    

}
export default App;
