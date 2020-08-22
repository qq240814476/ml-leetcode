#
# @lc app=leetcode id=219 lang=python3
#
# [219] Contains Duplicate II
#

# @lc code=start
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        res = {}
        for i in range(len(nums)):
            if res.get(nums[i]) and i+1 - res.get(nums[i]) <= k:
                return True
            else:
                res[nums[i]] = i + 1
        return False

# @lc code=end

