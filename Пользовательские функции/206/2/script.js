function sqrt(num) {
    return Math.sqrt(num);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

const number1 = 2;
const number2 = 3;
const number3 = 4;

const sqrt1 = sqrt(number1);
const sqrt2 = sqrt(number2);
const sqrt3 = sqrt(number3);

const res = sum(sqrt1, sqrt2, sqrt3);

console.log(res);