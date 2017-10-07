import { action, extendObservable, computed } from 'mobx';
import * as d3 from 'd3';
import * as MainObj from './capacity_and_booking_lead_time.json';

export class DataStore {
  constructor() {
    extendObservable(this, {
      mainObj: MainObj
    })
  }
}

export default new DataStore();
