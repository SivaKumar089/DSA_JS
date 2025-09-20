function factorial(n) {
  // base case
  if (n === 0 || n === 1) {
    return 1;
  }
  // recursive case
  return n * factorial(n - 1);
}

// test
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
