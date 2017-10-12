import { action, extendObservable, computed } from 'mobx';
import { getPercentages, mainObj } from "./FunctionFiles/DataParseFunctions";


export class DataStore {
  constructor() {
    extendObservable(this, {
      tourName: "SoBro Public Tour",
      listOfTourNames: Object.keys(mainObj),
      currentTour: computed(() => mainObj[this.tourName]["Summary Statistics"]),
      setCurrentTour: action((name) => this.tourName = name),
      percentages: computed(() => getPercentages(this.tourName)),
    })
  }
}

export default new DataStore();
