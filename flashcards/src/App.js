import React from 'react';
import logo from './logo.svg';
import './App.css';

import FlashCardList from './Components/FlashCardList';
import FlashCardInput from './Components/FlashCardInput';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Software Development FlashCards   
      </header>
    
      <div>
      <FlashCardList />
      
      </div>
      <div>
      <FlashCardInput />
      </div>
     

    </div>
  );
}

export default App;
