function permute(str) {
  if (str.length === 1) return [str]; // Base case

  let result = [];

  for (let i = 0; i < str.length; i++) {
    // Pick the character at index i
    let char = str[i];

    // Remaining string after removing char
    let remaining = str.slice(0, i) + str.slice(i + 1);

    // Recursive call
    let perms = permute(remaining);

    // Add current char to each permutation of remaining string
    for (let perm of perms) {
      result.push(char + perm);
    }
  }

  return result;
}

// Example usage
const str = "ABC";
const permutations = permute(str);
console.log(permutations);
