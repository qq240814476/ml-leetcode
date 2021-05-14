/**
 * @param {number[]} stones
 * @return {number}
 */
// 入堆出堆过程
// class Heap{
//     data = null
//     constructor(){
//         this.data = [];
//     }
//     // 入优先队列, 插入最后, 然后向上调整, 比较父 和 新插入节点 谁最大, 然后调整, 直到根节点
//     push(num){
//         this.data.push(num);
//         // 从零开始的heap, parentIndex = (childIndex - 1) / 2
//         let childIndex = this.data.length - 1;
//         let parentIndex = Math.floor((childIndex - 1) / 2);
//         while(parentIndex >= 0 && this.data[childIndex] < this.data[parentIndex]){
//             const temp = this.data[childIndex];
//             this.data[childIndex] = this.data[parentIndex];
//             this.data[parentIndex] = temp;
//             childIndex = parentIndex;
//             parentIndex = Math.floor((childIndex - 1) / 2);
//         }
//         // console.log(this.data);
//     }
//     // 弹出操作, 弹出第一位元素, 用最后一位补上第一位, 然后向下调整
//     shift(){
//         const top = this.data[0];
//         this.data[0] = this.data[this.data.length - 1];
//         this.data.length = this.data.length - 1;
//         let parentIndex = 0;
//         let leftChildIndex = (2 * parentIndex) + 1;
//         let rightChildIndex = (2 * parentIndex) + 2;
//         while(leftChildIndex <= this.data.length - 1){
//             let changeIndex = parentIndex;
//             if(this.data[parentIndex] < this.data[leftChildIndex]){
//                 changeIndex = leftChildIndex;
//             }
//             if(rightChildIndex <= this.data.length - 1){
//                 if(this.data[changeIndex] < this.data[rightChildIndex]){
//                     changeIndex = rightChildIndex;
//                 }
//             }
//             if(changeIndex !== parentIndex){
//                 const temp = this.data[parentIndex];
//                 this.data[parentIndex] = this.data[changeIndex];
//                 this.data[changeIndex] = temp;
//                 parentIndex = changeIndex;
//                 leftChildIndex = (2 * parentIndex) + 1;
//                 rightChildIndex = (2 * parentIndex) + 2;
//             } else break;
//         }
//         //console.log(this.data)
//         return top;
//     }
// }
// class Heap{
//     data = [];
//     push(num){
//         this.data.push(num);
//         let cIndex = this.data.length - 1;
//         let pIndex = Math.floor((cIndex - 1) / 2);
//         while(cIndex >= 0 && this.data[cIndex] > this.data[pIndex]){
//             // 交换 cIndex 和 父节点位置
//             const temp = this.data[pIndex];
//             this.data[pIndex] = this.data[cIndex];
//             this.data[cIndex] = temp;
//             cIndex = pIndex;
//             pIndex = Math.floor((cIndex - 1) / 2);
//         }
//         // console.log(this.data)
//     }
//     shift(){
//         const top = this.data[0];
//         // 把尾部元素拿到头部来, 之后开始向下调整
//         this.data[0] = this.data[this.data.length - 1];
//         this.data.length -= 1;
//         let pIndex = 0;
//         let lIndex = 2 * pIndex + 1;
//         let rIndex = 2 * pIndex + 2;
//         while(lIndex <= this.data.length - 1){
//             let maxIndex = pIndex;
//             if(this.data[lIndex] > this.data[maxIndex]) maxIndex = lIndex;
//             if(rIndex <= this.data.length - 1 && this.data[rIndex] > this.data[maxIndex])
//                 maxIndex = rIndex;
//             if(maxIndex == pIndex) break;
//             const temp = this.data[pIndex];
//             this.data[pIndex] = this.data[maxIndex];
//             this.data[maxIndex] = temp;
//             pIndex = maxIndex;
//             lIndex = 2 * pIndex + 1;
//             rIndex = 2 * pIndex + 2;
//         }
//         // console.log(this.data)
//         return top;
//     }
// }
// 逻辑结构是堆, 存储结构是数组(优先队列)
class Heap{
  data = [];
  // 向上调整
  turnup(idx){
      let pIndex = Math.floor((idx - 1) / 2);
      // 等于 0 时 没有可以比较的父节点了, 如果小于说明在一个正确的位置上了
      while(idx > 0 && this.data[idx] > this.data[pIndex]){
          const temp = this.data[pIndex];
          this.data[pIndex] = this.data[idx];
          this.data[idx] = temp;
          idx = pIndex;
          pIndex = Math.floor((idx - 1) / 2)
      }
  }
  // 向下调整
  turnDown(pIndex){
      // 起始为0的完全二叉树, 父节点如果是i, 左子节点 2i+1, 右子节点 2i+2
      // 如果起时为 1, 父节点为 i, 左子节点 2i, 右子节点 2i+1
      let lIndex = 2 * pIndex + 1;
      let rIndex = 2 * pIndex + 2;
      while(lIndex <= this.data.length - 1){
          // store max node index
          let maxIndex = pIndex;
          if(this.data[lIndex] > this.data[maxIndex]) maxIndex = lIndex;
          if(rIndex <= this.data.length - 1 && this.data[rIndex] > this.data[maxIndex])
              maxIndex = rIndex;
          if(maxIndex == pIndex) break;
          const temp = this.data[pIndex];
          this.data[pIndex] = this.data[maxIndex];
          this.data[maxIndex] = temp;
          pIndex = maxIndex;
          lIndex = 2 * pIndex + 1;
          rIndex = 2 * pIndex + 2;
      }
  }
  push(num){
      this.data.push(num);
      this.turnup(this.data.length - 1)
  }
  shift(){
      const top = this.data[0];
      // 将最后一个元素, 放到首位, 数组长度 - 1
      // this.data.unshift(this.data.pop());
      this.data[0] = this.data[this.data.length - 1];
      this.data.length -= 1;
      this.turnDown(0);
      // console.log(this.data);
      return top;
  }
}
var lastStoneWeight = function(stones) {
  const stoneHeap = new Heap();
  stones.forEach(stone => stoneHeap.push(stone));
  while(stoneHeap.data.length > 1){
      const y = stoneHeap.shift();
      const x = stoneHeap.shift();
      if(x != y){
          stoneHeap.push(y-x);
      }
  }
  return stoneHeap.data[0] || 0;
};