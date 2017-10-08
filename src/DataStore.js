import { action, extendObservable, computed } from 'mobx';
import * as d3 from 'd3';
import * as mainObj from './capacity_and_booking_lead_time.json';

export class DataStore {
  constructor() {
    extendObservable(this, {
      tourName: "SoBro Public Tour",
      listOfTourNames: Object.keys(mainObj),
      currentTour: computed(() => mainObj[this.tourName]),
      setCurrentTour: action((name) => this.tourName = name),
      tCapacity: computed(() => this.currentTour["Summary Statistics"]["Average Capacity"])

    })
  }
}

export default new DataStore();
