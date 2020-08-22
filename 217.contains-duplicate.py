#
# @lc app=leetcode id=217 lang=python3
#
# [217] Contains Duplicate
#

# @lc code=start
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        obj = {}
        for i in range(len(nums)):
            if obj.get(nums[i]):
                return True
            else:
                obj[nums[i]] = True
        return False
        
# @lc code=end

