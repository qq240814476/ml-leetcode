void quick_sort(int * arr, int l, int r){
    if(l>=r) return;
    int x = l, y = r, base = arr[x];
    while(x < y){
        while(x < y && arr[y] >= base) y--;
        if(x < y) arr[x++] = arr[y];
        while(x < y && arr[x] <= base) x++;
        if(x < y) arr[y--] = arr[x];
    }
    arr[x] = base;
    quick_sort(arr, l, x - 1);
    quick_sort(arr, x + 1, r);
}

// 左递推法
void quick_sort_v2(int * arr, int l, int r){
  while(l < r){
    int x = l, y = r, base = arr[x];
    while(x < y){
        while(x < y && arr[y] >= base) y--;
        if(x < y) arr[x++] = arr[y];
        while(x < y && arr[x] <= base) x++;
        if(x < y) arr[y--] = arr[x];
    }
    arr[x] = base;
    quick_sort(arr, x + 1, r);
    r = x - 1;
  }
}