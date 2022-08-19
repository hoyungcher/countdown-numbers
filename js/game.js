class Game {
    constructor(largeQuantity) {
        this.largeQuantity = largeQuantity
        this.smallQuantity = 6 - largeQuantity
        this.numbers = []
        // Generate random numbers
        for (let i = 0; i < this.largeQuantity; i++) {
            this.numbers.push(LARGE_NUMBERS[this.getRandomInt(4)])
        }
        for (let i = 0; i < this.smallQuantity; i++) {
            this.numbers.push(SMALL_NUMBERS[this.getRandomInt(10)])
        }
        this.target = this.getRandomInt(1000, 100)
        this.currentNumbers = this.numbers.slice(0)
        this.num1, this.num2 = 0
        this.operation = ""
        
    }
    performOperation(num1, num2, operation) {
        switch(operation) {
            case "ADD":
                return add(num1, num2)
            case "SUBTRACT":
                return subtract(num1, num2)
            case "MULTIPLY":
                return multiply(num1, num2)
            case "DIVIDE":
                return divide(num1, num2)
            default:
                return -1
        }
    }
    
    clear() {
        this.num1 = 0
        this.num2 = 0
        this.operation = ""
    }


    // ADDITION
    add(num1, num2) {
        // Calculate sum
        const sum = num1 + num2
        let num1Idx, num2Idx

        // Find index of numbers
        if (num1 === num2) {
            num1Idx = this.currentNumbers.indexOf(num1)
            num2Idx = this.currentNumbers.lastIndexOf(num2)
        } else {
            num1Idx = this.currentNumbers.indexOf(num1)
            num2Idx = this.currentNumbers.indexOf(num2)
        }
        

        this.currentNumbers.splice(num1Idx, 1, sum)
        this.currentNumbers.splice(num2Idx, 1)
        return sum
    }

    // SUBTRACTION
    subtract(num1, num2) {
        if (num2 > num1) {
            return -1
        }
        const difference = num1 - num2
        let num1Idx, num2Idx

        // Find index of numbers
        if (num1 === num2) {
            num1Idx = this.currentNumbers.indexOf(num1)
            num2Idx = this.currentNumbers.lastIndexOf(num2)
        } else {
            num1Idx = this.currentNumbers.indexOf(num1)
            num2Idx = this.currentNumbers.indexOf(num2)
        }

        this.currentNumbers.splice(num1Idx, 1, difference)
        this.currentNumbers.splice(num2Idx, 1)
        return difference
    }

    // MULTIPLICATION
    multiply(num1, num2) {
        // Calculate product
        const product = num1 * num2
        let num1Idx, num2Idx

        // Find index of numbers
        if (num1 === num2) {
            num1Idx = this.currentNumbers.indexOf(num1)
            num2Idx = this.currentNumbers.lastIndexOf(num2)
        } else {
            num1Idx = this.currentNumbers.indexOf(num1)
            num2Idx = this.currentNumbers.indexOf(num2)
        }

        this.currentNumbers.splice(num1Idx, 1, product)
        this.currentNumbers.splice(num2Idx, 1)
        return product
    }

    // DIVISION
    divide(num1, num2) {
        if (num1 % num2 !== 0) {
            return -1
        }
        const quotient = num1 / num2
        let num1Idx, num2Idx

        // Find index of numbers
        if (num1 === num2) {
            num1Idx = this.currentNumbers.indexOf(num1)
            num2Idx = this.currentNumbers.lastIndexOf(num2)
        } else {
            num1Idx = this.currentNumbers.indexOf(num1)
            num2Idx = this.currentNumbers.indexOf(num2)
        }

        this.currentNumbers.splice(num1Idx, 1, quotient)
        this.currentNumbers.splice(num2Idx, 1)
        return quotient
    }

    // Generate random Integer
    getRandomInt(max, min = 0) {
        return Math.floor(Math.random() * (max - min)) + min
    }

}