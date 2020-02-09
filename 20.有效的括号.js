/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
// 创建栈存放左括号
// 利用字典存放右括号
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const map = {
      '}': '{',
      ']': '[',
      ')': '('
    }
    for(let i = 0; i < s.length; i++){
      if(!map[s.charAt(i)]){
        stack.push(s.charAt(i))
      }else{
        const k = stack.pop()
        if(map[s.charAt(i)] !== k) return false
      }
    }
    if(stack.length === 0) return true
    return false
};
// @lc code=end

