function sqrt(num) {
    return Math.sqrt(num);
}

function round(num) {
    return num.toFixed(3);
}

const number = 2;
const squareRoot = sqrt(number);
const roundedResult = round(squareRoot);

console.log(roundedResult);