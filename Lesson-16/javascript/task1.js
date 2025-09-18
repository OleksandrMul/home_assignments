"use strict";
/**
 *  Створити клас TDate для роботи із датами у форматі
    “день.місяць.рік”. Дата представляється структурою із трьома
    полями. Реалізувати методи збільшення/зменшення дати на
    певну кількість днів, місяців чи років. Введення та
    виведення дати реалізувати за допомогою методу toString.
 */
if (confirm('Почати тестування?')) {
    class TDate {
        constructor(initData) {
            this._day = 0;
            this._month = 0;
            this._year = 0;
            this._data = initData.split('.');
            this.Day = parseInt(this._data[0]);
            this.Month = parseInt(this._data[1]);
            this.Year = parseInt(this._data[2]);
        }
        checkValidation(v, msg) {
            if (v < 1)
                throw new Error(`${msg} number is incorrect!`);
        }
        get Day() {
            return this._day;
        }
        get Month() {
            return this._month;
        }
        get Year() {
            return this._year;
        }
        set Day(day) {
            this.checkValidation(day, 'Day');
            this._day = day;
        }
        set Month(month) {
            this.checkValidation(month, 'Month');
            this._month = month;
        }
        set Year(year) {
            this.checkValidation(year, 'Year');
            this._year = year;
        }
        toString() {
            return `<h2>"${this.Day}.${this.Month}.${this.Year}"</h2>`;
        }
        increaseYears(years) {
            this.Year = this.getYearInNYears(years);
        }
        decreaseYears(years) {
            this.Year = this.getYearInNYears(-years);
        }
        increaseMonths(v) {
            this.Year = this.getYearInNMonths(this.Year, this.Month, v);
            this.Month = this.getMonthInN(this.Month, v);
        }
        decreaseMonths(v) {
            this.Year = this.getYearInNMonths(this.Year, this.Month, -v);
            this.Month = this.getMonthInN(this.Month, -v);
        }
        increaseDays(days, daysInMonth) {
            const totalDays = this.Day + days;
            const N = Math.floor((totalDays - 1) / daysInMonth);
            this.Year = this.getYearInNMonths(this.Year, this.Month, N);
            this.Month = this.getMonthInN(this.Month, N);
            this.Day = this.getDayInNDays(totalDays, daysInMonth);
        }
        decreaseDays(days, daysInMonth) {
            const totalDays = this.Day - days;
            const N = Math.floor((totalDays - 1) / daysInMonth);
            this.Year = this.getYearInNMonths(this.Year, this.Month, N);
            this.Month = this.getMonthInN(this.Month, N);
            this.Day = this.getDayInNDays(totalDays, daysInMonth, true);
        }
        /**
         * Calculates the month after a given number of months
         */
        getMonthInN(month, N) {
            return ((Math.floor(month - 1 + N) % 12 + 12) % 12) + 1;
        }
        /**
         * Calculates the year after a given number of months
         */
        getYearInNMonths(year, month, N) {
            return year + (Math.floor((month + N - 1) / 12));
        }
        /**
         * Calculates the year after a given number of years
         */
        getYearInNYears(years) {
            return this.Year + years;
        }
        /**
         * Calculates the day after a given number of days
         */
        getDayInNDays(days, daysInMonth, isDecreaseDays = false) {
            if (isDecreaseDays) {
                return ((days - 1) % daysInMonth + daysInMonth) % daysInMonth + 1;
            }
            return ((days - 1) % daysInMonth) + 1;
        }
    }
    try {
        let d1 = new TDate("18.9.2025");
        document.write("<hr><h2>Test 1</h2><br>");
        document.write(d1.toString());
        d1.increaseDays(50, 31);
        d1.increaseMonths(15);
        document.write(d1.toString());
        let d2 = new TDate("5.1.2020");
        document.write("<hr><h2>Test 2</h2><br>");
        document.write(d2.toString());
        d2.decreaseDays(70, 30);
        d2.decreaseYears(5);
        document.write(d2.toString());
        let d3 = new TDate("10.6.2015");
        document.write("<hr><h2>Test 3</h2><br>");
        document.write(d3.toString());
        d3.increaseDays(400, 31);
        document.write(d3.toString());
        let d4 = new TDate("25.12.2030");
        document.write("<hr><h2>Test 4</h2><br>");
        document.write(d4.toString());
        d4.decreaseDays(800, 30);
        d4.decreaseMonths(40);
        document.write(d4.toString());
        let d5 = new TDate("1.1.2000");
        document.write("<hr><h2>Test 5</h2><br>");
        document.write(d5.toString());
        d5.increaseYears(25);
        d5.decreaseYears(10);
        document.write(d5.toString());
    }
    catch (error) {
        console.log(error);
    }
}
