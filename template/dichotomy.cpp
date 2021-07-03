int dichotomyFind(int *arr, int n, int x){
  int min=0, max = n-1, mid;
  while(min <= max){
    mid = min + (max-min) >> 1;
    if(arr[mid] == x) return mid;
    if(arr[mid] < x) {
      min = mid + 1;
    } else 
      max = mid - 1;
  }
  return -1;
}

int binary_search(vector<int> &arr, int x){
  int min = 0, max = arr.size() -1, mid;
  while(max - min > 3) {
    mid = (max + min) >> 1;
    if(arr[mid] <= x) min = mid;
    else max = mid - 1;
  }
  // i <= max because we get the set [] not ()
  for(int i = min; i<= max; i++) {
    if(arr[i] >= x) return i;
  }
  return arr.size();
}