/*
 * @lc app=leetcode.cn id=207 lang=cpp
 *
 * [207] 课程表
 *
 * https://leetcode-cn.com/problems/course-schedule/description/
 *
 * algorithms
 * Medium (54.61%)
 * Likes:    848
 * Dislikes: 0
 * Total Accepted:    118.3K
 * Total Submissions: 216.7K
 * Testcase Example:  '2\n[[1,0]]'
 *
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
 * 
 * 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi]
 * ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
 * 
 * 
 * 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
 * 
 * 
 * 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 输出：true
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
 * 
 * 示例 2：
 * 
 * 
 * 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
 * 输出：false
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * prerequisites[i].length == 2
 * 0 i, bi < numCourses
 * prerequisites[i] 中的所有课程对 互不相同
 * 
 * 
 */

// @lc code=start
class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        int indeg[numCourses];
        // define a dynamic arr 
        memset(indeg, 0, sizeof(indeg));
        vector<vector<int>> g(numCourses);
        queue<int> q;
        // store every course indeg and dependencise
        for(auto x: prerequisites){
            g[x[1]].push_back(x[0]);
            indeg[x[0]]++;
        }
        
        // cout << "依赖数组:" << endl;
        // for(auto x: g){
        //     cout << "第" << x << "门课程被以下课程依赖：" << endl;
        //     for(auto y: x){
        //         cout << y << endl;
        //     }
        // }

        // int j = 0;
        // cout << "入度:" << endl;
        // for(auto x: indeg){
        //     cout << "第" << j++ << " 课程入度为： " << x << endl;
        // }
        // collect indeg zero course[0]
        //! dynamic arr sizeof  is its address size, not length of arr
        // cout << sizeof(indeg) << endl;
        // cout << endl;
        // cout << "入度为0的课程被加入到集合中：" << endl;
        // cout << endl;

        for(int i = 0; i< numCourses; i++){
            if(!indeg[i]){
                // cout << i << " 度为零, 压入队列" << endl;
                // cout << endl;
                q.push(i);
            }
        }
        // count all of courses which indeg equal to zero
        int cnt = 0;
        // cout << endl;
        // cout << "出度：" << endl;
        // cout << endl;
        
        // cout << "此时队列中剩余个数： " << q.size() << endl;
        while(!q.empty()){
            int idx = q.front();
            q.pop();
            cnt++;
            // cout << "课程 " << idx << " 被弹出" << endl;
            // cout << "此时队列中剩余个数： " << q.size() << endl;
            // cout << "可以被修完的课程数为： " << cnt << endl;
            // cout << endl;
            // cout << "所有依赖" << idx << "的课程的度数都减一" << endl; 
            // every course which depend idx subtract one indeg
            for(auto x: g[idx]){
                // cout << "课程 " << x << " 的度为： " << indeg[x] - 1 << endl;
                if(--indeg[x]){
                    q.push(x);
                    // cout << endl;
                    // cout << x << " 度为零, 压入队列" << endl;
                    // cout << "此时队列中剩余个数： " << q.size() << endl;
                    // cout << endl;
                }
            }
        }

        return cnt == numCourses;
    }
};
// @lc code=end

