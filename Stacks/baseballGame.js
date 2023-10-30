// 682. Baseball Game

// Solution 1: Iterates through operations and uses a switch statement to add to an array of scores.  Implements reduce to deliver the return value of the summary of all scores.
var calPoints1 = function (operations) {
  let scores = [];

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "+":
        scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
        break;

      case "D":
        scores.push(scores[scores.length - 1] * 2);
        break;

      case "C":
        scores.pop();
        break;

      default:
        scores.push(Number(operations[i]));
        break;
    }
  }

  return scores.reduce((total, current) => total + current, 0);
};

console.log("Expected result: ", 30);
console.log("Output: ", calPoints1(["5", "2", "C", "D", "+"]));
// Time complexity:  O(n) to loop through n elements of the operations array, then to apply reduce to the scores array to calculate the sum
// Space complexity:  O(1)amortized to create a new stack implemented as a dynamic array

//Solution 2: Implements two for loops to first create the record array then to calculate the total of the scores for the return value.
var calPoints2 = function (operations) {
  let record = [];

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "+":
        if (record[record.length - 1] && record[record.length - 2]) {
          record.push(record[record.length - 1] + record[record.length - 2]);
        }
        break;

      case "D":
        if (record[record.length - 1]) {
          record.push(record[record.length - 1] * 2);
        }
        break;

      case "C":
        if (record[record.length - 1]) {
          record.pop();
        }
        break;

      default:
        record.push(parseInt(operations[i]));
        break;
    }
  }

  let result = 0;
  for (let i = 0; i < record.length; i++) {
    result += record[i];
  }

  return result;
};
console.log("Expected result: ", 30);
console.log("Output: ", calPoints2(["5", "2", "C", "D", "+"]));
// Time complexity if O(n + m) to loop through operations array of n values then the record array of m values.
// Space complexity of O(1)amortized to create the record array.