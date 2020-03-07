/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 思考一个点，面积确定后，移动高的会对最大面积有影响么？
var maxArea = function(height) {
  if(height.length === 2) return Math.min(height[0],height[1])

  let l = 0
  let r = height.length -1
  let max = 0
  while(l < r){
    max = Math.max(max, (r-l) * Math.min(height[l],height[r]))
    if(height[l]<height[r]){
      l++
    }else{
      r--
    }
  }
  return max
};
// @lc code=end

