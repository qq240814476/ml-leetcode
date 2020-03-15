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
// @lc code=end

