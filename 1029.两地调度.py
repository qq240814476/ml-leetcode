#
# @lc app=leetcode.cn id=1029 lang=python3
#
# [1029] 两地调度
#

# @lc code=start
class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        newCost = sorted(costs, key=lambda x : x[0] - x[1])
        ans = 0
        N = len(costs)
        for i in range(int(N / 2)):
            ans += newCost[i][0]
        for i in range(int(N / 2), N):
            ans += newCost[i][1]
        return ans
# @lc code=end

