function findMin(arr) {
  let minVal = arr[0]; // O(1)
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }
  return minVal;
}

// Example:
console.log(findMin([3, 7, 2, 9, 5])); // 2
