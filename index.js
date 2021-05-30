const intCleaner = (value) => {
    // check for any NaN
    const numbers = /[0-9]/

    if (!numbers.test(value)) {
        return NaN
    }

    // check if for , in the str and convert to .
    const decimalConvertedValue = value.replace(',', '.')

    const floatDecimalValue = parseFloat(decimalConvertedValue)

    // if there were any issues in the previous two lines this will return NaN
    if (!typeof floatDecimalValue !== Number) {
        return NaN
    }

    // return float
    return floatDecimalValue
}

module.exports = intCleaner
