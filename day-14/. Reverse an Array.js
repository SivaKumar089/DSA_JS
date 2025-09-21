function reverseArray(arr) {
  // Base case: if array length is 0 or 1, return it
  if (arr.length <= 1) {
    return arr;
  }
  // Recursive case: last element + reverse of remaining
  return [arr[arr.length - 1]].concat(
    reverseArray(arr.slice(0, arr.length - 1))
  );
}

console.log(reverseArray([1, 2, 3, 4, 5]));
// [5, 4, 3, 2, 1]

console.log(reverseArray(["a", "b", "c", "d"]));
// ["d", "c", "b", "a"]
