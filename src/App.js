import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
         {/*  <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}>My Hobbies: Racing Use bind instead
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/> */}
          
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
