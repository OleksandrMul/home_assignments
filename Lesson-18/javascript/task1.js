"use strict";
/**
 * Розробити калькулятор
 * Дії: +, -, *, /
 */
window.onload = function () {
    class Calculator {
        /**
         * Add numbers.
         */
        static add(firstNumber, secondNumber) {
            return firstNumber + secondNumber;
        }
        /**
         * Subtract numbers.
         */
        static subtract(firstNumber, secondNumber) {
            return firstNumber - secondNumber;
        }
        /**
         * Multiply numbers
         */
        static multiply(firstNumber, secondNumber) {
            return firstNumber * secondNumber;
        }
        /**
         * Divide numbers
         */
        static divide(firstNumber, secondNumber) {
            if (secondNumber === 0)
                throw new Error("Error: You can't divide by zero!");
            return firstNumber / secondNumber;
        }
    }
    const actionsObj = {
        "add-btn": Calculator.add,
        "sub-btn": Calculator.subtract,
        "mul-btn": Calculator.multiply,
        "div-btn": Calculator.divide,
    };
    /**
     * Get first and second numbers from inputs
     */
    function getNumbers() {
        const firstNumber = parseFloat(document.getElementById("num1").value || "0");
        const secondNumber = parseFloat(document.getElementById("num2").value || "0");
        return [firstNumber, secondNumber];
    }
    /**
     * Set result value to output input for result
     */
    function setResult(resValue) {
        if (!isNaN(resValue)) {
            document.getElementById("res").value = `${resValue}`;
        }
    }
    /**
     * Print error
     */
    function printError(msg) {
        document.getElementById("error").innerText = `${msg}`;
        setTimeout(() => {
            document.getElementById("error").innerText = '';
        }, 3000);
    }
    for (const [btnId, actionFunc] of Object.entries(actionsObj)) {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.onclick = () => {
                const [firstNumber, secondNumber] = getNumbers();
                try {
                    const resValue = actionFunc(firstNumber, secondNumber);
                    setResult(resValue);
                }
                catch (error) {
                    setResult(0);
                    printError(error.message);
                }
            };
        }
    }
};
