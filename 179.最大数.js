/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  if(nums.length === 0) return ''
  for(let i = 0; i<nums.length; i++){
    let right = nums.length -1
    while(i<right){
      let l = nums[i].toString()
      let r = nums[right].toString()
      if(Number.parseInt(l+r) < Number.parseInt(r+l)){
        let t = nums[i]
        nums[i] = nums[right]
        nums[right] = t
      }
      right--
    }
  }
  return nums.join('').charAt(0) === '0' ? '0' : nums.join('')
};
// @lc code=end

