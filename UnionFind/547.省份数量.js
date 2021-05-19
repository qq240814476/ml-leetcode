/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
let fa;
class UnionSet {
    constructor(n){
        fa = new Array(n+1);
        for(let i =0;i<n+1;i++){
            fa[i] = i;
        }
    }
}
function get(a){
    return fa[a] == a ? a : get(fa[a]);
}
function merge(a, b){
    fa[get(b)] = get(a);
}
/**
* @param {number[][]} isConnected
* @return {number}
*/
var findCircleNum = function(isConnected) {
  const unionSet = new UnionSet(isConnected[0].length);
  for(let i = 0;i<isConnected.length; i++){
      for(let j = 0; j< isConnected[0].length; j++){
          if(isConnected[i][j]) unionSet.merge(i+1 ,j+1);
      }
  }
  let cnt = 0;
  for(let j = 1; j< isConnected[0].length + 1; j++){
      if(unionSet.parent[j] == j) cnt++;
  }
  return cnt;
};
// @lc code=end

