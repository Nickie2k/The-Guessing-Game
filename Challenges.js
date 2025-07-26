//! Create a function 'printForecast' which takes in an 'arr' and logs a strings like:
//! Data = [17,21,33] will be printed like "17C in 1 day... 21C in 2 days... 33C in 3 days"

data1 = [17, 21, 33];

const printForecast = function (arr) {
  let str = '';
  for (i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} day...`;
    console.log(str);
  }
};

// printForecast(data1);

// 17C in 1 day...
// 17C in 1 day...21C in 2 day...
// 17C in 1 day...21C in 2 day...33C in 3 day...

//! -----------------------------------------------------------------------------------//

//! Write a function that receives daily work for a certain wee, and returns:
//! 1. Total hours worked
//! 2.  Average daily hours
//! 3. The day with the most hours worked
//! 4.  Numbers of days worked
//! 5.  Whether the week was full time (>35hrs)

const trueData1 = [];
const testData1 = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const wholeWeek = function (arr) {
  let myHours = 0;
  let maxHours = arr[0];

  for (i = 0; i < arr.length; i++) {
    myHours += arr[i];
    if (arr[i] > maxHours) maxHours = arr[i];
  }
  const totalHours = myHours;
  const averageHours = myHours / arr.length;
  const daysWorked = arr.length;
  const status =
    myHours > 35 ? 'this person is full time' : 'this person is part time';

  return trueData1.push(totalHours, averageHours, maxHours, daysWorked, status);
};

wholeWeek(testData1);
console.log(trueData1);
