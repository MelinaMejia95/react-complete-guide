import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //DO NOT DO THIS: this.state.persons[0].name = 'Maximillian';
    this.setState({
      persons: [
        { name: newName , age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max' , age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  tooglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'White',
      font: 'inherit',
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangedHandler}>My Hobbies: Racing {/* Use bind instead*/}
            </Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
            
          </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi!</h1>
        {/* <button 
          style={style} 
          onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button> */} {/* Try not to use it, it can be inefficient  */}
        <button style={style}
        onClick={this.tooglePersonHandler}>Toogle Person</button>
       {persons}
          
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'HI!'))
  }
}

export default App;
