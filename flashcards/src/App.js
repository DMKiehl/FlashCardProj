import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Stack from './Components/Stack';
import 'bootstrap/dist/css/bootstrap.css';
import Cards from './Components/Cards';



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

  handleStackChoice = (stack) => {
    console.log(stack);
    this.setState({showCards: true});
    this.setState({stackChoice: stack});

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
                
                {this.state.showCards && <Cards stackChoice={this.state.stackChoice}/>}
          </div>
     
  
        </div>
      </div>
        
    );
  } 
  
    

}
export default App;
