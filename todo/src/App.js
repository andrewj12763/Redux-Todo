import React, { Component } from 'react';
import './App.css';
import Todo from "./components/Todo"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* importing todo component and adding to page. Add Css for main div */}
        <Todo />
      </div>
    );
  }
}

export default App;