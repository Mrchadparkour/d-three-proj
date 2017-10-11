import React, { Component } from 'react';
import * as d3 from "d3";
import { observer } from 'mobx-react';
import { drawArcs } from '../setUpFunctions';


const ProgressArc = observer(class ProgressArc extends Component {
  componentDidMount() {
    drawArcs(this.props.store.percentages, this.props.store.currentTour);
  }

  componentDidUpdate() {
    let { percentages, currentTour } = this.props.store;
    d3.select("#d3-arc").remove();
    drawArcs(percentages, currentTour);
  }

  render() {
    return(
      <div id="arc">
        <h1>{this.props.store.tourName}</h1>
      </div>
    );
  }
})

export default ProgressArc;
