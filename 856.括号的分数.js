/*
 * @lc app=leetcode.cn id=856 lang=javascript
 *
 * [856] 括号的分数
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
  // 栈
  var stack = [0]
  let s = S.split('')
  for(let i in s){
    if(s[i] === '('){
      stack.push(0)
    }else{
      let v = stack.pop()
      stack[stack.length-1] += Math.max(2*v , 1)
    }
  }
  return stack[0]
};
// @lc code=end

