const intCleaner = (value) => {
    // check if for , in the str and convert to .

    // check for any NaN

    // return float

    const numbers = /[0-9]/

    if (!numbers.test(value)) {
        throw new TypeError('enter a valid number', 'intCleaner')
    }

    const decimalConvertedValue = value.replace(',', '.')

    const floatDecimalValue = parseFloat(decimalConvertedValue)

    return floatDecimalValue
}

module.exports = intCleaner
