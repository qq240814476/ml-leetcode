/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length === 0) return 0
  // 快慢指针
  let index = nums[0]
  // 结果长度
  let len = 1
  for(let i = 1; i< nums.length; i++){
    if(index === nums[i]) continue
    else {
      nums[len++] = nums[i]
      index = nums[i]
    }
  }
  return len
};
// @lc code=end

