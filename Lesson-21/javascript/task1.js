"use strict";
/** 
 * Date
 * 
 *  Задача 1. Виводити на екран скільки хвилин користувач вже на сайті
    Задача 2. Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває. 
    Задача 3. Визначити скільки залишилось до кінця робочого дня (до 17.00)
    Задача 4. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)
    Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те,  скільки хвилин залишилось до початку робочого дня (початок о 8.00).
    Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.
    Задача 7. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти найстаршого студента)
    Задача 8. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.
    Задача 9. Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.
    Задача 10 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.
    Задача 11. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.
 * 
 */

// FUNCTIONS - HELPERS -------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
/**
    Returns a number as two digits, 
    adding a leading zero if it is less than 10.
 */
function formatTime(value) {
    return (value < 10 ? `0${value}` : value)
}

/**
 * Create and return HTML el by tag name.
 */
function createElByTagName(tagName) {
    const el = document.createElement(tagName)
    return el
}

/**
 * Return current time by timezone.
 */
function getHoursByCity(timeZone, locales) {

    if (timeZone && locales) {

        const searchTime = new Date().toLocaleString(locales, {
            timeZone: timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });

        return searchTime
    }
}

/**
 * Return list markup
 */
function createListEl(listItems, locals) {

    const list = createElByTagName('ul')

    for (const item of listItems) {

        const itemList = createElByTagName('li')
        const timeCity = getHoursByCity(item, locals)

        itemList.innerText = `${item} - ${timeCity}`

        list.append(itemList)
    }

    return list
}

/**
 * Remove exist element from DOM by CSS selector
 */
function removeIfExists(selectedContainer, selector) {
    const el = selectedContainer.querySelector(selector)
    if (el) el.remove()
}

/**
 * Return new array with random numbers 
 */
function generateRandomArrayNumbers(minV, maxV, numItems) {
    return Array.from({ length: numItems }, () => generateRandomNumber(minV, maxV))
}

/**
 * Return random number in the range from min to max values
 */
function generateRandomNumber(min, max) {
    return (min + Math.floor(Math.random() * (max - min + 1)))
}

/**
    The function correctly parses a date in the format "day.month.year" 
    and returns a new correct date object.
 */
function parseDate(dateString) {
    const [day, month, year] = dateString.split('.').map((el) => Number(el));
    return new Date(year, month - 1, day);
}

/**
    Return time (seconds) after sorting the array with the help of the bubble sort algorithm
 */
function getTimeBubleSort(list) {

    const arrList = [...list]
    const startDate = new Date()

    let change;
    let endIndex = arrList.length;
    do {
        change = false;
        for (let i = 1; i < endIndex; i++) {
            if (arrList[i - 1] > arrList[i]) {
                const tmp = arrList[i - 1];
                arrList[i - 1] = arrList[i];
                arrList[i] = tmp;
                change = true;
            }
        }
        endIndex--;
    } while (change);

    const endDate = new Date()
    return (endDate - startDate) / 1000
}

/**
    Return time (seconds) after sorting the array with the help of the insert sort algorithm
 */
function getTimeInsertSort(list) {

    const arrList = [...list]
    const startDate = new Date()

    for (let k = 1; k < arrList.length; k++) {
        const currentElement = arrList[k];
        let i = k - 1;
        while (i >= 0 && arrList[i] > currentElement) {
            arrList[i + 1] = arrList[i];
            i = i - 1;
        }
        arrList[i + 1] = currentElement;
    }

    const endDate = new Date()
    return (endDate - startDate) / 1000
}
// -------------------------------------------------------------------


// -------------------------------------------------------------------
// -------------------------------------------------------------------
// TASKS SOLUTIONS ---------------------------------------------------
// -------------------------------------------------------------------
/**
 * Задача 1. Виводити на екран скільки хвилин користувач вже на сайті
 */
function task_1(cntSelector) {

    const cnt = document.querySelector(cntSelector)
    if (!cnt) return

    const start = Date.now()

    setInterval(() => {

        const current = Date.now()
        const different = current - start

        const totalSec = Math.floor(different / 1000)
        const hours = Math.floor(totalSec / 3600)
        const minutes = Math.floor((totalSec % 3600) / 60)
        const seconds = totalSec % 60

        cnt.innerText = `Task-1: You are already on site - ${formatTime(hours)} hours. ${formatTime(minutes)} min. : ${formatTime(seconds)} sec.`
    }, 1000)
}

/**
 * Задача 2. Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває. 
 */
function task_2(startTime, cntSelector, timeProcedure = 30) {

    const cnt = document.querySelector(cntSelector)
    if (!cnt) return

    const [hours, minutes] = startTime.split(':').map((el) => Number(el))

    const start = new Date()
    start.setHours(hours, minutes, 0, 0)

    const end = new Date(start.getTime() + timeProcedure * 60 * 1000)

    const current = new Date()

    if (current < end) {
        cnt.innerText = `Task-2: The procedure is still ongoing...
            Current time = ${formatTime(current.getHours())}:${formatTime(current.getMinutes())}
            Procedure start = ${formatTime(start.getHours())}:${formatTime(start.getMinutes())}
            Procedure end = ${formatTime(end.getHours())}:${formatTime(end.getMinutes())}
            Duration = ${formatTime(timeProcedure)} min`
    } else {
        cnt.innerText = `Task-2: Procedure completed!`
    }
}

/**
    Задача 3. Визначити скільки залишилось до кінця робочого дня (до 17.00)
 */
function task_3(cntSelector, timeEndWorkingDay = '17:00') {

    const cnt = document.querySelector(cntSelector)
    if (!cnt) return

    const [hours, minutes] = timeEndWorkingDay.split(':').map((el) => Number(el))
    const end = new Date()
    end.setHours(hours, minutes, 0, 0)

    setInterval(() => {

        const current = new Date()
        const different = end - current

        const diffTotalSec = Math.floor(different / 1000)
        const diffHours = Math.floor(diffTotalSec / 3600)
        const diffMinutes = Math.floor((diffTotalSec % 3600) / 60)
        const diffSeconds = diffTotalSec % 60

        if (different > 0) {
            cnt.innerText = `Task-3: Time left until the end of the workday - ${formatTime(diffHours)} hours. ${formatTime(diffMinutes)} min. : ${formatTime(diffSeconds)} sec.`
        } else {
            cnt.innerText = `Task-3: The working day is already over! Go home =)`
        }
    }, 1000)

}

/**
    Задача 4. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)
 */
function task_4(cntSelector, dateTimeString) {

    const cnt = document.querySelector(cntSelector)
    if (!cnt) return

    const date = new Date(dateTimeString)
    const currDate = new Date()
    const dayOfWeek = currDate.getDay() === 0 ? 7 : currDate.getDay()

    const monDate = new Date(currDate)
    monDate.setHours(0, 0, 0, 0)
    monDate.setDate(currDate.getDate() - (dayOfWeek - 1))

    const sunDate = new Date(monDate)
    sunDate.setHours(23, 59, 59, 999)
    sunDate.setDate(monDate.getDate() + 6)

    if (date >= monDate && date <= sunDate) {
        cnt.innerText = `Task-4: The specified date and time (${date}) 
            are within the current week, (from Monday 0 hours, 0 minutes, to Sunday 23 hours, 59 minutes)`
    } else {
        cnt.innerText = `Task-4: The specified date and time do not belong to the current week!`
    }
}

/**
    Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те,
    скільки хвилин залишилось до початку робочого дня (початок о 8.00).
 */
function task_5(cntSelector, timeStartWorkingDay = '8:00') {

    const cnt = document.querySelector(cntSelector)
    if (!cnt) return

    const [hours, minutes] = timeStartWorkingDay.split(':').map((el) => Number(el))
    const startWorkDate = new Date()
    startWorkDate.setHours(hours, minutes, 0, 0)

    setInterval(() => {

        const current = new Date()
        const different = startWorkDate - current

        if (different > 0) {

            const diffTotalSec = Math.floor(different / 1000)
            const diffHours = Math.floor(diffTotalSec / 3600)
            const diffMinutes = Math.floor((diffTotalSec % 3600) / 60)
            const diffSeconds = diffTotalSec % 60

            cnt.innerText = `Task-5: Time left until the start of the workday - ${formatTime(diffHours)} hours. ${formatTime(diffMinutes)} min. : ${formatTime(diffSeconds)} sec.`
        } else {
            cnt.innerText = `Task-5: Hello!`
        }
    }, 1000)
}

/**
    Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.
 */
function task_6(cntSelector, listOfTimeZones = ['Europe/London', 'Europe/Paris', 'Australia/Sydney'], locals = 'en-GB') {

    const cnt = document.querySelector(cntSelector)
    if (!cnt) return
    cnt.innerText = 'Task-6:'

    if (listOfTimeZones.length > 0) {
        setInterval(() => {
            const listCarsEl = createListEl(listOfTimeZones, locals)
            listCarsEl.className = 'time-list'

            removeIfExists(cnt, '.time-list')
            cnt.append(listCarsEl)
        }, 1000)
    }
}

/**
    Задача 7. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік).
    Знайти найстаршого студента)
 */
function task_7(cntSelector,
    studentsList = [
        { name: 'John Smith', dob: '12.03.2000' },
        { name: 'Sara Johnson', dob: '25.07.1999' },
        { name: 'Michael Brown', dob: '08.11.2001' },
        { name: 'Alex Mul', dob: '12.05.1994' },
        { name: 'Daniel Wilson', dob: '30.05.1998' }
    ]) {

    const cnt = document.querySelector(cntSelector)
    if (!cnt) return

    if (studentsList.length > 0) {

        const oldestStudent = studentsList.reduce((oldest, student) => {

            const oldestDob = parseDate(oldest.dob)
            const studentDob = parseDate(student.dob)

            return studentDob < oldestDob ? student : oldest
        });

        const dobDate = parseDate(oldestStudent.dob)
        const currentDate = new Date();

        let ageValue = currentDate.getFullYear() - dobDate.getFullYear()
        const monthValue = currentDate.getMonth() - dobDate.getMonth()
        if (monthValue < 0 || (monthValue === 0 && currentDate.getDate() < dobDate.getDate())) {
            ageValue--;
        }

        cnt.innerText = `Task-7: The oldest student is ${oldestStudent.name} - ${oldestStudent.dob}, has ${ageValue} years old.`
    }
}

/**
 *  Задача 8. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.
 */
function task_8(cntSelector) {

    const cnt = document.querySelector(cntSelector)
    if (!cnt) return

    const startDate = new Date()

    const moveMouseHandler = function () {

        document.removeEventListener('mousemove', moveMouseHandler, false);

        const endDate = new Date()
        const res = (endDate - startDate) / 1000

        cnt.innerText = `Task-8: Seconds passed after move mouse = ${res}s`
    };

    document.addEventListener('mousemove', moveMouseHandler, false);
}

/**
    Задача 9. Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки вводиться). 
    Визначити чи відпустка вже триває і чи не закінчилась.
 */
function task_9(cntSelector, restDayNum = 200, restStartDate) {

    const cnt = document.querySelector(cntSelector)
    if (!cnt) return

    const currDate = new Date()
    const startRestDate = parseDate(restStartDate)
    const endRestDate = new Date(startRestDate)
    endRestDate.setDate(endRestDate.getDate() + restDayNum)

    if (currDate >= startRestDate && currDate <= endRestDate) {
        cnt.innerText = `The vacation continues (from ${startRestDate.toDateString()} to ${endRestDate.toDateString()})`
    } else if (currDate < startRestDate) {
        cnt.innerText = `The vacation hasn't started yet (beginning ${startRestDate.toDateString()})`
    } else {
        cnt.innerText = `The vacation is already over (end of ${endRestDate.toDateString()})`
    }
}

/**
    Задача 10. Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. 
    Визначити чи є він придатним на даний момент.
 */
function task_10(cntSelector, titleProduct, productionDate, numberDaysValidity = 30) {

    const cnt = document.querySelector(cntSelector)
    if (!cnt) return

    const currDate = new Date()
    const prodDate = parseDate(productionDate)
    if (currDate < prodDate) {
        cnt.innerText = `The product "${titleProduct}" has not produced yet! Please wait...`
        return
    }

    const endValidDate = new Date(prodDate)
    endValidDate.setDate(endValidDate.getDate() + numberDaysValidity)

    if (currDate <= endValidDate) {
        cnt.innerText = `The product "${titleProduct}" is still valid (from ${prodDate.toDateString()} to ${endValidDate.toDateString()})`
    } else {
        cnt.innerText = `The product "${titleProduct}" has expired!!! (expired on ${endValidDate.toDateString()})`
    }
}

/**
    Задача 11. Сформувати масив з 1000 елементів від 1 до 800. 
    Порівняти час сортування бульбашкою і  вставкою.
 */
function task_11(cntSelector, minVal, maxVal, numOfItems) {

    const cnt = document.querySelector(cntSelector)
    if (!cnt) return
    cnt.innerText = 'Task-11:'

    const arrRandomNumbers = generateRandomArrayNumbers(minVal, maxVal, numOfItems)

    const timeBubleSort = getTimeBubleSort(arrRandomNumbers)
    const timeInsertSort = getTimeInsertSort(arrRandomNumbers)

    const timeBubleSortEl = createElByTagName('div')
    timeBubleSortEl.innerText = `Bubble array sort of ${numOfItems} elements => Time : ${timeBubleSort}s`

    const timeInsertSortEl = createElByTagName('div')
    timeInsertSortEl.innerText = `Insert array sort of ${numOfItems} elements => Time : ${timeInsertSort}s`

    cnt.append(timeBubleSortEl)
    cnt.append(timeInsertSortEl)
}

window.onload = function () {

    task_1('.task-1')
    task_2('20:35', '.task-2')
    task_3('.task-3', '22:15')
    task_4('.task-4', 'Thu Oct 02 2025 18:50:35')
    task_5('.task-5', '22:00')
    task_6('.task-6')
    task_7('.task-7')
    task_8('.task-8')
    task_9('.task-9', 15, '19.09.2025')
    task_10('.task-10', 'Yogurt', '25.09.2025')
    task_11('.task-11', 1, 800, 1000)
}


