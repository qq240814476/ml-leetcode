## 回溯公式

```js
const result = []
function backtrack(path, 选择列表){
  if(满足条件){
    result.add(path)
    return
  }
  for(选择 in 选择列表){
    if(不符合条件) continue
    做选择
    backtrack(路径, 选择列表)
    撤销选择
  }
}
```

## N皇后解法

```js
let res
var solveNQueens = function(n) {
  if(n===0) return []
  res = []

  // 构建填满 '.' 的矩阵
  const path = []
  for(let i = 0; i< n; i++){
    path.push(new Array(n).fill('.'))
  }

  backtrack(path, 0)
  return res
};

const backtrack = function (path, row) {
  if(row === path.length){
    res.push(path.map(arr => {
      return arr.join('')
    }))
    return
  }
  const n = path.length
  for(let col = 0; col<n; col++){
    if(!isValid(path, row, col)) continue
    path[row][col] = 'Q'
    backtrack(path, row + 1)
    path[row][col] = '.'
  }
}

const isValid = function(path, row, col){
  // 列
  for(let r = 0; r < row ; r++){
    if(path[r][col] === 'Q') return false
  }

  // 左上
  for(let r = row-1, c = col-1; r >= 0 && c >= 0; r--,c--){
    if(path[r][c] === 'Q') return false
  }

  // 右上
  for(let r = row - 1, c = col + 1; r >= 0 && c < path.length;r--,c++){
    if(path[r][c] === 'Q') return false
  }

  return true
}
```