import React, { Component } from 'react';
import * as d3 from "d3";
import { drawArcs } from '../setUpFunctions';


class ProgressArc extends Component {
  componentDidMount() {
    drawArcs(this.props.store.percentages);
  }

  componentDidUpdate() {
    d3.select("#d3-arc").remove();
    drawArcs(this.props.store.percentages);
  }

  render() {
    return(
      <div id="arc"></div>
    );
  }
}

export default ProgressArc;
