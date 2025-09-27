function moveZeroes(nums) {
  let insertPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
  return nums;
}

// Example
console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
