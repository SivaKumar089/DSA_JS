function generateSubsets(nums) {
  let result = [];

  function backtrack(index, current) {
    // Base case: reached end of array
    if (index === nums.length) {
      result.push([...current]); // push a copy
      return;
    }

    // Choice 1: Exclude current element
    backtrack(index + 1, current);

    // Choice 2: Include current element
    current.push(nums[index]);
    backtrack(index + 1, current);

    // Backtrack step (remove last element to explore other path)
    current.pop();
  }

  backtrack(0, []);
  return result;
}

// Test
console.log(generateSubsets([1, 2, 3]));
