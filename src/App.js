import React, { Component } from 'react';
import './App.css';

class App extends Component { 
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }))
    .catch(err => console.error('Somethin went wrong :(', err))
  }

  render() { 
    return (
      <div className="App">
        { 
          this.state.monsters.map
            (list => <h1 key={list.id}>{ list.name }</h1>) 
        }
      </div>
    );
  }
}

export default App;