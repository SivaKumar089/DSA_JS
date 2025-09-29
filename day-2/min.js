function findMin(arr) {
  let minVal = arr[0]; 
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }
  return minVal;
}


console.log(findMin([3, 7, 2, 9, 5])); 
