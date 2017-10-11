import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ProgressArc from './ProgressArc';
import Tabs from './Tabs';

const App = observer(class App extends Component {

  render() {
    const { store } = this.props;
    return (
      <div className="App">
        <ProgressArc store={ store } />
        <Tabs store={ store }/>
      </div>
    );
  }
});

export default App;
