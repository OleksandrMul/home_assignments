/**
 *  Створити клас TDate для роботи із датами у форматі
    “день.місяць.рік”. Дата представляється структурою із трьома
    полями. Реалізувати методи збільшення/зменшення дати на
    певну кількість днів, місяців чи років. Введення та
    виведення дати реалізувати за допомогою методу toString.
 */

if (confirm('Почати тестування?')) {

    class TDate {

        private _data: string[]
        private _day = 0
        private _month = 0
        private _year = 0

        constructor(initData: string) {
            this._data = initData.split('.')
            this.Day = parseInt(this._data[0])
            this.Month = parseInt(this._data[1])
            this.Year = parseInt(this._data[2])
        }

        checkValidation(v: number, msg: string) {
            if (v < 1) throw new Error(`${msg} number is incorrect!`);
        }

        public get Day(): number {
            return this._day
        }
        public get Month(): number {
            return this._month
        }
        public get Year(): number {
            return this._year
        }
        public set Day(day: number) {
            this.checkValidation(day, 'Day')
            this._day = day;
        }
        public set Month(month: number) {
            this.checkValidation(month, 'Month')
            this._month = month;
        }
        public set Year(year: number) {
            this.checkValidation(year, 'Year')
            this._year = year;
        }
        public toString(): string {
            return `<h2>"${this.Day}.${this.Month}.${this.Year}"</h2>`
        }

        public increaseYears(years: number) {
            this.Year = this.getYearInNYears(years)
        }
        public decreaseYears(years: number) {
            this.Year = this.getYearInNYears(-years)
        }

        public increaseMonths(v: number) {
            this.Year = this.getYearInNMonths(this.Year, this.Month, v)
            this.Month = this.getMonthInN(this.Month, v)
        }
        public decreaseMonths(v: number) {
            this.Year = this.getYearInNMonths(this.Year, this.Month, -v)
            this.Month = this.getMonthInN(this.Month, -v)
        }

        public increaseDays(days: number, daysInMonth: number) {

            const totalDays = this.Day + days
            const N = Math.floor((totalDays - 1) / daysInMonth)

            this.Year = this.getYearInNMonths(this.Year, this.Month, N)
            this.Month = this.getMonthInN(this.Month, N)
            this.Day = this.getDayInNDays(totalDays, daysInMonth)
        }
        public decreaseDays(days: number, daysInMonth: number) {

            const totalDays = this.Day - days
            const N = Math.floor((totalDays - 1) / daysInMonth)

            this.Year = this.getYearInNMonths(this.Year, this.Month, N)
            this.Month = this.getMonthInN(this.Month, N)
            this.Day = this.getDayInNDays(totalDays, daysInMonth, true)
        }

        /**
         * Calculates the month after a given number of months
         */
        getMonthInN(month: number, N: number): number {
            return ((Math.floor(month - 1 + N) % 12 + 12) % 12) + 1
        }
        /**
         * Calculates the year after a given number of months
         */
        getYearInNMonths(year: number, month: number, N: number): number {
            return year + (Math.floor((month + N - 1) / 12))
        }
        /**
         * Calculates the year after a given number of years
         */
        getYearInNYears(years: number): number {
            return this.Year + years
        }
        /**
         * Calculates the day after a given number of days
         */
        getDayInNDays(days: number, daysInMonth: number, isDecreaseDays: boolean = false): number {

            if (isDecreaseDays) {
                return ((days - 1) % daysInMonth + daysInMonth) % daysInMonth + 1
            }

            return ((days - 1) % daysInMonth) + 1
        }
    }

    try {

        let d1 = new TDate("18.9.2025")
        document.write("<hr><h2>Test 1</h2><br>")
        document.write(d1.toString())
        d1.increaseDays(50, 31)
        d1.increaseMonths(15)
        document.write(d1.toString())

        let d2 = new TDate("5.1.2020")
        document.write("<hr><h2>Test 2</h2><br>")
        document.write(d2.toString())
        d2.decreaseDays(70, 30)
        d2.decreaseYears(5)
        document.write(d2.toString())

        let d3 = new TDate("10.6.2015")
        document.write("<hr><h2>Test 3</h2><br>")
        document.write(d3.toString())
        d3.increaseDays(400, 31)
        document.write(d3.toString())

        let d4 = new TDate("25.12.2030")
        document.write("<hr><h2>Test 4</h2><br>")
        document.write(d4.toString())
        d4.decreaseDays(800, 30)
        d4.decreaseMonths(40)
        document.write(d4.toString())

        let d5 = new TDate("1.1.2000")
        document.write("<hr><h2>Test 5</h2><br>")
        document.write(d5.toString())
        d5.increaseYears(25)
        d5.decreaseYears(10)
        document.write(d5.toString())

    } catch (error) {
        console.log(error);
    }

}
