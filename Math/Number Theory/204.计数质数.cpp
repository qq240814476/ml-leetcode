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
        for(int i = 2; i< n; i++){
            if(isPrime[i]){
                primes.push_back(i);
            }
            for(int j = 0; j < primes.size() && i * primes[j] < n; j++){
                isPrime[i* primes[j]] = 0;
                if(i % primes[j] == 0){
                    break;
                }
            }
        }
        return primes.size();
    }
};
// @lc code=end

