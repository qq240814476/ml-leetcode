/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 class MinHeap{
  data = [];
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
      let pIdx = 0,
          lIdx = 2 * pIdx + 1,
          rIdx = 2 * pIdx + 2;
      while(lIdx <= this.size() -1){
          let minIdx = pIdx;
          if(this.compare(this.data[lIdx], this.data[minIdx])) minIdx = lIdx;
          if(rIdx <= this.size() -1 && this.compare(this.data[rIdx], this.data[minIdx]))
              minIdx = rIdx;
          if(minIdx == pIdx) break;
          const temp = this.data[pIdx];
          this.data[pIdx] = this.data[minIdx];
          this.data[minIdx] = temp;
          pIdx = minIdx;
          lIdx = 2 * pIdx + 1,
          rIdx = 2 * pIdx + 2;
      }
      return top;
  }
  compare(a, b){
      if(a.val !== b.val) return a.val < b.val;
      // console.log(a.key, b.key, a.key < b.key)
      return a.key > b.key;
  }
  size(){
      return this.data.length;
  }
  top(){
      return this.size() === 0 ? Number.MIN_SAFE_INTEGER : this.data[0];
  }
}
/**
* @param {string[]} words
* @param {number} k
* @return {string[]}
*/
var topKFrequent = function(words, k) {
  const valMap = new Map();
  const minHeap = new MinHeap();
  for(const word of words){
      if(!valMap.has(word)) valMap.set(word, 1);
      else
          valMap.set(word, valMap.get(word) + 1);
  }
  valMap.forEach((val, key) => {
      minHeap.push({key, val});
      if(minHeap.size() > k) minHeap.pop();
  })
  const res = []
  while(minHeap.size() > 0){
      res.unshift(minHeap.pop().key);
  }
  return res;
};
// @lc code=end

