function hasPairWithSumUnsorted(arr, target) {
  arr.sort((a, b) => a - b); // sort ascending
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return true;
    else if (sum < target) left++;
    else right--;
  }
  return false;
}

console.log(hasPairWithSumUnsorted([4, 2, 6, 1, 3], 6)); // true (2+4)
