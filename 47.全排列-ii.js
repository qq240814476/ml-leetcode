/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start

const backCollection = function(arr, temp, map, nums){
  if(temp.length === nums.length){
    arr.push([...temp])
    return
  }
  for(let i = 0; i< nums.length; i++){
    if(map[i]) continue

    //! map[i-1] = false 说明 前一个一样的已经做完遍历了，剪掉重复
    if(i>0 && nums[i-1] ===nums[i] && !map[i-1]) continue
    map[i] = true
    temp.push(nums[i])
    backCollection(arr,temp,map,nums)
    temp.pop(nums[i])
    map[i] = false
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let arr = []
    backCollection(arr, [],{}, nums.sort())
    return arr
};
// @lc code=end

