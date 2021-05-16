/*
 * @lc app=leetcode.cn id=1705 lang=javascript
 *
 * [1705] 吃苹果的最大数目
 */

// @lc code=start
/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
 var eatenApples = function(apples, days) {
  const minHeap = new Heap((a,b) => (a.days<b.days));
  let eatApplesCount = 0;
  for(let i = 0; i< apples.length; i++){
      const apple = apples[i];
      // 坏的扔掉
      while(minHeap.top() && minHeap.top().days < i){
          minHeap.pop();
      }
      // 优先吃 保质期短的
      if(minHeap.size() && (minHeap.top().days < days[i] + i || apples[i] == 0)){
          if(--minHeap.top().val == 0) minHeap.pop();
          minHeap.push({val: apples[i], days: i - 1 + days[i]})
      } else if(apples[i] > 0){
          // 吃今天长得
          if(apples[i] > 1) minHeap.push({val: apples[i] - 1, days: i - 1 + days[i]})
      } else continue;
      eatApplesCount++;
  }
  let i = apples.length;
  // console.log(i, eatApplesCount, minHeap.data)
  while(minHeap.size()){
      // 坏的扔掉
      while(minHeap.top() && minHeap.top().days < i){
          minHeap.pop();
      }
      if(minHeap.size()){
          if(--minHeap.top().val == 0) minHeap.pop();
          i++;
          eatApplesCount++;
      } 
  }
  return eatApplesCount;
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
// @lc code=end

