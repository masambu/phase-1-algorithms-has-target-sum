
function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}
hasTargetSum([3, 8, 12, 4, 11, 7], 10);
/* 
  Write the Big O time complexity of your function here

  The time complexity of the simplified hasTargetSum function is O(n^2), where "n" is the number of elements in the input array. This is because the function uses nested for loops to compare all pairs of elements in the array. As the size of the input array increases, the number of comparisons increases quadratically, resulting in an O(n^2) time complexity.
*/

/* 
  Add your pseudocode here

  We iterate through the array with the outer loop (indexed by i).
For each element in the outer loop, we iterate through the remaining elements with the inner loop (indexed by j).
We check if the sum of the elements at indices i and j is equal to the target.
If we find such a pair, we return true.
If no pair is found after both loops, we return false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;