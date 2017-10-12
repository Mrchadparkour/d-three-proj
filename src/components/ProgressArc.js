import React, { Component } from 'react';
import * as d3 from "d3";
import { observer } from 'mobx-react';
// import { drawArcs } from '../FunctionFiles/setUpFunctions';


const ProgressArc = observer(class ProgressArc extends Component {
  componentDidMount() {
    this.props.store.drawArcs();
  }

  componentDidUpdate() {
    d3.select("#d3-arc").remove();
    this.props.store.drawArcs();
  }

  render() {
    return(
      <div className="ProgressArc">
        <div id="arc">
          <h1>{this.props.store.tourName}</h1>
        </div>
        <p>*The distance traveled by each arc is the percentage of the current
         value over the largest found value.</p>
      </div>
    );
  }
})

export default ProgressArc;
