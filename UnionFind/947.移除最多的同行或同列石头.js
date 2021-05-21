/*
 * @lc app=leetcode.cn id=947 lang=javascript
 *
 * [947] 移除最多的同行或同列石头
 */

// @lc code=start
/**
 * @param {number[][]} stones
 * @return {number}
 */
 var removeStones = function(stones) {
  if(!stones.length) return 0;
  const xHash = {}, yHash = {};
  initUnionSet(stones.length);
  for(let i = 0; i< stones.length; i++){
      const s = stones[i];
      if(xHash[s[0]] !== undefined){
          merge(i, xHash[s[0]])
      }
      if(yHash[s[1]] !== undefined){
          merge(i, yHash[s[1]])
      }
      if(xHash[s[0]] == undefined) xHash[s[0]] = i;
      if(yHash[s[1]] == undefined) yHash[s[1]] = i;
  }
  let ans = 0;
  for(let i = 0; i< stones.length; i++){
      if(fa[i] == i) ans++;
  }
  return stones.length - ans;
};

let fa;
function initUnionSet(n){
  fa = new Array(n);
  for(let i = 0; i <= n; i++){
      fa[i] = i;
  }
}
function get(a){
  return fa[a] = (fa[a] == a ? a : get(fa[a]));
}
function merge(a,b){
  fa[get(a)] = get(b);
}
// @lc code=end

