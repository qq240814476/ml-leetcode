/*
 * @lc app=leetcode.cn id=1319 lang=javascript
 *
 * [1319] 连通网络的操作次数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  if(connections.length < n - 1) return -1;
  initUnionSet(n);
  for(const c of connections){
    merge(c[0], c[1]);
  }
  let ans = 0;
  for(let i =0; i< n; i++){
    if(fa[i] == i) ans++;
  }
  return ans-1;
};
let fa;
function initUnionSet(n){
  fa = new Array(n+1);
  for(let i = 0; i< n; i++){
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

