import React from 'react';
import axios from 'axios';

export default class FlashCardList extends React.Component {
    state = {
        collections: []
    };

    componentDidMount() {
        axios.get('https://localhost:44393/api/collection')
            .then(res => {
                this.setState({ collections: res.data })
            });
    }

    render() {
        return (
           
            //<div>
               //{this.state.collections.map(collection => {collection.title})}
            //</div>
            <div>
                <ul>
                    {this.state.collections.map(collection => <li key={collection.id}>{collection.title}({collection.id})</li>)}
                </ul>
  
    
    
    
            </div>
        )
    }

   
}

export default FlashCardList;