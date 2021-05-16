/*
 * @lc app=leetcode.cn id=767 lang=javascript
 *
 * [767] 重构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
 var reorganizeString = function(s) {
  const maxHeap = new Heap((a,b) => (a.frequency > b.frequency))
  const hash = {}
  s.split('').forEach(char => {
      if(hash[char]){
          hash[char]++
      } else {
          hash[char] = 1
      }
  })
  Object.keys(hash).forEach(char => {
      maxHeap.push({char, frequency: hash[char]})
  })
  let str = '';
  let top, secTop;
  while(maxHeap.size() >= 2) {
      top = maxHeap.pop();
      secTop = maxHeap.pop();
      str += top.char + secTop.char;
      if(--top.frequency != 0){
          maxHeap.push(top);
      }
      if(--secTop.frequency != 0){
          maxHeap.push(secTop);
      }
  }
  if(maxHeap.size() == 1){
      if(maxHeap.top().frequency > 1) return '';
      str += maxHeap.top().char;
  }
  return str;
};

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
          lIdx = 2 * pIdx + 1,
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
// @lc code=end

