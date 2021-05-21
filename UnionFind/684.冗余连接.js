/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) {
  initUnionSet(edges.length);
  // 一直合并两个元素, 如果两个元素本身就属于一个集合那么就是多余的,返回
  // 同一个集合的意义就是他们有同一个root节点
  for(const edge of edges){
      if(get(edge[0]) == get(edge[1])) return edge;
      merge(edge[0], edge[1]);
  }
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

