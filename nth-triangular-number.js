// nth Triangular Number
const triangularNumber = function (n) {
    console.log(n)
    // base case - returns 1
    if (n === 1) {
        return n;
        // recursive case - returns number + output of triNum for the step down
    }
    else {
        return n + triangularNumber(n - 1);
    }
}
triangularNumber(3)
