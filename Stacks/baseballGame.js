// 682. Baseball Game

var calPoints = function (operations) {
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
console.log("Output: ", calPoints(["5", "2", "C", "D", "+"]));
// Time complexity:  O(n) to loop through n elements of the operations array, then to apply reduce to the scores array to calculate the sum
// Space complexity:  O(1)amortized to create a new stack implemented as a dynamic array
