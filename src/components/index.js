import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ProgressArc from './ProgressArc';
import Tabs from './Tabs';

const App = observer(class App extends Component {

  render() {
    const { store } = this.props;
    return (
      <div className="App">
        <ProgressArc
          height={300}
          width={300}
          innerRadius={15}
          outerRadius={20}
          backgroundColor="#e6e6e6"
          percent={ this.props.store.tCapacity }
          foregroundColor="#00ff00"
          store={ store }
         />
      </div>

    );
  }
});

export default App;
