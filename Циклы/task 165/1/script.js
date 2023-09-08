let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
let sum = 0;

for (let elem of obj) {
  if (elem[0] === "1" && elem[0] === "2") {
    sum += +elem;
  }
}

console.log(sum);
