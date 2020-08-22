#
# @lc app=leetcode id=448 lang=python3
#
# [448] Find All Numbers Disappeared in an Array
#

# @lc code=start
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        nums.sort()
        res = []
        l = len(nums)
        for i in range(l):
            if nums[0] != 1:
                for j in range(1, nums[0]):
                    res.append(j)
            # i 不等于 0的话 ，与 上一位做差，差值不等于1 的话 循环 差值 push 到 res
            else:
                diff = nums[i] - nums[i - 1]
                if diff > 1:
                    for k in range(1, diff):
                        res.append(nums[i-1] + k)
                if i == l - 1 and nums[i] != l:
                    for x in range(1, l - nums[i] + 1):
                        res.append(nums[i] + x);
        return res
# @lc code=end

