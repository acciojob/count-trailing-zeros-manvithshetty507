function trailingZeros(n) {
  //your JS code here. If required.
	if(n == 0) return 0;
	function fact(n) {
		if(n == 1) return 1
		return n * fact(n-1);
	}

	let num = fact(n);

	let count = 0;
	while(num % 10 == 0) {
		count++;
		num = num/10
	}
	return count
}

//const input = prompt("Enter a number");
alert(trailingZeros(input));
