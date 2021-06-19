#include <cstdlib>
#include <iostream>

using namespace std;

void radix_sort(int &arr){
  // o(n)
  int cnt[65536] = {0};
  // count
  for(auto x: arr) cnt[x & 0xffff]++;
  // prefix sum
  for(int i=1; i<65536; i++) cnt[i] += cnt[i-1];
  // placement
  vector<int> temp(arr.size());
  for(int i = arr.size() - 1; i >= 0; i--) temp[--cnt[arr[i] & 0xffff]] = arr[i];
  memset(cnt, 0, sizeof(cnt));
  // greater 16 pos
  // count
  for(auto x: arr) cnt[(x & 0xffff0000) >> 16]++;
  // prefix sum
  for(int i=1; i<65536; i++) cnt[i] += cnt[i-1];
  // placement
  for(int i = arr.size() - 1; i >= 0; i--) arr[--cnt[(temp[i] & 0xffff0000) >> 16]] = temp[i]; 
  return ;
}

int main() {
  int n;
  int arr[100];
  cin >> n;
  for(int i=0; i< n; i++) cin >> arr[i];
  radix_sort(arr, 0, n-1);
  for(int i=0;i<n; i++) cout << arr[i] << " ";
  system("pause");
  return 0;
}