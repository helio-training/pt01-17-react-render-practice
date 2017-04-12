import React, { Component } from 'react';
import './App.css';
import Person from './Person';

const PERSON = { name: 'Tyler', isActive: true };

class App extends Component {

  render() {
    return (
      <div>
        <Person
          person={PERSON}
          onPersonSaved={ person => {
            console.log('App', person);
          }}
        />
      </div>
    );
  }

}

export default App;
