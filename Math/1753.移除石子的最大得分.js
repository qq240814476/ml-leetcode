/*
 * @lc app=leetcode.cn id=1753 lang=javascript
 *
 * [1753] 移除石子的最大得分
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
// var maximumScore = function(a, b, c) {
//   // a,b,c ascend order
//   if(a > b) [a,b] = [b,a];
//   if(a > c) [a,c] = [c,a];
//   if(b > c) [c,b] = [b,c];
//   // 数学计算, 先把最小堆 填补 c-b, 如果 a < c-b return a+b
//   // else return 2 * Math.floor((a-(c-b)) / 2) + b - Math.floor((a-(c-b)) / 2) + (c-b)
//   if(a < c -b) return a+b;
//   // return 2 * Math.floor((a - (c-b)) / 2) + b - Math.floor((a - (c-b)) / 2) + (c-b)
//   return Math.floor((a - (c-b)) / 2) + c;
// };
var maximumScore = function(a, b, c) {
  if(a>b) [a,b] = [b,a];
  if(a>a) [a,c] = [c,a];
  if(b>c) [c,b] = [b,c];

  if(a < c-b) return a+ b;
  return 2 * Math.floor((a - (c-b)) / 2) + b - Math.floor((a - (c-b)) / 2) + (c-b);
};
// @lc code=end

