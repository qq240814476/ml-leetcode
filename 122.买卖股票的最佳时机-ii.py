#
# @lc app=leetcode.cn id=122 lang=python3
#
# [122] 买卖股票的最佳时机 II
#

# 一次遍历，能买就买，能卖就卖 错！！❌
# 应该等价于 每天都买卖，赚了就累加！
# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        res = 0
        for i in range(1, len(prices)):
            sum = prices[i] - prices[i-1]
            if sum > 0:
                res += sum
        #     if now < 0 and prices[i-1] < prices[i]:
        #             now = prices[i-1]
        #     elif now >= 0 and prices[i-1] > prices[i]:
        #         res += prices[i-1] - now
        #         now = prices[i]
        
        # if now >= 0 and now < prices[len(prices) - 1]:
        #     res += prices[len(prices) - 1] - now
        return res
# @lc code=end

