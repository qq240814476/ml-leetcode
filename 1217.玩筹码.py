#
# @lc app=leetcode.cn id=1217 lang=python3
#
# [1217] 玩筹码
#

# 计算奇数偶数最小值
# @lc code=start
class Solution:
    def minCostToMoveChips(self, chips: List[int]) -> int:
        odd = sum(1 for i in chips if i % 2 == 0)
        return min(odd, len(chips) - odd)
# @lc code=end

