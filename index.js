module.stringToIntAndClean = (number) => {
    // check if for , in the str and convert to .

    // check for any NaN

    // return float

    const decimal = /,/
    const numbers = /[0-9]/

    if (!numbers.test(value)) {
        throw new TypeError('enter a valid number', 'intCleaner')
    }
    console.log(value)

    const decimalConvertedValue = value.replace(',', '.')

    console.log('dec', decimalConvertedValue)

    const floatDecimalValue = parseFloat(decimalConvertedValue)

    return floatDecimalValue
}
