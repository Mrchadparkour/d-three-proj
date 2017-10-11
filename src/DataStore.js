import { action, extendObservable, computed } from 'mobx';
import * as mainObj from './capacity_and_booking_lead_time.json';
import { getPercentages } from "./DataParseFunctions";

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
