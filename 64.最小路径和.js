/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if(grid.length === 0 || grid[0].length===0) return 0
  let m = grid[0].length
  let n = grid.length
  for(let i = 0;i<n;i++){
      for(let j =0;j<m;j++){
          if(i===0&&j===0) continue
          if(i-1<0){
              grid[i][j] = grid[i][j-1] + grid[i][j]
          }else if(j-1<0){
              grid[i][j] = grid[i-1][j] + grid[i][j]
          }else{
              grid[i][j] = grid[i][j] + Math.min(grid[i-1][j], grid[i][j-1])
          }
      }
  }
  return grid[n-1][m-1]
};
// @lc code=end

