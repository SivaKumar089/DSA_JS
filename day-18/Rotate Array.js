function rotate(nums, k) {
  k = k % nums.length;
  nums.reverse();
  nums.splice(0, k, ...nums.slice(0, k).reverse());
  nums.splice(k, nums.length - k, ...nums.slice(k).reverse());
  return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
