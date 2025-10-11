"use strict";
/** 
 * Регулярні вирази
 * 
 *  Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
    Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
    Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
    Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
    Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
    Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
    Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
    Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
    Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
    Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
    Задача 11. 
        Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434» ). 
        Знайти усі такі номери (при цьому символи “-” можуть бути, а можуть і не бути, тобто так «4142343323233434»)
    Задача 12. 
        Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”, але не обов”язково у кінці). 
        Наприклад: “https://company.gov.ua”
    Задача 13. Вибрати усі роки між 2020 та 2049 з отриманого повідомлення
    Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном оператора Киїівстар
    Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
    Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «місяць/рік»
 * 
 */

const wordsArray = [
    "HelloWorld",
    "Sky",
    "JS123",
    "Code4Fun",
    "Brrr",
    "Task1Done",
    "xyz",
    "AIrocks2025",
    "Tst3",
    "NoNumbersHere"
]

const lineOfText = "Today is 12.10.2025, I bought 5 apples, 23 oranges, and 100 bananas! Wow, amazing; isn't it?";
const lineOfTextWithBankCardNumbers = "Payments: 4142-3433-2323-3434, 4142343323233434; wrong: 1234-5678-9012-345, 0000-1111-2222-333, 5500 4400 3300 2200; other numbers: 867-5309, order# 9876543210123456, note: card 6011-0009-9013-9424 and 378282246310005.";
const lineOfTextWithSites = "Check these sites: https://company.gov.ua, http://ministry.gov, https://example.com, https://mygovportal.org, http://gov-example.net, https://company.gov.ua/info";
const lineOfTextWithYears = "Upcoming events: 2019 conference, 2020 workshop, 2023 hackathon, 2035 summit, 2048 festival, 2050 expo.";

// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
const regexForNumbers = /\d/
const resNumbers = wordsArray.filter(str => regexForNumbers.test(str))
console.log(`Рядки, які містять цифри:\n${resNumbers.join("\n")}`)

// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
const regexForStrings = /^\D*$/
const resStrings = wordsArray.filter(str => regexForStrings.test(str))
console.log(`Рядки, які не містять цифри:\n${resStrings.join("\n")}`)

// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
const regexForVowels = /[aeiouAEIOU]/
const resVowels = wordsArray.filter(str => regexForVowels.test(str))
console.log(`Рядки, у яких є голосні літери:\n${resVowels.join("\n")}`)

// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
const regexForNotVowels = /^[^aeiouAEIOU]+$/
const resNotVowels = wordsArray.filter(str => regexForNotVowels.test(str))
console.log(`Рядки, у яких немає голосних літер:\n${resNotVowels.join("\n")}`)

// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
const regexNumOneOrThree = /[13]/
const resNumOneOrThree = wordsArray.filter(str => regexNumOneOrThree.test(str))
console.log(`Рядки, у яких є або цифра 1 або цифра 3:\n${resNumOneOrThree.join("\n")}`)

// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
const regexNumbersInText = /\d+/g
const resNumbersInText = lineOfText.match(regexNumbersInText)
console.log(`Усі числа, які є у тексті:\n${resNumbersInText.join("\n")}`)

// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
const regexAllPunctuationMarks = /[.,!?;:()"'`-]/g
const resAllPunctuationMarks = lineOfText.match(regexAllPunctuationMarks)
console.log(`Усі знаки пунктуації, які були використано:\n${resAllPunctuationMarks.join("\n")}`)

// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
const regexSeparatedByPunctuationMarks = /[,!?\s]+/g
const resSeparatedByPunctuationMarks = lineOfText.split(regexSeparatedByPunctuationMarks)
console.log(`Усі складові, які розділені розділовими знаками:\n${resSeparatedByPunctuationMarks.join("\n")}`)

// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
const regexDate = /\b\d{2}\.\d{2}\.\d{4}\b/g
const resDate = lineOfText.match(regexDate)
console.log(`Так рядок містить дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік):\n${resDate.join("\n")}`)

// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
const regexTwoDigitNumbers = /\b\d{2}\b/g
const countTwoDigitNumbers = lineOfText.match(regexTwoDigitNumbers).length || 0
console.log(`Кількість двоцифрових чисел у рядку: ${countTwoDigitNumbers}`)

// Задача 11. 
//  Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434» ). 
//  Знайти усі такі номери (при цьому символи “-” можуть бути, а можуть і не бути, тобто так «4142343323233434»)
const regexBankCardNumber = /\b(?:\d{4}[-.\s]?){3}(\d{4})\b/g
const resBankCardNumber = lineOfTextWithBankCardNumbers.match(regexBankCardNumber)
console.log(`Так рядок містить номери банківських карток:\n${resBankCardNumber.join("\n")}`)

// Задача 12. 
//  Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”, але не обов”язково у кінці). 
//  Наприклад: “https://company.gov.ua”
const regexAddressWebSite = /https?:\/\/[^\s]*gov[^\s]*/gi
const resAddressWebSite = lineOfTextWithSites.match(regexAddressWebSite) || []
console.log(`Список урядових сайтів:\n${resAddressWebSite.join("\n")}`)

// Задача 13. Вибрати усі роки між 2020 та 2049 з отриманого повідомлення
const regexYearsFrom2020To2049 = /\b(202\d|203\d|204[0-9])\b/g
const resYearsFrom2020To2049 = lineOfTextWithYears.match(regexYearsFrom2020To2049) || []
console.log(`Список років між 2020 та 2049 з отриманого повідомлення:\n${resYearsFrom2020To2049.join("\n")}`)

// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном оператора Київстар
const phoneNumber = '+380501221332'
const regexPhoneNumber = /^\+380(50|67|68|96|97|98)\d{7}$/;

if (regexPhoneNumber.test(phoneNumber)) {
    console.log('Так, цей телефон є телефоном оператора Київстар!')
} else {
    console.log('Ні, цей телефон не є телефоном оператора Київстар...')
}

// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
const userInputName = 'Alex Mul'
const resUserInputName = userInputName.replace(' ', '-')
console.log(`Прізвище та ім’я в одному рядку через дефіс:\n${resUserInputName}`);

// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «місяць/рік»
const userInputDate = '12.05.1994'
const resUserInputDate = userInputDate.replace(/(\d{2})\.(\d{2})\.(\d{4})/g, "$2/$3")
console.log(`Рядкове представлення дати у форматі «місяць/рік»:\n${resUserInputDate}`);