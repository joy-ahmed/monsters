import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component { 
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }))
    .catch(err => console.error('Somethin went wrong :(', err))
  }

  render() { 
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
      {/* <input type='search' placeholder='search monster' onChange={ e => this.setState({searchField: e.target.value})}/> */}
      <SearchBox 
        placeholder='search monster'
        handleChange={ e => this.setState({searchField: e.target.value}) }
      />
      <CardList monsters={ filteredMonster }/>
      </div>
    );
  }
}

export default App;