/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let fiveMoney = 0
  let tenMoney = 0
  let twentyMoney = 0
  for(let bill of bills){
    if(bill === 5) fiveMoney++
    if(bill === 10){
      if(fiveMoney < 1) return false;
      tenMoney++
      fiveMoney--
    }
    if(bill===20){
      if(fiveMoney < 1) return false;
      if(tenMoney < 1){
        if(fiveMoney< 3) return false;
        fiveMoney -= 3
      } else {
        tenMoney--
        fiveMoney--
      }
      twentyMoney++
    }
  }
  return true
};
// @lc code=end

