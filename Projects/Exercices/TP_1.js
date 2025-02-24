function Add(a, b) {
    /*
    Add two numbers
    @param {number} a
    @param {number} b
    @return {number}
    */
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'a and b must be numbers'
    }
    return a + b
}

//console.log(Add(1, 2))

function findMaximum(tab) {
    /*
    Find the maximum value in an array
    @param {number[]} tab
    @return {number}
    */
   return Math.max(...tab)
}

//console.log(findMaximum([1, 2, 3, 4, 5]))

function removeVoyels(str) {
    /*
    Remove all voyels from a string
    @param {string} str
    @return {string}
    */
    return str.replaceAll(/[aeiouy]/g, '')
}

//console.log(removeVoyels('Hello World'))

function sortStrings(tab) {
    /*
    Sort an array of strings
    @param {string[]} tab
    @return {string[]}
    */
    return tab.sort()
}

//console.log(sortStrings(['Hello', 'World', 'Foo', 'Bar']))

function numberToLetters(number) {
    /*
    Convert a number to letters
    @param {number} number
    @return {string}
    */
    if (number > 999 || number % 1 !== 0) {
        return 'Number too big'
    }

    if (number === 0) {
        return 'zero'
    }

    let numberInLetters = ''
    const numberLength = number.toString().length
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const tens = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'nineteen']

    if (numberLength === 3 && number.toString()[numberLength-3] !== '0') {
        numberInLetters += units[number.toString()[numberLength-3]] + ' hundred '
    }

    if (numberLength >= 2 && number.toString()[numberLength-2] !== '0') {
        if (number.toString()[numberLength-2] === '1') {
            numberInLetters += teens[number.toString()[numberLength-1]-1] + ' '
            return numberInLetters
        }
        numberInLetters += tens[number.toString()[numberLength-2]-1] + ' '
    }

    if (numberLength >= 1 && number.toString()[numberLength-1] !== '0') {
        numberInLetters += units[number.toString()[numberLength-1]]
        return numberInLetters
    }

    return numberInLetters

}

//console.log(numberToLetters(550))

function determineChange(amount, availableChange = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100]) {
    /*
    Determine the change to give using custom change values and the minimum number of coins
    @param {number} amount
    @param {number[]} availableChange - optional
    @return {object}
    */
    if (typeof amount !== 'number') {
       return 'Amount must be a number'
    }
    if (amount <= 0) {
        return 'Amount must be a positive number'
    }

    for (changeValue of availableChange) {
        if (typeof changeValue !== 'number') {
            return `${changeValue} is not a number`
        }
        if (changeValue <= 0) {
            return `${changeValue} is not a positive number`
        }
    }

    amount = amount.toFixed(2)
    let change = {}
    for (changeValue of availableChange.sort((a,b) => a - b).reverse()) {
        changeAmount = Math.floor(amount / changeValue)
        if (changeAmount !== 0) {
            change[changeValue] = changeAmount
        }
        amount = (amount - changeAmount * changeValue).toFixed(2)

        if (amount == 0) {
            return change
        }
    }
    
    return 'Change not possible'
    
}

let amount = 133.65
// console.log(`Change de ${amount} : `, determineChange(amount))

amount = 5427.3256
// console.log(`Change de ${amount} : `, determineChange(amount))

amount = 12.57
// console.log(`Change de ${amount} : `, determineChange(amount, [0.05, 0.1, 0.2, 0.5, 1]))

amount = 0
console.log(`Change de ${amount} : `, determineChange(amount))