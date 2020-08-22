#
# @lc app=leetcode id=189 lang=python3
#
# [189] Rotate Array
#

# @lc code=start
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        for i in range(k):
            nums.insert(0, nums.pop())
        return nums
        
# @lc code=end

