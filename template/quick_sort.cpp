// // 基础快排, 容易掉入有序陷阱, 退化为 n^2
// void quick_sort_v1(int * arr, int l, int r){
//     if(l>=r) return;
//     int x = l, y = r, base = arr[x];
//     while(x < y){
//         while(x < y && arr[y] >= base) y--;
//         if(x < y) arr[x++] = arr[y];
//         while(x < y && arr[x] <= base) x++;
//         if(x < y) arr[y--] = arr[x];
//     }
//     arr[x] = base;
//     quick_sort(arr, l, x - 1);
//     quick_sort(arr, x + 1, r);
// }

// // 左递推法, 简单的空间优化, 对时间没帮助
// void quick_sort_v2(int * arr, int l, int r){
//   while(l < r){
//     int x = l, y = r, base = arr[x];
//     while(x < y){
//         while(x < y && arr[y] >= base) y--;
//         if(x < y) arr[x++] = arr[y];
//         while(x < y && arr[x] <= base) x++;
//         if(x < y) arr[y--] = arr[x];
//     }
//     arr[x] = base;
//     quick_sort(arr, x + 1, r);
//     r = x - 1;
//   }
// }
  
// const int threshold = 16;

// // three point get mid
// int getMid(int a, int b, int c){
//   if(a > b) swap(a, b);
//   if(a > c) swap(a, c);
//   if(a > b) swap(b, a);
//   return b;
// }

// // unguarded insert sort
// void insert_sort(int * arr, int l, int r){
//   int ind = l;
//   for(int i = l + 1; i< r; i++){
//     if(arr[i] < arr[ind]) ind = i;
//   }
//   while(ind > 0){
//     swap(arr[ind], arr[ind - 1]);
//   }
//   for(int i = l + 2; i < r; i++){
//     int j = i;
//     while(arr[j - 1] > arr[j]){
//       swap(arr[j - 1], arr[j]);
//       j--;
//     }
//   }
//   return ;
// }

// // unguarded partition left recursion
// // threshold limit , down level to insert sort
// void quick_sort_v3(int * arr, int l, int r){
//   while(r - l > threshold){
//     int x = l, y = r, base = getMid(arr[l], arr[(r+l) / 2], arr[r]);
//     do{
//       while(arr[x] < base) x++;
//       while(arr[y] > base) y--;
//       if(x <= y) swap(arr[x++], arr[y--]);
//     } while(x <= y);
//     quick_sort_v3(arr, x, r);
//     r = y;
//   }
//   return ;
// }

// // optimize quick sort
// void quick_sort(int * arr, int l, int r){
//   quick_sort_v3(arr, l, r);
//   insert_sort(arr, l, r);
// }

// const int threshold = 16;

// void quick_sort_v3(int * arr, int l, int r){
//   while(r-l>threshold){
//     int x=l, y=r, base = getMid(arr[l], arr[(l+r)/2], arr[r]);
//     do {
//       while(arr[x] < base) x++;
//       while(arr[y] > base) y--;
//       if(x <= y) swap(arr[x++], arr[y--]);
//     } while(x <= y);
//     quick_sort_v3(arr, x, r);
//     r=y;
//   }
//   return ;
// }

// int getMid(int a, int b, int c){
//   if(a < b) swap(a , b);
//   if(a > c) swap(a , c);
//   if(a > b) swap(a , b);
//   return b;
// }

// void insert_sort(int * arr, int l, int r){
//   int idx = l;
//   for(int i= l+1; i<=r; i++){
//     if(arr[i] < arr[idx]) idx = i;
//   }
//   while(idx > 0){
//     swap(arr[idx], arr[idx - 1]);
//     idx --;
//   }
//   for(int i = l + 2; i <= r; i++){
//     int j=i;
//     while(arr[j] < arr[j-1]){
//       swap(arr[j], arr[j-1]);
//       j--;
//     }
//   }
//   return ;
// }

// void quick_sort(int * arr, int l, int r){
//   quick_sort_v3(arr, l, r);
//   insert_sort(arr, l, r);
// }



// template optimize quick sort
const int threshold= 16;

void quick_sort_v3(int * arr, int l, int r){
  while(r - l > threshold){
    int x=l, y=r, base = getMid(arr[r], arr[(r+l) / 2], arr[l]);
    do {
      while(arr[x] < base) x++;
      while(arr[y] > base) y--;
      if(x <= y) swap(arr[x++], arr[y--]);
    } while(x <= y);
    quick_sort_v3(arr, x, r);
    r = y;  
  }
  return;
}

int getMid(int a, int b, int c){
  if(a < b) swap(a, b);
  if(a>c) swap(a, c);
  if(a > b) swap(a, b);
  return b;
}

void insert_sort(int * arr, int l, int r){
  int idx = l;
  for(int i = l+1; i <= r; i++){
    if(arr[i] < arr[idx]) idx = i;
  }
  while(idx > 0){
    swap(arr[idx], arr[idx - 1]);
    idx--;
  }
  for(int i=l+2; i <= r; i ++){
    int j=i;
    while(arr[j]<arr[j-1]){
      swap(arr[j],arr[j-1]);
      j--;
    }
  }
  return ;
}

void quick_sort(int * arr, int l, int r){
  quick_sort_v3(arr, l, r);
  insert_sort(arr, l,r);
}