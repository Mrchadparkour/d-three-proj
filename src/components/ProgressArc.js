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
