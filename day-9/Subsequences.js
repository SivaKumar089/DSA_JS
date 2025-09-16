function subsequences(str) {
  let result = [];

  function helper(i, curr) {
    if (i === str.length) {
      result.push(curr);
      return;
    }
    // include char
    helper(i + 1, curr + str[i]);
    // exclude char
    helper(i + 1, curr);
  }

  helper(0, "");
  return result;
}

console.log(subsequences("abc"));
// ["abc", "ab", "ac", "a", "bc", "b", "c", ""]
