/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(nums.length === 0) return 0
    let dp = [nums[0]]
    let max = dp[0]
    for(let i = 1; i< nums.length; i++){
        dp[i] = Math.max(nums[i], dp[i-1] + nums[i])
        if(dp[i] > max) max = dp[i]
    }
  return max
};
// @lc code=end

