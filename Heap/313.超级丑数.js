/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
// /**
//  * @param {number} n
//  * @param {number[]} primes
//  * @return {number}
//  */
// var nthSuperUglyNumber = function(n, primes) {
//     let res = 1;
//     const data = [1];
//     const pos = new Array(primes.length).fill(0);
//     while(data.length < n){
//         res = primes[0] * data[pos[0]];
//         for(let i = 1; i< primes.length; i++){
//             res = Math.min(res, primes[i] * data[pos[i]]);
//         }
//         for(let i = 0; i< primes.length; i++){
//             if(primes[i] * data[pos[i]] == res) pos[i]++;
//         }
//         data.push(res);
//     }
//     return res;
// };
// 多指针解法, 遍历 primes, 求 极小值
// var nthSuperUglyNumber = function(n, primes) {
//     let res = 1;
//     const data = [1];
//     const pos = new Array(primes.length).fill(0);
//     while(data.length < n){
//         res = primes[0] * data[pos[0]];
//         for(let i = 1; i< primes.length; i++){
//             res = Math.min(res, primes[i] * data[pos[i]]);
//         }
//         for(let i =0; i< primes.length;i++){
//             if(primes[i] * data[pos[i]] == res) pos[i]++;
//         }
//         data.push(res);
//     }
//     return res;
// };
// var nthSuperUglyNumber = function(n, primes) {
//   // pos arr
//   // data
//   // res
//   let res = 1;
//   const data = [1];
//   const pos = new Array(primes.length).fill(0);
//   while(data.length < n){
//       // 取最小值
//       res = primes[0] * data[pos[0]];
//       for(let i = 1; i< primes.length; i++){
//           res = Math.min(res, primes[i] * data[pos[i]]);
//       }
//       for(let i = 0; i< primes.length; i++){
//           if(res == primes[i] * data[pos[i]]) pos[i]++;
//       }
//       data.push(res);
//   }
//   return res;
// };
// 堆
// 小顶堆解法
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
// /**
//  * @param {number} n
//  * @param {number[]} primes
//  * @return {number}
//  */
var nthSuperUglyNumber = function(n, primes) {
    const minHeap = new Heap((a,b) => (a < b));
    minHeap.push(1);
    for(let i = 1; i < n; i++){
        const top = minHeap.pop();
        let find = false;
        for(let i = primes.length - 1; i > 0; i--){
            if(top % primes[i] == 0){
                for(let j = i; j < primes.length; j++){
                    minHeap.push(top * primes[j]);
                }
                find = true;
                break;
            }
        }
        // 如果没找到质数, 那么全部push一遍
        if(!find){
            for(let i = 0; i < primes.length; i++){
                minHeap.push(top * primes[i]);
            }
        }
    }
    return minHeap.top();
};
// @lc code=end

