/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 从左下或者右上开始找，大了就往下，小就往左
var searchMatrix = function(matrix, target) {
  if(matrix.length === 0) return false
  let hl = matrix[0].length
  let vl = matrix.length
  let v = 1

  // 碰壁停止
  while(hl >= 0 && v <= vl){
    if(matrix[v-1][hl] === target){
      return true
    }
    // 下移或者左移
    matrix[v-1][hl] < target ? v++ : hl--
  }

  return false
};
// @lc code=end

