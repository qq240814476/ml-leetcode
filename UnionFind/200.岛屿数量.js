/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
let fa;
class UnionSet{
    constructor(n){
        fa = new Array(n + 1);
        for(let i = 0; i< n+1;i++){
            fa[i] = i;
        }
    }
}
function get(a){
    return fa[a] = (fa[a] == a ? a : get(fa[a]));
}
function merge(a,b){
    fa[get(a)] = get(b)
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const unionSet = new UnionSet(grid[0].length * grid.length);
    for(let i = 0;i<grid.length;i++){
        for(let j = 0;j<grid[0].length;j++){
            if(grid[i][j] == '0') continue;
            if(i>0 && grid[i-1][j] == '1'){
                merge(i *grid[0].length + j, (i-1) *grid[0].length + j)
            }
            if(j>0 && grid[i][j-1] == '1'){
                merge(i *grid[0].length + j, i *grid[0].length + j -1)
            }
        }
    }
    let ans = 0;
    for(let i = 0;i<grid.length;i++){
        for(let j = 0;j<grid[0].length;j++){
            if(grid[i][j] == '1' && get(i *grid[0].length + j) == i *grid[0].length + j) ans++;
        }
    }
    return ans;
};
// @lc code=end

