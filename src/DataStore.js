import { action, extendObservable, computed } from 'mobx';
import { getPercentages, mainObj } from "./FunctionFiles/DataParseFunctions";
import {
  addText,
  setContext,
  getText,
  getInner,
  getOuter,
  setCircle,
  getColor } from "./FunctionFiles/setUpFunctions";


export class DataStore {
  constructor() {
    extendObservable(this, {
      tourName: "SoBro Public Tour",
      prevArr: [-1.57, -1.57, -1.57, -1.57],
      context: "No current Context",
      listOfTourNames: Object.keys(mainObj),
      currentTour: computed(() => mainObj[this.tourName]["Summary Statistics"]),
      percentages: computed(() => getPercentages(this.tourName)),
      setCurrentTour: action((name) => this.tourName = name),
      resetContext: action(() => this.context = setContext()),
      drawArcs: action(() => {
        console.log(this.prevArr)
        this.resetContext();
        const textObjs = getText(this.currentTour);
        let i = 1;
        let newPrevArr = [];
        let percentages = this.percentages;
        for (let val in percentages) {
          let keyText = textObjs[i - 1].key;
          let num = textObjs[i - 1].value;
          let prevPercent = this.prevArr[i - 1];
          console.log(prevPercent)
          let inner = getInner(i);
          let out = getOuter(i);
          setCircle(this.context, percentages[val], getColor(i), inner, out, i, prevPercent);
          addText(this.context, i, `${keyText}: ${num}`, inner, out);
          newPrevArr.push(percentages[val])
          i++;
        }
        this.prevArr = newPrevArr;
        console.log(this.prevArr);
      }),

    })
  }
}

export default new DataStore();
