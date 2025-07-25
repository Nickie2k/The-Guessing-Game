//! ------------------------- FIND MIN MAX ARRAY, FILTER OUT STRING -------------------------------------------- //

//? Write a function, to find max in an array? then find min in an array? and filter strings from the array? and again filter numbers, leave only strings?

const arrayAverage = function (myTemp) {
  // myTemp is an array
  let max = myTemp[0]; // declare max, min to be equal function array
  let min = myTemp[0];
  let myError = myTemp[0];
  for (i = 0; i < myTemp.length; i++) {
    if (typeof myTemp[i] == 'string') myError = myTemp[i]; // to find string typeof === 'string'
    if (myTemp[i] > max) max = myTemp[i];
    if (myTemp[i] < min) min = myTemp[i];
  }
  console.log(
    `This is the max: ${max} and this is the min ${min}, i found a some letters: ${myError}`
  );
};
console.log(arrayAverage([1, 'hi', 2, 3, 4]));

//! ----------- TO MERGE 2 ARRAYS? ------------------------ //

//? MERGE ARRAY: use array1.concat(array2)

const array1 = [1, 2];
const array2 = [3, 4];
console.log(array1.concat(array2));

//! ------------------------- Prompt in Object function ------------------- //

const myMeasure = function () {
  const measurement = {
    type: 'value',
    height: 'dork',
    weight: Number(prompt('How much do you weight?')),
  };
  const myWeight = measurement.weight + 217;
  if (isNaN(myWeight)) {
    // isNaN = not a number
    return console.log('ERROR');
  } else {
    return myWeight;
  }
};

console.log(myMeasure());
