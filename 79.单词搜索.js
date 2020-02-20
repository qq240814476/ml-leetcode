/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */
let hl
let vl
let arr

// @lc code=start
const find = function(i, j, word, pos = ''){
  if(arr[i][j] !== word.charAt(0)) return false
  if(word.length === 1) return true

  // 防止重复用
  let temp = arr[i][j]
  arr[i][j] = 0

  //上下左右 递归find
  if(i+1 <= vl-1 && pos !== 't'){
    if(find(i+1,j,word.slice(1), 'b')) return true
  }
  if(i-1 >= 0 && pos !== 'b'){
    if(find(i-1,j,word.slice(1), 't')) return true
  }
  if(j+1 <= hl-1 && pos !== 'r'){
    if(find(i,j+1,word.slice(1), 'l')) return true
  }
  if(j-1 >= 0 &&pos !== 'l'){
    if(find(i,j-1,word.slice(1), 'r')) return true
  }

  // 回退
  arr[i][j] = temp
  return false
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(board.length === 0) return false
    arr = board
    hl = board[0].length
    vl = board.length
    if(word.length > hl*vl) return false
    for(let i =0; i<vl; i++){
      for(let j=0; j<hl;j++){
        if(board[i][j] === word.charAt(0)
          && find(i,j,word))
          return true
      }
    }
    return false
};
// @lc code=end

