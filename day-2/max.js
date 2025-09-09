function findMax(arr) {
  let maxVal = arr[0];   // O(1)
  for (let i = 0; i < arr.length; i++) {  // O(n)
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  return maxVal;
}

// Example:
console.log(findMax([3, 7, 2, 9, 5]));  // 9
