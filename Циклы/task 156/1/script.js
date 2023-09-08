const res = [];
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    res.push(`${i}${j}`);
  }
}
document.write(res.join(" "));
