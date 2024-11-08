const fibs = (num) => {
  let res = [];
  let firstNum = 0;
  let secondNum = 1;

  for (let i = 0; i < num; i++) {
    res.push(firstNum);
    [firstNum, secondNum] = [secondNum, firstNum + secondNum];
  }
  return res;
};

console.log(fibs(0)); // []
console.log(fibs(1)); // [0]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

const fibsRec = (num) => {
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let fibArray = fibsRec(num - 1);

  // Calculate the next Fibonacci number
  let nextFib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];

  // Add the new number to the array
  fibArray.push(nextFib);

  return fibArray;
};

console.log(fibsRec(0)); // []
console.log(fibsRec(1)); // [0]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

module.exports = { fibsRec, fibs}