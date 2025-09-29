function permute(str) {
  if (str.length === 1) return [str];

  let result = [];

  for (let i = 0; i < str.length; i++) {
    
    let char = str[i];

   
    let remaining = str.slice(0, i) + str.slice(i + 1);

 
    let perms = permute(remaining);

  
    for (let perm of perms) {
      result.push(char + perm);
    }
  }

  return result;
}

const str = "ABC";
const permutations = permute(str);
console.log(permutations);
