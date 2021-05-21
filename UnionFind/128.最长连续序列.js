/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
// let fa, cnt;
// function initUnionSet(n){
//     fa = new Array(n+1);
//     cnt = new Array(n+1);
//     for(let i =0;i<=n;i++){
//         fa[i] = i;
//         cnt[i] = 1;
//     }
// }
// function get(a){
//     return fa[a] = (fa[a] == a ? a: get(fa[a]));
// }
// function merge(a, b){
//     const pa = get(a), pb = get(b);
//     if(pa ==pb) return;
//     // 先加数量, 然后再换父节点, 否则 fa[pa] 就换了
//     cnt[pb] += cnt[fa[pa]];
//     fa[pa] = pb;
// }
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function(nums) {
//     if(!nums.length) return 0;
//     // hash 的 key 应该是 数值 1234
//     // value 是 下角标 01234
//     const hash = {}
//     initUnionSet(nums.length);
//     for(let i = 0; i< nums.length;i++){
//         const n = nums[i];
//         if(hash[n] !== undefined) continue;
//         hash[n] = i;
//         if(hash[n+1] !== undefined) merge(hash[n+1], hash[n])
//         if(hash[n-1] !== undefined) merge(hash[n], hash[n-1])
//     }
//     return Math.max(...cnt);
// };
// let fa, cnt;
// function initUnionSet(n){
//     fa = new Array(n+1);
//     cnt = new Array(n+1);
//     for(let i = 0; i<=n; i++){
//         fa[i] = i;
//         cnt[i] = 1;
//     }
// }
// function get(a){
//     return fa[a] = (fa[a] == a ? a : get(fa[a]));
// }
// function merge(a, b){
//     const pa = get(a), pb = get(b);
//     if(pa == pb) return;
//     cnt[pb] += cnt[fa[pa]];
//     fa[pa] = pb;
// }
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var longestConsecutive = function(nums) {
//     if(!nums.length) return 0;
//     const hash = {};
//     initUnionSet(nums.length);
//     for(let i =0;i<nums.length;i++){
//         const n = nums[i];
//         if(hash[n] !== undefined) continue;
//         hash[n] = i;
//         if(hash[n-1] !== undefined) merge(hash[n], hash[n-1])
//         if(hash[n+1] !== undefined) merge(hash[n+1], hash[n])
//     }
//     return Math.max(...cnt);
// };
let fa, cnt;
function initUnionSet(n){
    fa = new Array(n + 1);
    cnt = new Array(n+1);
    for(let i =0;i<=n;i++){
        fa[i] = i;
        cnt[i] = 1;
    }
}
function get(a){
    return fa[a] = (fa[a] == a ? a : get(fa[a]));
}
function merge(a, b){
    const pa = get(a), pb = get(b);
    if(pa == pb) return;
    fa[pa] = pb;
    cnt[pb] += cnt[pa];
}
/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
     if(!nums.length) return 0;
     const hash = {}
     initUnionSet(nums.length);
     for(let i = 0; i< nums.length; i++){
        const n = nums[i];
        if(hash[n] !== undefined) continue;
        hash[n] = i;
        if(hash[n-1] !== undefined) merge(hash[n], hash[n-1]);
        if(hash[n+1] !== undefined) merge(hash[n+1], hash[n]);
     }
     return Math.max(...cnt);
};
// @lc code=end

