/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if(num == 1 || num ==2 || num == 3 || num == 4 || num == 5) return true
  if(num<5) return false
  if(!Number.isInteger(num / 2) && !Number.isInteger(num / 3) && !Number.isInteger(num / 5)) return false
  return isUgly(num / 2) || isUgly(num / 3) || isUgly(num/5)
};
// @lc code=end

