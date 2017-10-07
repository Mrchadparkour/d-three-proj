import React, { Component } from 'react';
import * as d3 from "d3";
import { setContext } from './setUpFunctions';

class ProgressArc extends Component {
  componentDidMount() {
    this.drawArc();
  }

  drawArc() {
    const { height, width } = this.props;
    const context = setContext(height, width, this.refs.arc);
    this.setBackground(context);
    this.setForeground(context);
  }

  setBackground(context) {
    return context.append('path')
    .datum({ endAngle: this.tau })
    .style('fill', this.props.backgroundColor)
    .attr('d', this.arc());
  }

  setForeground(context) {
    const { foregroundColor, percentComplete } = this.props;
    return context.append('path')
    .datum({ endAngle: this.tau * percentComplete })
    .style('fill', foregroundColor)
    .attr('d', this.arc());
  }

  tau = Math.PI * 2;

  arc() {
    const { innerRadius, outerRadius } = this.props;
    return d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(0)
  }

  render() {
    return(
      <div ref="arc"></div>
    );
  }
}

export default ProgressArc;
