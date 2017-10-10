import * as d3 from 'd3';

const height = 500;
const width = 500;
const radius = Math.min(width, height) / 10;
const spacing = 0.9

export const setContext = () => {
  return d3.select("#arc").append('svg')
    .attr('height', height)
    .attr('width', width)
    .attr('id', "d3-arc")
    .attr('viewBox', '0 0 ' + Math.min(width, height)+' '+ Math.min(width, height))
    .attr('preserveAspectRatio', 'xMinYMin')
    .append('g')
    .attr('transform', `translate(${height / 2 }, ${width / 2})`);
}

const arc = (innerR, outerR) => (
  d3.arc()
    .innerRadius(innerR)
    .outerRadius(outerR)
    .startAngle(0)
);

export const setCircle = (context, percentIn, color, innerR, outerR) => {
  const percent = percentIn === 0 ? 1 : percentIn;
  return context.append('path')
  .datum({ endAngle: Math.PI * 2 * percentIn})
  .attr('d', arc(innerR, outerR))
  .style('fill', color);
}

export const getInner = (i) => i * radius;
export const getOuter = (i) => (i + spacing)* radius;
