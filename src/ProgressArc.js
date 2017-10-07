import React, { Component } from 'react';
import * as d3 from "d3";
import { setContext, arc, setCircle } from './setUpFunctions';

class ProgressArc extends Component {
  componentDidMount() {
    this.drawArc();
  }

  drawArc() {
    const { height, width, percentComplete, innerRadius, outerRadius } = this.props;
    const context = setContext(height, width, this.refs.arc);
    this.setCircle(context, 0,'grey'); // background
    this.setCircle(context, percentComplete,'green', innerRadius, outerRadius ); //foreground
  }

  render() {
    return(
      <div ref="arc"></div>
    );
  }
}

export default ProgressArc;
