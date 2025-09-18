function lengthOfLongestSubstring(s) {
  let left = 0; // left side of window
  let maxLen = 0;
  let seen = new Set(); // store characters in current window

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      // remove from left until duplicate is gone
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// 🔍 Test
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0

