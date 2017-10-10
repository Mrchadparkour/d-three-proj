import * as d3 from 'd3';

const height = 500;
const width = 500;
const radius = Math.min(width, height) / 10;
const spacing = 0.9

const setContext = () => {
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
    .startAngle(-1.5708)
);


const getInner = (i) => i * radius;
const getOuter = (i) => (i + spacing)* radius;

const getColor = (i) => {
  let hVal = (Math.round(Math.random() * 180));
  return `hsl(${hVal}, ${62.5 - (i * 12.5)}%, 50%)`;
}

const setCircle = (context, percentIn, color, innerR, outerR) => {
  return context.append('path')
  .datum({ endAngle: (Math.PI * 2 * percentIn) - 1.5708})
  .attr('d', arc(innerR, outerR))
  .style('fill', color);
}

export const drawArcs = (percentages) => {
  const context = setContext();
  let i = 1;
  for (let val in percentages) {
    setCircle(context, percentages[val], getColor(i), getInner(i), getOuter(i));
    i++;
  }
}
