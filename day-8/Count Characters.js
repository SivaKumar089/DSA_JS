function countCharacters(str) {
  const map = new Map();

  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  return map;
}


const result = countCharacters("javascript");
for (let [char, count] of result) {
  console.log(`${char}: ${count}`);
}
