"use strict";
var _a;
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
        constructor(initNumberChecking) {
            this.numberChecking = initNumberChecking;
            this.secondNumber = 0;
            this.numberCorrectAnswers = 0;
            this.numberIncorrectAnswers = 0;
        }
        checkingCorrectAnswer(firstNum, secondNum, userAnswer) {
            return firstNum * secondNum === userAnswer;
        }
        getRandomNumber(minV, maxV) {
            return minV + Math.floor(Math.random() * (maxV - minV + 1));
        }
        generateRandomExample() {
            var _a;
            this.secondNumber = this.getRandomNumber(1, 10);
            return parseInt((_a = prompt(`${this.numberChecking} * ${this.secondNumber} = ?`)) !== null && _a !== void 0 ? _a : '-1') || -1;
        }
        render() {
            let userAnswer = 0;
            do {
                userAnswer = this.generateRandomExample();
                if (this.checkingCorrectAnswer(this.numberChecking, this.secondNumber, userAnswer)) {
                    this.numberCorrectAnswers += 1;
                    alert(`True! Number correct answers = ${this.numberCorrectAnswers}, number incorrect answers = ${this.numberIncorrectAnswers}`);
                }
                else {
                    this.numberIncorrectAnswers += 1;
                    alert(`False! Number correct answers = ${this.numberCorrectAnswers}, number incorrect answers = ${this.numberIncorrectAnswers}`);
                }
            } while (userAnswer !== -1);
            document.write(`<h2>Number correct answers = ${this.numberCorrectAnswers}, number incorrect answers = ${this.numberIncorrectAnswers}</h2>`);
        }
    }
    const numberChecking = parseInt((_a = prompt(`Enter the number for checking = ?`)) !== null && _a !== void 0 ? _a : '7') || 7;
    if (numberChecking && numberChecking >= 1 && numberChecking <= 10) {
        const checkMulti = new MultChecker(numberChecking);
        checkMulti.render();
    }
    else {
        throw new Error("Please write correct number for checking from 1 to 9");
    }
}
