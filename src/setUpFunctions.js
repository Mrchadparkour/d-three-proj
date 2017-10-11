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

const arc = (innerR, outerR, start) => (
  d3.arc()
    .innerRadius(innerR)
    .outerRadius(outerR)
    .startAngle(start)
    .cornerRadius(3)
);


const getInner = (i) => i * radius;
const getOuter = (i) => (i + spacing)* radius;
const getStart = (num) => (num < .5) ? Math.PI * 2 * num : 0;

const getColor = (i) => {
  let hVal = (Math.round(Math.random() * 180));
  return `hsl(${hVal}, ${62.5 - (i * 12.5)}%, 50%)`;
}

const setCircle = (context, percentIn, color, innerR, outerR, id) => {
  return context.append('path')
    .datum({endAngle: (Math.PI * 2 * percentIn) })
    .attr('d', arc(innerR, outerR, 0))
    .style('fill', color)
    .append('path')
    .datum({endAngle: Math.PI * 2})
    .attr('d', arc(innerR, outerR, 0))
    .attr("id", "path" + id)
}

const addText = (context, id, text) => {
  return context.append("text")
    .attr("dy", 25)
    .attr("dx", 10)
    .append("textPath")
    .attr("class", "arc-text")
    .attr("xlink:href","#path" + id)
    .text(text)
}

const numToStr = (num) => (num < 1) ? "%" + Math.round(num * 100) : Math.round(num);

const getText = (obj) => {
  let arr = Object.keys(obj);
  arr.push(arr.splice(1, 1)[0]);
   return arr.map(e => {
     return {key: e, value: numToStr(obj[e])}
   });
}

export const drawArcs = (percentages, currentTour) => {
  const context = setContext();
  const textObjs = getText(currentTour);
  console.log(textObjs);
  let i = 1;
  for (let val in percentages) {
    let keyText = textObjs[i - 1].key;
    let text = textObjs[i - 1].value;
    setCircle(context, percentages[val], getColor(i), getInner(i), getOuter(i), i);
    addText(context, i, `${keyText}: ${text}`);
    i++;
  }
}
