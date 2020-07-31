import React, {Component} from 'react';
import './Stack.css';

class Stack extends Component {
    state ={
        color: 'lightblue'
    }
   

    render() {

        return (
            <div style={{backgroundColor: this.props.color }}className="FlashCard">
                <p onClick={this.props.click}>
                    {this.props.title}
                </p>
            </div>
    
        );
    }
    }
  
 
export default Stack;