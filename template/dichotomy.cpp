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