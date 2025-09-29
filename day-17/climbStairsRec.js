function climbStairsRec(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return climbStairsRec(n - 1) + climbStairsRec(n - 2);
}

console.log(climbStairsRec(5));
