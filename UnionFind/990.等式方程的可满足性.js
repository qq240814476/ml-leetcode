/*
 * @lc app=leetcode.cn id=990 lang=javascript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start
let fa;
function initUnionSet(n){
    fa = new Array(n+1);
    for(let i = 0; i<= n; i++){
        fa[i] = i;
    }
}
function get(a){
    return fa[a] = (fa[a] == a ? a : get(fa[a]));
}
function merge(a,b){
    fa[get(a)] = get(b);
}
function getIdx(str){
    return str.charCodeAt(0) - 97;
}
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    initUnionSet(26);
    for(const equation of equations){
        if(~equation.indexOf('==')){
            const arr = equation.split('==');
            merge(getIdx(arr[0]), getIdx(arr[1]));
        }
    }
    for(const equation of equations){
        if(!~equation.indexOf('==')){
            const arr = equation.split('!=');
            if(get(getIdx(arr[0])) == get(getIdx(arr[1]))) return false;
        }
    }
     

    return true;
};
// @lc code=end

