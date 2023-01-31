// Find Players with Zero or One Losses

// You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.
// Return a list answer of size 2 where:
// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.

// Approach:
// 1. Iterate through the nested array matches
// 2. Create a hash map and record the number of losses for each player
// 3. Iterature through the hash map and add the players who've lost zero or one match to the return array
// 4. Sort the answer array before returning

var findWinners = function (matches) {
  let ans = [[], []];
  let losses = new Map();

  for (let i = 0; i < matches.length; i++) {
    let current = matches[i];

    if (!losses.get(current[0])) {
      losses.set(current[0], 0);
    }

    losses.set(current[1], (losses.get(current[1]) || 0) + 1);
  }

  for (const [key, value] of losses) {
    if (value === 0) {
      ans[0].push(key);
    }
    if (value === 1) {
      ans[1].push(key);
    }
  }
  ans[0].sort((a, b) => a - b);
  ans[1].sort((a, b) => a - b);
  return ans;
};
// Time: O(N) to loop once through the array, then to iterate through the hash map and sort the answer array, technically O(4N)
// Space: O(N + M) to create the answer array and the hash map.  Note the sort method sorts the array in place.
console.log("Expected result: ", [
  [1, 2, 10],
  [4, 5, 7, 8],
]);
console.log(
  "Solution: ",
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
);
