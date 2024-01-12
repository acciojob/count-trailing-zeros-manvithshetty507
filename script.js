function trailingZeros(n) {
    if (n === 0) return 0;

    function factorial(num) {
        return num === 1 ? 1 : num * factorial(num - 1);
    }

    const num = factorial(n);

    let count = 0;
    while (num % 10 === 0) {
        count++;
        num /= 10;
    }
    return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
