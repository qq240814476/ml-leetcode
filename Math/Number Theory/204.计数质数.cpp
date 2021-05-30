/*
 * @lc app=leetcode.cn id=204 lang=cpp
 *
 * [204] 计数质数
 */

// @lc code=start
class Solution {
public:
    int countPrimes(int n) {
        // 一个存放prime的数组
        // 一个存放 n 个 数, 是否是prime的数组
        vector<int> primes;
        vector<int> isPrime(n, 1);
        // 从2 开始遍历, 如果isPrime[i] !== 0 , push 到 primes 数组中
        for(int i = 2; i< n; i++){
            if(isPrime[i]){
                primes.push_back(i);
            }
            // 遍历当前 primes 数组, 与 i 相乘 小于n的数字, 这些数字 都标记为 不为质数 isPrime = 0
            for(int j = 0; j < primes.size() && i * primes[j] < n; j++){
                isPrime[i* primes[j]] = 0;
                // 如果 primes[j] 本身是 i 的约数, 说明了 i 在之前肯定是被遍历过了已经
                if(i % primes[j] == 0){
                    break;
                }
            }
        }
        return primes.size();
    }
};
// @lc code=end

