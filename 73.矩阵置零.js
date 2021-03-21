/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * 1. 定义向右、向下为方向
 * 2. 按方向遍历
 * 3. 遇到零
 *  3.1 判断 上方是否为零
 *    3.1.1 是零, 继续
 *    3.1.2 非零, 列置为零
 *  3.2 判断 左侧是否为零
 *    3.2.1 是零, 继续
 *    3.2.2 非零, 行置为0
 * 4. 遍历结束, 返回原数组引用
 * 
 * 额外空间为常数的解法
 * 
 * 用第一行第一列来记录零
 * 只需要开辟两个布尔值, 记录是否 原本第一行第一列存在0即可
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let firstRowHasZero = false,
      firstColHasZero = false;
  for(let i of matrix[0]){
    if(i === 0) firstRowHasZero = true;
  }
  for(let i =0; i <  matrix.length; i++){
    if(matrix[i][0] === 0) firstColHasZero = true;
  }
  for(let i = 1; i< matrix[0].length; i++){
    for(let j = 1; j< matrix.length; j++){
      if(matrix[j][i] === 0){
        matrix[j][0] = matrix[0][i] = 0;
      }
    }
  }
  for(let i = 1; i< matrix[0].length; i++){
    for(let j = 1; j< matrix.length; j++){
      if(matrix[j][0] === 0 || matrix[0][i]  === 0){
        matrix[j][i] =  0;
      }
    }
  }
  for(let i =0; i< matrix[0].length ; i++){
    if(firstRowHasZero){
      matrix[0][i] = 0
    }
  }
  for(let j =0; j< matrix.length ; j++){
    if(firstColHasZero){
      matrix[j][0] = 0
    }
  }


  return matrix;
};
// @lc code=end

