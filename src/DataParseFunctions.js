import mainObj from './capacity_and_booking_lead_time';

export const getPercentages = (currentTour) => {
  let totalsObj = { "Booking Lead Time": 0, "Total Bookings": 0, "Total Events": 0 };
  Object.keys(mainObj).map(tour => {
    let obj = getCurrentObj(tour);
    Object.keys(obj).map(val => compare(totalsObj, obj, val))
  })
  totalsObj["Average Capacity"] = 1.0;
  for(let props in totalsObj) {
    let str = "Average Capacity";
    let obj = getCurrentObj(currentTour);
    totalsObj[props] = obj[props] / totalsObj[props];
    totalsObj[str] = obj[str];
  }
  return totalsObj;
}

const getCurrentObj = (t) => mainObj[t]["Summary Statistics"];
const compare = (obj1, obj2, val) => (obj1[val] < obj2[val]) ? obj1[val] = obj2[val] : null;
