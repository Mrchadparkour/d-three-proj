import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ProgressArc from './ProgressArc';

const Tabs = observer(class Tabs extends Component {

  render() {
    const { listOfTourNames, setCurrentTour } = this.props.store;
    return (
      <div className="Tabs">
        {
          listOfTourNames.map(el => (
            <p onClick={(e) => setCurrentTour(el)} key={el}>{el}</p>
          ))
        }
      </div>
    );
  }
});

export default Tabs;
