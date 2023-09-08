let arr = [1, 2, 3, 4, 5, 0, 7, 8, 9, 5];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    break;
  }
  console.log(arr[i]);
}
