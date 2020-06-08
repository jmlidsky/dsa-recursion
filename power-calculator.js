// Power Calculator
const powerCalculator = function (base, exponent) {
    console.log(base, exponent)
    if (exponent < 0) {
        return 'Exponent should be greater than or equal to 0'
    }

    if (exponent === 0) {
        return 1;
    }

    return base * powerCalculator(base, (exponent - 1))
}

console.log(powerCalculator(5,2))