import * as d3 from 'd3';

export const setContext = (height, width, target) => {
  return d3.select(target).append('svg')
    .attr('height', '50%')
    .attr('width', '50%')
    .attr('id', "d3-arc")
    .attr('viewBox', '0 0 ' + Math.min(width, height)+' '+ Math.min(width, height))
    .attr('preserveAspectRatio', 'xMinYMin')
    .append('g')
    .attr('transform', `translate(${height / 2 }, ${width / 2})`);
}

const arc = (innerR, outerR) => {
  return d3.arc()
    .innerRadius(innerR)
    .outerRadius(outerR)
    .startAngle(0)
}

export const setCircle = (context, percentIn, color, innerR, outerR) => {
  const percent = percentIn === 0 ? 1 : percentIn;
  return context.append('path')
  .datum({ endAngle: Math.PI * 2 * percent})
  .style('fill', color)
  .attr('d', arc(innerR, outerR));
}
