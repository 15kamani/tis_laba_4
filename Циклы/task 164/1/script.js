let arr = [10, 20, 30, 40, 21, 32, 51];
for (let elem of arr) {
  console.log(elem);
}
for (let elem of arr) {
  if (elem[0] === 1 || elem[0] === 2) {
    sum += elem;
  }
}

console.log(sum);
