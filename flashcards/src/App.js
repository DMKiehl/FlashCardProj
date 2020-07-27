import React, {Component} from 'react';
import './App.css';
import FlashCardInput from './Components/FlashCardInput';
import axios from 'axios';
import Stack from './Stack';



class App extends Component {
  state = {
    collections: [],
    showCards: false,
    stackChoice: []
  };

  componentDidMount() {
    axios.get('https://localhost:44393/api/collection')
        .then(res => {
            this.setState({ collections: res.data })
        });
  }

  toggleCards = () => {
    const doesShow = this.state.showPersons;
    this.setState({showCards: !doesShow})
  }

  useStackHandler = (stackIndex) => {
    

  }

  
  
  render() {
    const style = {
      backgroundColor: 'white'
    };




    return (
      <div className="App">
      <header className="App-header">
        Software Development FlashCards   
      </header>
    
      <div>
        <div>
          <p>Please choose a category!</p>
        </div>
       
        <div>
          {this.state.collections.map((stack, index) => {
            return <Stack 
              style={style}
              click={() => this.useStackHandler(stack.id)}
              key={stack.id} 
              title={stack.title}/>
          })}
        </div> 
        <div>

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
