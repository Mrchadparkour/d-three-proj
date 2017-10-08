import React, { Component } from 'react';
import * as d3 from "d3";
import { setContext, arc, setCircle } from '../setUpFunctions';

class ProgressArc extends Component {
  componentDidMount() {
    this.drawArc();
  }

  componentDidUpdate() {
    const context = d3.select(`#d3-arc`);
    context.remove();
    this.drawArc();
  }

  drawArc() {
    const { height, width, percent, innerRadius, outerRadius } = this.props;
    const context = setContext(height, width, this.refs.arc);
    setCircle(context, 0, 'grey'); // background
    setCircle(context, percent, 'green', innerRadius, outerRadius); //foreground
  }

  render() {
    return(
      <div ref="arc"></div>
    );
  }
}

export default ProgressArc;
