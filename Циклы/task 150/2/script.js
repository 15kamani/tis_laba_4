let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let [elem] of obj) {
	if ([elem] % 2 != 0) {
		console.log(elem);
	}
}