import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }


    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red', blod']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi!</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toogle Person</button>
        </div>
    )
};

export default cockpit;