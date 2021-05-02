/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 1. 先看是否根节点就开始匹配, 如果是, 则判断是否 match, 否则, 在根的左子树找, 或者 右子树里面找
// 2. match 方法
//      2.1 如果 !B 返回true, 如果!A 返回false, 如果 A.val !== B.val 返回 false, 然后 A.left 和 B.left 要 match, 并且 A.right和 B.right 要 match
// var isMatch = (A, B) => {
//     if(!B) return true;
//     if(!A) return false;
//     if(A.val !== B.val) return false;
//     return isMatch(A.left, B.left) && isMatch(A.right, B.right);
// }
// /**
//  * @param {TreeNode} A
//  * @param {TreeNode} B
//  * @return {boolean}
//  */
// var isSubStructure = function(A, B) {
//     if(!B) return false;
//     if(!A) return false;
//     if(A.val === B.val && isMatch(A,B)) return true;
//     return isSubStructure(A.left, B) || isSubStructure(A.right, B);
// };
// var isMatch = (A, B) => {
//     if(!B) return true;
//     if(!A) return false;
//     if(A.val !== B.val) return false;
//     return isMatch(A.left, B.left) && isMatch(A.right, B.right);
// }

// var isSubStructure = function(A, B) {
//     if(!B || !A) return false;
//     // when equal val, direct judgement if B‘s child tree is matching A’s child tree
//     if(A.val === B.val && isMatch(A, B)) return true;
//     // else match child tree in A.left Or A.right
//     return isSubStructure(A.left, B) || isSubStructure(A.right, B)
// };

var isMatch = (A, B) => {
  if(!B) return true;
  if(!A) return false;
  if(A.val !== B.val) return false;
  return isMatch(A.left, B.left) && isMatch(A.right, B.right);
}

var isSubStructure = function(A, B) {
  if(!B || !A) return false;
  // when equal val, direct judgement if B‘s child tree is matching A’s child tree
  if(A.val === B.val && isMatch(A, B)) return true;
  // else match child tree in A.left Or A.right
  return isSubStructure(A.left, B) || isSubStructure(A.right, B);
};