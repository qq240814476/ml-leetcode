/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // 桶排序，一个萝卜一个坑
    for(let i = 0;i<nums.length;i++){
      while(nums[i] !== i + 1){
        if(nums[nums[i] - 1] === nums[i]) return nums[i]
        else swap(nums, i, nums[i] - 1)
      }
    }
};
const swap = function(nums, a,b){
  let t
  t = nums[a]
  nums[a] = nums[b]
  nums[b] = t
}
// @lc code=end

