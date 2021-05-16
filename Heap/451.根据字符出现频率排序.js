/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 class Heap{
  data = [];
  compare = null;
  constructor(compare){
    this.compare = compare;
  }
  push(obj){
      this.data.push(obj);
      let idx = this.size() - 1;
      // divided by 除以
      while(idx && this.compare(this.data[idx], this.data[Math.floor((idx - 1) / 2)])){
          const temp = this.data[idx];
          this.data[idx] = this.data[Math.floor((idx - 1) / 2)];
          this.data[Math.floor((idx - 1) / 2)] = temp;
          idx = Math.floor((idx - 1) / 2);
      }
  }
  pop(){
      const top = this.data[0];
      this.data[0] = this.data[this.size() - 1];
      this.data.length -= 1;
      // if(this.data.length == 0) this.data = [];
      let pIdx = 0,
          lIdx = 2 * pIdx + 1,
          rIdx = 2 * pIdx + 2;
      while(lIdx <= this.size() -1){
          // 可能是极大也可能是极小
          let extremumIdx = pIdx;
          if(this.compare(this.data[lIdx], this.data[extremumIdx])) extremumIdx = lIdx;
          if(rIdx <= this.size() -1 && this.compare(this.data[rIdx], this.data[extremumIdx]))
              extremumIdx = rIdx;
          if(extremumIdx == pIdx) break;
          const temp = this.data[pIdx];
          this.data[pIdx] = this.data[extremumIdx];
          this.data[extremumIdx] = temp;
          pIdx = extremumIdx;
          lIdx = 2 * pIdx + 1;
          rIdx = 2 * pIdx + 2;
      }
      return top;
  }
  size(){
      return this.data.length;
  }
  top(){
      return this.data[0];
  }
}
// maxHeap
var frequencySort = function(s) {
    const maxHeap = new Heap((a,b)=>(a.times>b.times))
    const frequentMap = {}
    // use times & str record char info
    s.split('').forEach((char) => {
        if(frequentMap[char]){
            frequentMap[char].times++;
            frequentMap[char].str+=char;
        } else {
            frequentMap[char] = {};
            frequentMap[char].times = 1;
            frequentMap[char].str=char;
        }
    })
    Object.keys(frequentMap).forEach(key => {
        maxHeap.push(Object.assign({}, frequentMap[key]))
    })
    let str = '';
    while(maxHeap.size() > 0){
        str += maxHeap.pop().str;
    }
    return str;
};
// @lc code=end

