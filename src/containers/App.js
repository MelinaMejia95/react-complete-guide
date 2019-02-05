import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass'; //Import with lowercase 'w' because qualify as a component

class App extends PureComponent {

  constructor (props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: '1', name: 'Max', age: 28 },
        { id: '2', name: 'Manu', age: 29 },
        { id: '3', name: 'Stephanie', age: 26 }
      ],
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');    
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  /*Updating lifecycle with internal changes*/
  /* shouldComponentUpdate(nextProps, nextState) {
    console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return nextState.persons !== this.state.persons ||
    nextState.showPersons !== this.state.showPersons;
  } */

  componentWillUpdate(nextProps, nextState) {
      console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
      console.log('[Update App.js] Inside componentWDidUpdate');
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
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  render() {

    console.log('[App.js] Inside render()');
    
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.tooglePersonHandler}/>
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
