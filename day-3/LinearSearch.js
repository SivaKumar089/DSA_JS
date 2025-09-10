
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; 
    }
  }
  return 0; 
}


let numbers = [10, 20, 30, 40, 50];
var ans = linearSearch(numbers, 60);

if (ans) {
  console.log("avaliable in array");
} else {
  console.log("not avaliable in array");
}
