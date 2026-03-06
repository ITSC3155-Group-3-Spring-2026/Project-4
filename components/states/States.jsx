import React from 'react';
import './States.css';

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      states: window.models.states(),
      inputValue: ''
    };

    this.handleChangeBound = event => this.handleChange(event);
    // console.log('window.models.states', window.models.states);
  }
  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  outOfBandJSX(filter) {
    const normalizedFilter = filter.toLowerCase();
    const filteredStates = this.state.states
      .filter((state) => state.toLowerCase().includes(normalizedFilter))
      .slice()
      .sort((a, b) => a.localeCompare(b));

    if (filteredStates.length === 0) {
      return <div>No matching states match filter criteria.</div>;
    }

    return (
      <ul>
        {filteredStates.map((state) => (
          <li key={state}>{state}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="container States">
        <label htmlFor="stateFilterId">State Filter: </label>
        <input
          id="stateFilterId"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChangeBound}
        />

        <div>
          Filter substring: &quot;{this.state.inputValue}&quot;
        </div>

        {this.outOfBandJSX(this.state.inputValue)}
      </div>
    );
  }
}

export default States;
