/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 归并排序  分而治之
// var sortArray = function(nums) {
//   return mergeSort(nums, 0, nums.length -1)
// };

// var mergeSort = function(arr, left, right){
//   if(left >= right) return arr
//   const mid = (left + right) >> 1
//   mergeSort(arr, left, mid)
//   mergeSort(arr, mid+1, right)
//   return sortPart(arr, left, mid, right)
// }

// var sortPart = function(arr, left, mid, right){
//   let res = []
//   let i = left, j = mid + 1
//   while(i<=mid && j<= right){
//     if(arr[i]< arr[j]){
//       res.push(arr[i++])
//     }else{
//       res.push(arr[j++])
//     }
//   }
//   while(i<=mid){
//     res.push(arr[i++])
//   }
//   while(j<=right){
//     res.push(arr[j++])
//   }
//   for (let i = 0; i < res.length; i++) {
//     arr[i + left] = res[i];
//   }
//   return arr
// }

// 快排
var sortArray = function(nums) {
  if (nums.length < 2) return nums
  return quickSort(nums, 0, nums.length - 1)
}

var quickSort = function(arr, left, right){
  if(left >= right) return
  const index = caluIndex(arr, left, right)
  quickSort(arr, left, index-1)
  quickSort(arr, index + 1, right)
  return arr
}

var caluIndex = function(arr, left, right) {
  // 本次排序的标记位
  var index = right
  // 指针之前的都小于标记位
  var leftIndex = left
  // 从左往右循环，将小于标记位的与指针交换，确保指针之前都小于标记位
  for(let i=left ;i < right; i++){
    if(arr[i]<arr[index]){
      [arr[i],arr[leftIndex]] = [arr[leftIndex],arr[i]]
      leftIndex++
    }
  }
  // 交换标记位和指针位置
  [arr[index],arr[leftIndex]] = [arr[leftIndex],arr[index]]
  return leftIndex
}

// @lc code=end

