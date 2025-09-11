function BinarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return i;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return 0;
}

var array = [1, 2, 3, 4, 5];
var target = 5;
var ans = BinarySearch(array, target);

if (ans) {
  console.log(target, "is avilable in array");
} else {
  console.log(target, "is not available in array");
}
