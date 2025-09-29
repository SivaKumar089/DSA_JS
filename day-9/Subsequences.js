function subsequences(str) {
  let result = [];

  function helper(i, curr) {
    if (i === str.length) {
      result.push(curr);
      return;
    }
 
    helper(i + 1, curr + str[i]);
    
    helper(i + 1, curr);
  }

  helper(0, "");
  return result;
}

console.log(subsequences("abc"));

