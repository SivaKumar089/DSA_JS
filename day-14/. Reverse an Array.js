function reverseArray(arr) {

  if (arr.length <= 1) {
    return arr;
  }
 
  return [arr[arr.length - 1]].concat(
    reverseArray(arr.slice(0, arr.length - 1))
  );
}

console.log(reverseArray([1, 2, 3, 4, 5]));


console.log(reverseArray(["a", "b", "c", "d"]));

