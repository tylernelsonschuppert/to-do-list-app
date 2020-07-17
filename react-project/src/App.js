import React, { Component } from 'react';
import './App.css';
import ListContainer from './components/ListContainer/ListContainer.js';
import ListHeader from './components/ListHeader/ListHeader.js';
import ListItems from './components/ListItems/ListItems.js';

class App extends Component {
  state = {
    items: []
  }
  componentDidMount() {
      fetch('http://192.168.5.21:3000/tasks')
      .then(res => res.json())
      .then((data) => {
        this.setState({ items: data })
      })
      .catch(console.log)
  }
  render() {
    return (
      <ListContainer
        header = {
          <ListHeader title="To-Do List"/>
        }
        listitems = {
          <ListItems listitems={this.state.items} />
        }
      />
    )
  }
}

export default App;