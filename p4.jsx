import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Example from './components/example/Example';
import States from './components/states/States';

class p4 extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      currentView: 'example',
    };

    this.handleSwitchBound = () => this.handleSwitch();
  }

  handleSwitch() {
    this.setState((prevState) => ({
      currentView: prevState.currentView === 'example' ? 'states' : 'example',
    }));
  }

  render() {
    const { currentView } = this.state;
    const isExample = currentView === 'example';

    return (
      <div>
        <button type="button" onClick={this.handleSwitchBound}>
          {isExample ? 'Switch to States' : 'Switch to Example'}
        </button>

        {isExample ? <Example /> : <States />}
      </div>
    );
  }
}

ReactDOM.render(
  <p4 />,
  document.getElementById('reactapp'),
);