import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ProgressArc from './ProgressArc';

const App = observer(class App extends Component {
  constructor(props) {
    super(props);
    this.state = {percentComplete: 0.3};
    this.togglePercent = this.togglePercent.bind(this);
  }

  togglePercent() {
    const percentage = this.state.percentComplete === 0.3 ? 0.7 : 0.3;
    this.setState({ percentComplete: percentage });
  }

  render() {
    return (
      <div>
        <ProgressArc
          height={300}
          width={300}
          innerRadius={0}
          outerRadius={20}
          backgroundColor="#e6e6e6"
          foregroundColor="#00ff00"
          percentComplete={this.props.store.mainObj["SoBro Public Tour"]["Summary Statistics"]["Average Capacity"]}
         />
      </div>

    );
  }
});

export default App;
