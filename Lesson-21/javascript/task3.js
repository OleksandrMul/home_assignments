"use strict";
/**
 * Створити клас "Client"
 *      Властивості: [ ID, ПІБ, Кількість грошей на рахунку ]
 *      Методи: [ Додавання грошей, Зняття грошей, ToString ]
 * 
 * На основі цього класу створити клас "GoldenClient"
 *      Властивості: [ ID, ПІБ, Кількість грошей на рахунку, Ліміт кредитних коштів, Відсоток за використання кредитних коштів ]
 *      Методи: [ Додавання грошей, Зняття грошей, Визначення пені за використання кредитних коштів, ToString ]
 */

//------------------------------------------------
// Custom Errors class exceptions ----------------
//------------------------------------------------
class IsNotNumberError extends Error {
    constructor() {
        super()
        this.message = 'Must be a number!'
        this.name = 'IsNotNumberError'
    }
}

class IsNegativeNumberError extends Error {
    constructor() {
        super()
        this.message = "Number cannot be negative!"
        this.name = 'IsNegativeNumberError'
    }
}

class IsEmptyNameError extends Error {
    constructor() {
        super()
        this.message = "Name cannot be empty!"
        this.name = 'IsEmptyNameError'
    }
}

class IsHighAmountNumberError extends Error {
    constructor() {
        super()
        this.message = "There is not enough money in the account! You cannot withdraw more than you have in your account!"
        this.name = 'IsHighAmountNumberError'
    }
}

class IsHighCreditFundsPercentageNumberError extends Error {
    constructor() {
        super()
        this.message = "The percentage of use of credit funds cannot be more than 100%!"
        this.name = 'IsHighCreditFundsPercentageNumberError'
    }
}

class IsExceedCreditLimitNumberError extends Error {
    constructor() {
        super()
        this.message = "Insufficient funds! You exceed your credit limit!!!"
        this.name = 'IsExceedCreditLimitNumberError'
    }
}
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------

class Client {

    #id
    #firstName
    #lastName
    #amountMoney

    constructor(initId, initFirstName, initLastName, initAmountMoney) {
        this.Id = initId
        this.FirstName = initFirstName
        this.LastName = initLastName
        this.AmountMoney = initAmountMoney
    }

    set Id(value) {
        if (value < 0) throw new IsNegativeNumberError()
        if (isNaN(value)) throw new IsNotNumberError()

        this.#id = value
    }

    set FirstName(value) {
        if (value.length === 0) throw new IsEmptyNameError()

        this.#firstName = value
    }

    set LastName(value) {
        if (value.length === 0) throw new IsEmptyNameError()

        this.#lastName = value
    }

    set AmountMoney(value) {
        if (isNaN(value)) throw new IsNotNumberError()

        this.#amountMoney = value
    }

    get Id() {
        return this.#id
    }

    get FirstName() {
        return this.#firstName
    }

    get LastName() {
        return this.#lastName
    }

    get AmountMoney() {
        return this.#amountMoney
    }

    addMoney(value) {
        if (value <= 0) throw new IsNegativeNumberError()
        if (isNaN(value)) throw new IsNotNumberError()

        this.AmountMoney = this.AmountMoney + value
    }

    withdrawMoney(value) {
        if (value < 0) throw new IsNegativeNumberError()
        if (isNaN(value)) throw new IsNotNumberError()
        if (value > this.AmountMoney) throw new IsHighAmountNumberError()

        this.AmountMoney = this.AmountMoney - value
    }

    toString() {
        return `id(${this.Id}),first name(${this.FirstName}), last name(${this.LastName}), amount of money(${this.AmountMoney})$`
    }
}

class GoldenClient extends Client {

    #creditLimit
    #percentageOfUseCreditFunds

    constructor(initId, initFirstName, initLastName, initAmountMoney, initCreditLimit, initPercentageOfUseCreditFunds) {
        super(initId, initFirstName, initLastName, initAmountMoney)

        this.CreditLimit = initCreditLimit
        this.PercentageOfUseCreditFunds = initPercentageOfUseCreditFunds
    }

    get CreditLimit() {
        return this.#creditLimit
    }

    get PercentageOfUseCreditFunds() {
        return this.#percentageOfUseCreditFunds
    }

    set CreditLimit(value) {
        if (value < 0) throw new IsNegativeNumberError()
        if (isNaN(value)) throw new IsNotNumberError()

        this.#creditLimit = value
    }

    set PercentageOfUseCreditFunds(value) {
        if (value < 0) throw new IsNegativeNumberError()
        if (isNaN(value)) throw new IsNotNumberError()
        if (value > 100) throw new IsHighCreditFundsPercentageNumberError()

        this.#percentageOfUseCreditFunds = value
    }

    toString() {
        return `${super.toString()}, credit limit(${this.CreditLimit})$ and percentage of use of credit funds - ${this.PercentageOfUseCreditFunds}%`
    }

    addMoney(value) {
        super.addMoney(value)
    }

    withdrawMoney(value) {
        if (value < 0) throw new IsNegativeNumberError()
        if (isNaN(value)) throw new IsNotNumberError()

        const availableFunds = this.AmountMoney + this.CreditLimit
        if (value > availableFunds) throw new IsExceedCreditLimitNumberError()

        if (value <= this.AmountMoney) {
            this.AmountMoney -= value;
        } else {
            const creditUsed = value - this.AmountMoney;
            this.AmountMoney = -creditUsed
        }
    }

    calcPenalty(daysOverdue) {
        if (daysOverdue < 0) throw new IsNegativeNumberError()
        if (isNaN(daysOverdue)) throw new IsNotNumberError()

        const usedCredit = this.AmountMoney < 0 ? Math.abs(this.AmountMoney) : 0;
        const penalty = usedCredit * (this.PercentageOfUseCreditFunds / 100) * daysOverdue;

        return penalty
    }
}

window.onload = function () {

    try {

        const user1 = new GoldenClient(1, 'Alex', 'Mul', 1500, 500, 1)

        console.log('------------------------------------------')
        console.log(user1.toString())
        console.log('------------------------------------------')

        // Add money
        console.log('Amount money before add 200$ = ', user1.AmountMoney)
        user1.addMoney(200)
        console.log('Amount money after add 200$ = ', user1.AmountMoney)

        console.log('------------------------------------------')

        // Withdraw money
        console.log('Amount money before withdraw 2000$ = ', user1.AmountMoney)
        user1.withdrawMoney(2000)
        console.log('Amount money after withdraw 2000$ ', user1.AmountMoney)

        // Calculation Penalty money
        console.log('Calculation Penalty money for 5 days = ', user1.calcPenalty(5))

        console.log('------------------------------------------')
        console.log(user1.toString())

    } catch (err) {
        if (err instanceof IsNegativeNumberError) {
            console.log(err.message)
        } else if (err instanceof IsNotNumberError) {
            console.log(err.message)
        } else if (err instanceof IsEmptyNameError) {
            console.log(err.message)
        } else if (err instanceof IsHighAmountNumberError) {
            console.log(err.message)
        } else if (err instanceof IsHighCreditFundsPercentageNumberError) {
            console.log(err.message)
        } else if (err instanceof IsExceedCreditLimitNumberError) {
            console.log(err.message)
        } else console.log(err.message)
    }
}
