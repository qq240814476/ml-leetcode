#
# @lc app=leetcode id=169 lang=python3
#
# [169] Majority Element
#

# @lc code=start
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        l = len(nums)
        res = {}
        for i in range(l):
            if res.get(nums[i]):
                res[nums[i]] += 1
            else:
                res[nums[i]] = 1
            if res.get(nums[i]) >= l / 2:
                return nums[i]
        
# @lc code=end

