/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
// 一个 maxHeap 一个 minHeap , 当 size 相等时, 返回 各自top和 / 2 , 否则 返回 size 大的 top
// 如果 大于小顶堆的top, 压入 小顶堆
// 如果 小于大顶堆的top. 压入 大顶堆
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
  //  * initialize your data structure here.
  //  */
  // var MedianFinder = function() {
  //     // we need a minHeap AND A MAXHEAP
  //     this.minHeap = new Heap((a, b) => (a < b));
  //     this.maxHeap = new Heap((a, b) =>(a > b));
  // };
  
  // /** 
  //  * @param {number} num
  //  * @return {void}
  //  */
  // MedianFinder.prototype.addNum = function(num) {
  //     const minsize = this.minHeap.size();
  //     const maxsize = this.maxHeap.size();
  //     if(maxsize == minsize){
  //         if(maxsize == 0){
  //             this.maxHeap.push(num);
  //             return;
  //         }
  //         if(this.maxHeap.top() > num) this.maxHeap.push(num)
  //         else this.minHeap.push(num)
  //     } else {
  //         if(this.maxHeap.top() > num){
  //             this.maxHeap.push(num);
  //             // 如果大顶堆本身比小顶堆多了, 那么我们还往大顶堆压入的话, 肯定要把最大值弹出来放入小顶堆的, 这样两个堆数量才平衡
  //             if(maxsize > minsize)
  //                 this.minHeap.push(this.maxHeap.pop());
  //         } else {
  //             this.minHeap.push(num);
  //             if(minsize > maxsize)
  //                 this.maxHeap.push(this.minHeap.pop());
  //         }
  //     }
  // };
  
  // /**
  //  * @return {number}
  //  */
  // MedianFinder.prototype.findMedian = function() {
  //     const minsize = this.minHeap.size();
  //     const maxsize = this.maxHeap.size();
  //     if(minsize == maxsize){
  //         if(!minsize) return null;
  //         return (this.minHeap.top() + this.maxHeap.top()) / 2;
  //     } else if(minsize > maxsize){
  //         return this.minHeap.top();
  //     }
  //     return this.maxHeap.top();
  // };
  // /**
  //  * initialize your data structure here.
  //  */
  // var MedianFinder = function() {
  //     this.maxHeap = new Heap((a, b) => (a > b));
  //     this.minHeap = new Heap((a, b) => (a < b));
  // };
  
  // /** 
  //  * @param {number} num
  //  * @return {void}
  //  */
  // MedianFinder.prototype.addNum = function(num) {
  //     const maxSize = this.maxHeap.size();
  //     const minSize = this.minHeap.size();
      
  //     // when maxSize equals zero or maxHeap.top() greater than num, we should push num in maxHeap
  //     if(maxSize == 0 || this.maxHeap.top() > num){
  //         this.maxHeap.push(num);
  //         // when maxSize greater than minSize, minHeap should push the val which maxHeap.pop() return, and then it'll be balance
  //         if(maxSize > minSize){
  //             this.minHeap.push(this.maxHeap.pop())
  //         }    
  //     } else {
  //         this.minHeap.push(num);
  //         if(minSize > maxSize)
  //             this.maxHeap.push(this.minHeap.pop())
  //     }
      
  // };
  
  // /**
  //  * @return {number}
  //  */
  // MedianFinder.prototype.findMedian = function() {
  //     const maxSize = this.maxHeap.size();
  //     const minSize = this.minHeap.size();
  //     if(maxSize == minSize) return (this.maxHeap.top() + this.minHeap.top()) / 2;
  //     if(maxSize > minSize) return this.maxHeap.top();
  //     return this.minHeap.top();
  // };
  
  /**
   * initialize your data structure here.
   */
  var MedianFinder = function() {
      this.maxHeap = new Heap((a, b) => (a > b));
      this.minHeap = new Heap((a, b) => (a < b));
  };
  
  /** 
   * @param {number} num
   * @return {void}
   */
  MedianFinder.prototype.addNum = function(num) {
      const maxSize = this.maxHeap.size();
      const minSize = this.minHeap.size();
      
      if(maxSize == 0 || this.maxHeap.top() > num){
          this.maxHeap.push(num);
          if(maxSize > minSize)
              this.minHeap.push(this.maxHeap.pop())
      } else {
          this.minHeap.push(num);
          if(minSize > maxSize)
              this.maxHeap.push(this.minHeap.pop())
      }
  };
  
  /**
   * @return {number}
   */
  MedianFinder.prototype.findMedian = function() {
      const maxSize = this.maxHeap.size();
      const minSize = this.minHeap.size();
      
      if(maxSize == minSize) return (this.maxHeap.top() + this.minHeap.top()) / 2;
      else if (maxSize > minSize) return this.maxHeap.top();
      return this.minHeap.top();
  };
  
  /** 
   * Your MedianFinder object will be instantiated and called as such:
   * var obj = new MedianFinder()
   * obj.addNum(num)
   * var param_2 = obj.findMedian()
   */
// @lc code=end

