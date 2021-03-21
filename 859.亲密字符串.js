/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var buddyStrings = function(a, b) {
  if(a.length !== b.length) return false;
  if(a === b) return hasRepeat(a);
  let diffChars = [];

  for(let i = 0; i< a.length; i++){
    const ac = a.charAt(i);
    const bc = b.charAt(i);
    if(ac !== bc){
      if(diffChars.length >= 4){
        return false;
      } else if(diffChars.length === 0){
        diffChars.push(ac, bc);
      } else if(diffChars.length === 2){
        if(diffChars[0] === bc && diffChars[1] === ac){
          diffChars.push(ac, bc);
        } else {
          return false;
        }
      }
    }
  }
  if(diffChars.length !== 4 && diffChars.length !== 0) return false;
  return true;
};

var hasRepeat = (a) => {
  const dic = {}
  for(let i = 0;i< a.length; i++){
    const char = a.charAt(i);
    if(dic[char] === 1) return true;
    dic[char] = 1;
  }
  return false;
}
// @lc code=end

