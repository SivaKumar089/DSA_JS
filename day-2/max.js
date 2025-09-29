function findMax(arr) {
  let maxVal = arr[0];   
  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  return maxVal;
}


console.log(findMax([3, 7, 2, 9, 5]));
