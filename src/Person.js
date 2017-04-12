import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {

  constructor(props) {
    super(props);
    this.state = { ...props.person };
  }

  render() {
    return (
      <form onSubmit={e => {
        e.preventDefault();

        console.log('State', this.state);
        console.log('Props', this.props.person);


        this.props.onPersonSaved(this.state);
      }}>

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

Person.propTypes = {
  person: PropTypes.object.isRequired,
  onPersonSaved: PropTypes.func.isRequired
};

export default Person;