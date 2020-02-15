/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// 二分法
var mySqrt = function(x) {
  if(x === 0) return 0
  if(x < 4) return 1
  let l = 1
  let r = x >> 1
  while(l <= r){
    let mid = (l + r) >> 1
    if(mid * mid <= x && (mid+1) * (mid+1) > x){
      return mid
    }else if(mid * mid < x){
      l = mid + 1
    }else{
      r = mid
    }
  }
};
// @lc code=end

