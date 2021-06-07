#include <cstdlib>
#include <iostream>

using namespace std;

void merge_sort(int *arr, int l, int r){
  if(l>=r) return ;
  int mid = (l+r) >> 1;
  for(int i= l; i <= r; i++) cout << arr[i] << " ";
  merge_sort(arr, l, mid);
  merge_sort(arr, mid+1, r);
  int *temp = (int *)malloc(sizeof(int) * (r - l + 1));
  int p = l, q= mid + 1, i=0;
  while(p<=mid || q<= r){
    // add left ele or right ele, so we use if 
    if(q>r || (p<=mid && arr[p] <= arr[q])){
      temp[i++] = arr[p++];
    } else {
      temp[i++] = arr[q++];
    }
  }
  for(int j=l; j<= r; j++){
    arr[j] = temp[j - l];
  }
  free(temp);
  return ;
}

int main() {
  int n;
  int arr[100];
  cin >> n;
  for(int i=0; i< n; i++) cin >> arr[i];
  merge_sort(arr, 0, n-1);
  for(int i=0;i<n; i++) cout << arr[i] << " ";
  system("pause");
  return 0;
}