/**
    Розробити клас MultChecker для перевірки таблиці множення
 *  Поля:
        Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
        Кількість правильних відповідей
        Кількість неправильних відповідей
 *  Методи:
        Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
        Перевірка правильності вказаної відповіді
        render - виведення інформації про тестування на екран
 */
if (confirm('Почати тестування?')) {

    class MultChecker {

        numberChecking: number
        secondNumber: number
        numberCorrectAnswers: number
        numberIncorrectAnswers: number

        constructor(initNumberChecking: number) {
            this.numberChecking = initNumberChecking
            this.secondNumber = 0
            this.numberCorrectAnswers = 0
            this.numberIncorrectAnswers = 0
        }

        checkingCorrectAnswer(firstNum: number, secondNum: number, userAnswer: number): boolean {
            return firstNum * secondNum === userAnswer
        }

        getRandomNumber(minV: number, maxV: number): number {
            return minV + Math.floor(Math.random() * (maxV - minV + 1))
        }

        generateRandomExample(): number {
            this.secondNumber = this.getRandomNumber(1, 10)
            return parseInt(prompt(`${this.numberChecking} * ${this.secondNumber} = ?`) ?? '-1') || -1
        }

        render(): void {

            let userAnswer: number = 0
            do {
                userAnswer = this.generateRandomExample()
                if (this.checkingCorrectAnswer(this.numberChecking, this.secondNumber, userAnswer)) {

                    this.numberCorrectAnswers += 1
                    alert(`True! Number correct answers = ${this.numberCorrectAnswers}, number incorrect answers = ${this.numberIncorrectAnswers}`)
                } else {

                    this.numberIncorrectAnswers += 1
                    alert(`False! Number correct answers = ${this.numberCorrectAnswers}, number incorrect answers = ${this.numberIncorrectAnswers}`)
                }
            } while (userAnswer !== -1)

            document.write(`<h2>Number correct answers = ${this.numberCorrectAnswers}, number incorrect answers = ${this.numberIncorrectAnswers}</h2>`)
        }
    }

    const numberChecking: number = parseInt(prompt(`Enter the number for checking = ?`) ?? '7') || 7

    if (numberChecking && numberChecking >= 1 && numberChecking <= 10) {
        const checkMulti = new MultChecker(numberChecking)
        checkMulti.render()
    } else {
        throw new Error("Please write correct number for checking from 1 to 9");
    }
}

