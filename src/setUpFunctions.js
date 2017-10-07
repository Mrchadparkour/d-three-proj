import * as d3 from 'd3';

export const setContext = (height, width, test) => {
  return d3.select(test).append('svg')
    .attr('height', '50%')
    .attr('width', '50%')
    .attr('id', "d3-arc")
    .attr('viewBox', '0 0 ' + Math.min(width, height)+' '+ Math.min(width, height))
    .attr('preserveAspectRatio', 'xMinYMin')
    .append('g')
    .attr('transform', `translate(${height / 2 }, ${width / 2})`);
}
