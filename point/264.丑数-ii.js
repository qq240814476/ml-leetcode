/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  // 三指针，一直取最小
  let res = p2 = p3 = p5 = 1
  for(let i =0;i<n;i++){
    if(p2 * 2 <= p3 * 3 && p2 * 2 <= p5 * 5){
      res = p2 * 2
      p2 = res
    }else if(p3 * 3 <= p2 * 2 && p3 * 3 <= p5 * 5){
      res = p3 * 3
      p3 = res
    }else if(p5 * 5 <= p3 * 3 && p5 * 5 <= p2 * 2){
      res = p5 * 5
      p5 = res
    }
  }
  return res
}
// var nthUglyNumber = function(n) {
//   if(n == 1) return 1
//   let res = 1
//   let arr = [1]
//   while(n-1 !== 0){
//     let next = res * 2
//     for(let i = arr.length - 1; i>=0;i--){
//       if(arr[i] * 2 > res && arr[i]*2 < next){
//         next = arr[i] * 2
//       }else if(arr[i] * 3 > res && arr[i] * 3 < next){
//         next = arr[i] * 3
//       }else if(arr[i] * 5 > res && arr[i] * 5 < next){
//         next = arr[i] * 5
//       }else if(arr[i] * 5 <= res){
//         break;
//       }
//     }
//     res = next
//     arr.push(next)
//     n--
//   }
//   return res
// };
// 堆做法, 小顶堆
// 取前n个 弹出 n次 , 
// 如果弹出值 val 整除5 那么 push 进 val * 5
// 否则 如果整除3 那么  push val* 3 push val * 5
// 否则 push val * 2 val * 3 val * 5
// 剪枝的做法就是 先从大的开始比较, 如果能被5整除, 那就直接乘以 5 push 进去, 因为 2 和 3 的不用 5 来管
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
// need top n number so we need minHeap
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const minHeap = new Heap((a, b) => (a < b));
    for(let i = 0; i < n; i++){
        if(i == 0) minHeap.push(1);
        else{
            const top = minHeap.pop();
            if(top % 5 == 0){
                minHeap.push(top * 5);
            } else if(top % 3 == 0){
                minHeap.push(top * 3);
                minHeap.push(top * 5);
            } else {
                minHeap.push(top * 2);
                minHeap.push(top * 3);
                minHeap.push(top * 5);
            }
        }
    }
    // console.log(minHeap.data)
    return minHeap.top();
};
// @lc code=end

