/*
 * @lc app=leetcode.cn id=1801 lang=javascript
 *
 * [1801] 积压订单中的订单总数
 */

// @lc code=start
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
// buy 大顶堆, sell 小顶堆, 就是麻烦..
/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function(orders) {
    const buy = new Heap((a,b) => (a[0] > b[0]));
    const sell = new Heap((a,b) => (a[0] < b[0]));
    
    for(const order of orders){
        while(order[1] > 0){
            if(order[2] == 0){
                const sellTop = sell.top();
                if(sell.size() > 0 && order[0] >= sellTop[0]){
                    if(sellTop[1] <= order[1]){
                        order[1] -= sellTop[1];
                        sell.pop();
                    } else {
                        sellTop[1] -= order[1];
                        order[1] = 0;
                    }
                } else {
                    buy.push(order);
                    break;
                }
            } else {
                const buyTop = buy.top();
                if(buy.size() > 0 && order[0] <= buyTop[0]){
                    if(buyTop[1] <= order[1]){
                        order[1] -= buyTop[1];
                        buy.pop();
                    } else {
                        buyTop[1] -= order[1];
                        order[1] = 0;
                    }
                } else {
                    sell.push(order);
                    break;
                }
            }
        }
    }
    let ans = 0;
    const mod = 1000000007;
    while(sell.size() > 0){
        ans = ans + sell.pop()[1];
    }
    while(buy.size() > 0){
        ans = ans + buy.pop()[1];
    }
    return ans % mod;
};
// @lc code=end

