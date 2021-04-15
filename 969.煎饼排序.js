/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * 变形的 冒泡排序
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
  const indexArr = [...arr, 0];
  const res = [];
  for(let i = 0; i< arr.length; i++){
    indexArr[arr[i]] = i;
  }
  indexArr.shift();
  // return indexArr;
  for(let i = arr.length -1; i> 0; i--){
    if(indexArr[i] === i){
      indexArr.pop();
      continue;
    }
    res.push(indexArr[i] + 1)
    res.push(indexArr.length)
    indexArr.pop();
  }
  return res;
};
// @lc code=end

