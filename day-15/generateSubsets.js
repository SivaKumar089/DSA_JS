function generateSubsets(nums) {
  let result = [];

  function backtrack(index, current) {
    
    if (index === nums.length) {
      result.push([...current]); 
      return;
    }

    
    backtrack(index + 1, current);

  
    current.push(nums[index]);
    backtrack(index + 1, current);

  
    current.pop();
  }

  backtrack(0, []);
  return result;
}

console.log(generateSubsets([1, 2, 3]));
