function hasPairWithSumHash(arr, target) {
  let seen = new Set();
  for (let num of arr) {
    if (seen.has(target - num)) {
      return true; // found a pair
    }
    seen.add(num);
  }
  return false;
}

console.log(hasPairWithSumHash([4, 2, 6, 1, 3], 6)); // true (2+4)
