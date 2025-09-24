/**
 * Розробити калькулятор
 * Дії: +, -, *, /
 */

window.onload = function () {

    class Calculator {

        /**
         * Add numbers.
         */
        public static add(firstNumber: number, secondNumber: number): number {
            return firstNumber + secondNumber
        }

        /**
         * Subtract numbers.
         */
        public static subtract(firstNumber: number, secondNumber: number): number {
            return firstNumber - secondNumber
        }

        /**
         * Multiply numbers
         */
        public static multiply(firstNumber: number, secondNumber: number): number {
            return firstNumber * secondNumber
        }

        /**
         * Divide numbers
         */
        public static divide(firstNumber: number, secondNumber: number): number {
            if (secondNumber === 0) throw new Error("Error: You can't divide by zero!")
            return firstNumber / secondNumber
        }
    }

    const actionsObj = {
        "add-btn": Calculator.add,
        "sub-btn": Calculator.subtract,
        "mul-btn": Calculator.multiply,
        "div-btn": Calculator.divide,
    }

    /**
     * Get first and second numbers from inputs
     */
    function getNumbers(): [number, number] {
        const firstNumber = parseFloat((document.getElementById("num1") as HTMLInputElement).value || "0")
        const secondNumber = parseFloat((document.getElementById("num2") as HTMLInputElement).value || "0")
        return [firstNumber, secondNumber]
    }

    /**
     * Set result value to output input for result
     */
    function setResult(resValue: number) {
        if (!isNaN(resValue)) {
            (document.getElementById("res") as HTMLInputElement).value = `${resValue}`
        }
    }

    /**
     * Print error
     */
    function printError(msg: string) {
        (document.getElementById("error") as HTMLInputElement).innerText = `${msg}`
        setTimeout(() => {
            (document.getElementById("error") as HTMLInputElement).innerText = ''
        }, 3000);
    }

    for (const [btnId, actionFunc] of (<any>Object).entries(actionsObj)) {

        const btn = document.getElementById(btnId)

        if (btn) {

            (btn as HTMLInputElement).onclick = () => {

                const [firstNumber, secondNumber] = getNumbers()
                try {

                    const resValue = actionFunc(firstNumber, secondNumber)
                    setResult(resValue)

                } catch (error) {
                    setResult(0)
                    printError((error as Error).message)
                }
            }
        }
    }
}

