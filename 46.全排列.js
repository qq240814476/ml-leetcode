/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start

const backCollection = function(arr, temp, nums){
  if(temp.length === nums.length){
    arr.push([...temp])
    return
  }
  for(let i =0; i< nums.length; i++){
    if(temp.includes(nums[i])) continue
    temp.push(nums[i])
    backCollection(arr, temp, nums)
    temp.pop(nums[i])
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let arr = []
    backCollection(arr, [], nums)
    return arr
};
// @lc code=end

