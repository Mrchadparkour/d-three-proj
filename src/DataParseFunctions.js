import * as capacity_and_booking_lead_time from './capacity_and_booking_lead_time';


const getCurrentObj = (t) => capacity_and_booking_lead_time[t]["Summary Statistics"];
const sanitizeObj = (obj) => {
  let newObj = obj;
  for (let tour in obj) {
    let testable = getCurrentObj(tour);
    if (Object.keys(testable).length !== 4) delete newObj[tour];
  }
  return newObj;
}
export const mainObj = sanitizeObj(capacity_and_booking_lead_time);
const compare = (obj1, obj2, val) => (obj1[val] < obj2[val]) ? obj1[val] = obj2[val] : null;

const getBigNums = () => {
  let bigsObj = { "Booking Lead Time": 0, "Total Bookings": 0, "Total Events": 0 };
  for (let tour in mainObj) {
    let obj = getCurrentObj(tour);
    Object.keys(obj).map(val => compare(bigsObj, obj, val));
  }
  bigsObj["Average Capacity"] = 1.0;
  return bigsObj;
}

export const getPercentages = (currentTour) => {
  let bigsObj = getBigNums();
  for(let props in bigsObj) {
    let str = "Average Capacity";
    let obj = getCurrentObj(currentTour);
    bigsObj[props] = obj[props] / bigsObj[props];
    bigsObj[str] = obj[str];
  }
  return bigsObj;
}
