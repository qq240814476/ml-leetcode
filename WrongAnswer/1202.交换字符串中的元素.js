/*
 * @lc app=leetcode.cn id=1202 lang=javascript
 *
 * [1202] 交换字符串中的元素
 *
 * https://leetcode-cn.com/problems/smallest-string-with-swaps/description/
 *
 * algorithms
 * Medium (50.11%)
 * Likes:    226
 * Dislikes: 0
 * Total Accepted:    25.4K
 * Total Submissions: 50.6K
 * Testcase Example:  '"dcab"\n[[0,3],[1,2]]'
 *
 * 给你一个字符串 s，以及该字符串中的一些「索引对」数组 pairs，其中 pairs[i] = [a, b] 表示字符串中的两个索引（编号从 0
 * 开始）。
 * 
 * 你可以 任意多次交换 在 pairs 中任意一对索引处的字符。
 * 
 * 返回在经过若干次交换后，s 可以变成的按字典序最小的字符串。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入：s = "dcab", pairs = [[0,3],[1,2]]
 * 输出："bacd"
 * 解释： 
 * 交换 s[0] 和 s[3], s = "bcad"
 * 交换 s[1] 和 s[2], s = "bacd"
 * 
 * 
 * 示例 2：
 * 
 * 输入：s = "dcab", pairs = [[0,3],[1,2],[0,2]]
 * 输出："abcd"
 * 解释：
 * 交换 s[0] 和 s[3], s = "bcad"
 * 交换 s[0] 和 s[2], s = "acbd"
 * 交换 s[1] 和 s[2], s = "abcd"
 * 
 * 示例 3：
 * 
 * 输入：s = "cba", pairs = [[0,1],[1,2]]
 * 输出："abc"
 * 解释：
 * 交换 s[0] 和 s[1], s = "bca"
 * 交换 s[1] 和 s[2], s = "bac"
 * 交换 s[0] 和 s[1], s = "abc"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^5
 * 0 <= pairs.length <= 10^5
 * 0 <= pairs[i][0], pairs[i][1] < s.length
 * s 中只含有小写英文字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
 var smallestStringWithSwaps = function(s, pairs) {
  // key 是 sub, value 是堆
  const hash= {}
  // 根据s长度初始化 并查集
  initUnionSet(s.length - 1);
  for(const p of pairs){
      merge(p[0], p[1]);
  }
  for(let i = 0 ;i<s.length;i++){
      if(!hash[get(i)]){
          // 初始化堆
          hash[get(i)] = new Heap((a,b) => (a < b))
      }
      hash[get(i)].push(s.charAt(i))
  }
  let ans = '';
  for(let i = 0; i< s.length; i++){
      ans += hash[get(i)].pop();
  }
  return ans;
};
// unionSet
let fa;
function initUnionSet(n){
  fa = new Array(n+1)
  for(let i = 0;i<=n;i++){
      fa[i] = i;
  }
}
function get(a){
  return fa[a] = (fa[a] == a ? a : get(fa[a]))
}
function merge(a, b){
  const pa = get(a), pb = get(b);
  if(pa == pb) return;
  fa[get(a)] = get(b)
}
// minHeap
class Heap {
  data = null;
  cmp = null;
  constructor(cmp){
      this.data = [];
      this.cmp = cmp;
  }
  push(num){
      this.data.push(num);
      let idx= this.data.length -1;
      let pIdx = Math.floor(Math.abs(idx - 1) / 2)
      while(idx>=0 && this.cmp(this.data[idx], this.data[pIdx])){
          const temp = this.data[idx]
          this.data[idx] = this.data[pIdx]
          this.data[pIdx] = temp;
          idx = pIdx;
          pIdx = Math.floor((idx - 1) / 2)
      }
  }
  pop(){
      const top = this.data[0];
      this.data[0] = this.data[this.data.length - 1];
      this.data.length = this.data.length -1;
      let idx = 0;
      let lIdx = 2 * idx + 1;
      let rIdx = 2 * idx + 2;
      while(lIdx <= this.data.length - 1){
          let mIdx = idx;
          if(this.cmp(this.data[lIdx], this.data[mIdx])) mIdx= lIdx;
          if(rIdx <= this.data.length - 1 && this.cmp(this.data[rIdx], this.data[mIdx]))
              mIdx = rIdx;
          if(mIdx == idx) break;
          const temp = this.data[idx]
          this.data[idx] = this.data[mIdx]
          this.data[mIdx] = temp;
          idx = mIdx;
          lIdx = 2 * idx + 1;
          rIdx = 2 * idx + 2;
      }
      return top;
  }
}

// @lc code=end

