import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {

    constructor (props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
        this.lastPersonRef = React.createRef();
      }
    
      componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');    
      }
    
      componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
        this.lastPersonRef.current.focus();
      }
    
    /*Updating lifecycle*/

    componentWillReceiveProps(nextProps) {
        console.log('[Update Persons.js] Inside componentWillReceiveProps', nextProps);
    }

   /*  shouldComponentUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
        return nextProps.persons !== this.props.persons ||
        nextProps.changed !== this.props.changed ||
        nextProps.clicked !== this.props.clicked;
    } */

    componentWillUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[Update Persons.js] Inside componentWDidUpdate');
    }

    render () {
        
        console.log('[Persons.js] Inside render()');    

        return this.props.persons.map((person, index) => {
            return <Person 
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    position={index}
                    age={person.age}
                    ref={this.lastPersonRef}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
        });
    }
}

export default Persons;