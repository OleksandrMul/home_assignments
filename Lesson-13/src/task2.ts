/**
 *  Тренажер додавання. Кожні 10 секунд користувачу задають випадковий
    приклад з додавання двох цифр і робиться перевірка.
 */

if (confirm('Почати тестування?')) {
    const MIN_NUMBER: number = 1
    const MAX_NUMBER: number = 9

    function generateRandomNumber(min: number, max: number): number {
        return min + Math.floor(Math.random() * (max - min + 1))
    }

    function giveRandomExample(minNumber: number, maxNumber: number): void {
        const num1: number = generateRandomNumber(minNumber, maxNumber)
        const num2: number = generateRandomNumber(minNumber, maxNumber)

        const resSum: number = num1 + num2
        const userInputStr: string | null = prompt(`${num1} + ${num2} = ?`)
        const userInput: number = userInputStr !== null ? parseInt(userInputStr) : NaN

        if (isNaN(userInput)) {
            alert('Please write a number!')
        } else if (userInput === resSum) {
            alert('Ok!')
        } else {
            alert('Not ok...')
        }
    }

    setInterval((): void => {
        giveRandomExample(MIN_NUMBER, MAX_NUMBER)
    }, 10000)
}
