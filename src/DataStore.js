import { action, extendObservable, computed } from 'mobx';
import { getPercentages, mainObj } from "./DataParseFunctions";


export class DataStore {
  constructor() {
    extendObservable(this, {
      tourName: "SoBro Public Tour",
      listOfTourNames: Object.keys(mainObj).filter(e => !/OFFICE+/.test(e)),
      currentTour: computed(() => mainObj[this.tourName]["Summary Statistics"]),
      setCurrentTour: action((name) => this.tourName = name),
      percentages: computed(() => getPercentages(this.tourName)),
    })
  }
}

export default new DataStore();
