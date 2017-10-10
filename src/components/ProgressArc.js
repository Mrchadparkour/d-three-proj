import React, { Component } from 'react';
import * as d3 from "d3";
import { setContext, arc, setCircle, getInner, getOuter } from '../setUpFunctions';

class ProgressArc extends Component {
  componentDidMount() {
    this.drawArcs();
  }

  componentDidUpdate() {
    const context = d3.select("#d3-arc")
    .remove();
    this.drawArcs();
  }

  drawArcs() {
    const { height, width, percent, innerRadius, outerRadius } = this.props;
    const { percentages } = this.props.store;
    console.log(percentages);
    const context = setContext(height, width);
    let counter = 1;
    for (let val in percentages) {
      let inner = getInner(counter);
      let outer = getOuter(counter);
      setCircle(context, percentages[val], "red", inner, outer);
      counter++;
    }
  }

  render() {
    return(
      <div id="arc"></div>
    );
  }
}

export default ProgressArc;
