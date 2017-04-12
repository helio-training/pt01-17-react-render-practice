import React, { Component } from 'react';

const PERSON = { name: 'Tyler', isActive: true };

class Person extends Component {

  constructor() {
    super();
    this.state = PERSON;
  }

  handleSubmit = e => {
    e.preventDefault();
    
  };

  render() {
    console.log(this.state);

    return (
      <form onSubmit={this.handleSubmit}>

        <fieldset>
          <input type="text" placeholder="Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} required minLength="3" />
        </fieldset>

        <fieldset>
          <label>
            <input type="checkbox" checked={this.state.isActive} onChange={e => this.setState({ isActive: !this.state.isActive })} />
            Is Active
          </label>
        </fieldset>

        <fieldset>
          <button type="submit">Save</button>
        </fieldset>
      </form>
    )
  }
}

export default Person;