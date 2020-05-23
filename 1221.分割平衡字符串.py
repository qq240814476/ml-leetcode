#
# @lc app=leetcode.cn id=1221 lang=python3
#
# [1221] 分割平衡字符串
#

# @lc code=start
class Solution:
    def balancedStringSplit(self, s: str) -> int:
        count = 0;
        balance = 0;
        for i in s:
            if i == 'R':
                balance+=1;
            else:
                balance-=1;
            if balance == 0:
                count+=1;
        return 1 if count == 0 else count;
# @lc code=end

