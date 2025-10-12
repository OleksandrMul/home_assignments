"use strict";
/** 
 *  Collection
 *  
 *  Задача 5. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
 *  Задача 6.  Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
 *  Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.
 *  Задача 8. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.
 *  Задача 9. 
        Дано масив показів температур. Підрахувати кількість входжень кожного із показів
        let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
        Заокруглити вверх значення та підрахувати кількість різних показів.
    Задача 10. Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. 
    Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.
 */

// Задача 5. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
document.write('Задача 5 <br>')

const studentsAges = [12, 14, 13, 15, 12, 14, 13, 16, 12, 15];
let map1 = new Map()
for (const age of studentsAges) {
    let count = map1.get(age) ?? 0
    map1.set(age, count + 1)
}

map1.forEach((count, age, mapRef) => {
    document.write(`${age} - ${count}<br>`)
})

let max = Math.max(...map1.keys())
document.write(`Max age = ${max} <br>`)
console.log('Задача 5', map1)

// Задача 6.  Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
document.write('<hr>')
document.write('Задача 6 <br>')
const books = [
    { title: "To Kill a Mockingbird", year: 1960, author: "Harper Lee" },
    { title: "Go Set a Watchman", year: 2015, author: "Harper Lee" },
    { title: "1984", year: 1949, author: "George Orwell" },
    { title: "Animal Farm", year: 1945, author: "George Orwell" },
    { title: "The Great Gatsby", year: 1925, author: "F. Scott Fitzgerald" },
    { title: "Tender Is the Night", year: 1934, author: "F. Scott Fitzgerald" },
    { title: "Pride and Prejudice", year: 1813, author: "Jane Austen" },
    { title: "Emma", year: 1815, author: "Jane Austen" },
    { title: "The Hobbit", year: 1937, author: "J.R.R. Tolkien" },
    { title: "The Lord of the Rings", year: 1954, author: "J.R.R. Tolkien" }
];

let map2 = new Map()
for (const book of books) {
    let count = map2.get(book.author) ?? 0
    map2.set(book.author, count + 1)
}

map2.forEach((count, author, mapRef) => {
    document.write(`${author} - ${count}<br>`)
})
console.log('Задача 6', map2)

// Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.
document.write('<hr>')
document.write('Задача 7 <br>')

const visitors = [
    "alice",
    "bob",
    "alice",
    "charlie",
    "bob",
    "alice",
    "dave",
    "charlie",
    "eve",
    "bob",
    "dave",
    "alice"
];

let map3 = new Map()
for (const visitor of visitors) {
    let count = map3.get(visitor) ?? 0
    map3.set(visitor, count + 1)
}

map3.forEach((count, visitor, mapRef) => {
    document.write(`${visitor} - ${count}<br>`)
})
console.log('Задача 7', map3)

// Задача 8. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.
document.write('<hr>')
document.write('Задача 8 <br>')

const students = [
    { name: "Ivan Petrenko", course: 1, faculty: "Mathematics" },
    { name: "Ivan Panas", course: 1, faculty: "Mathematics" },
    { name: "Olena Kovalenko", course: 2, faculty: "Physics" },
    { name: "Oleg Shevchenko", course: 3, faculty: "Mathematics" },
    { name: "Maria Bondarenko", course: 1, faculty: "Chemistry" },
    { name: "Serhiy Melnyk", course: 2, faculty: "Physics" },
    { name: "Anastasiya Kravets", course: 3, faculty: "Biology" },
    { name: "Dmytro Tkachenko", course: 4, faculty: "Mathematics" },
    { name: "Kateryna Boyko", course: 1, faculty: "Chemistry" },
    { name: "Andriy Fedorov", course: 2, faculty: "Biology" },
    { name: "Svitlana Moroz", course: 3, faculty: "Physics" },
    { name: "Mykola Hrytsenko", course: 4, faculty: "Chemistry" },
    { name: "Yuliya Romanenko", course: 1, faculty: "Mathematics" },
    { name: "Pavlo Koval", course: 2, faculty: "Biology" },
    { name: "Inna Bondar", course: 3, faculty: "Physics" },
    { name: "Oksana Shevchuk", course: 4, faculty: "Mathematics" }
];

let numberOfDifferentFaculties = new Set(students.map((student) => student.faculty))
document.write(`Number of different faculties - ${numberOfDifferentFaculties.size} <br>`)

let map4 = new Map()
for (const student of students) {
    let count = map4.get(student.course) ?? 0
    map4.set(student.course, count + 1)
}

map4.forEach((count, course, mapRef) => {
    document.write(`Course[${course}] - ${count} students<br>`)
})
console.log('Задача 8 => Set', numberOfDifferentFaculties)
console.log('Задача 8 => Map', map4)

// Задача 9. 
//      Дано масив показів температур. Підрахувати кількість входжень кожного із показів
//      Заокруглити вверх значення та підрахувати кількість різних показів.
document.write('<hr>')
document.write('Задача 9 <br>')

let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
let map5 = new Map()
for (const temperature of temperatures) {
    let count = map5.get(temperature) ?? 0
    map5.set(temperature, count + 1)
}

map5.forEach((count, temperature, mapRef) => {
    document.write(`Temperature - ${temperature}°C - ${count}<br>`)
})

let temperaturesCeil = temperatures.map((temperature) => Math.ceil(temperature))
const set2 = new Set(temperaturesCeil)
document.write(`Number of different indicators, rounded temperature values - ${set2.size} <br>`)

console.log('Задача 9 => Map', map5)
console.log('Задача 9 => Set', set2);

// Задача 10. Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. 
//     Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.
document.write('<hr>')
document.write('Задача 10 <br>')

const mathClub = [
    "Ivan Petrenko",
    "Olena Kovalenko",
    "Oleg Shevchenko",
    "Maria Bondarenko",
    "Serhiy Melnyk",
    "Anastasiya Kravets",
    "Dmytro Tkachenko",
    "Kateryna Boyko"
];

const historyClub = [
    "Oleg Shevchenko",
    "Maria Bondarenko",
    "Andriy Fedorov",
    "Svitlana Moroz",
    "Mykola Hrytsenko",
    "Yuliya Romanenko",
    "Pavlo Koval"
];

const setMath = new Set(mathClub)
const setHistory = new Set(historyClub)

const historyToMathCount = setHistory.intersection(setMath).size
const totalUniqueStudents = setHistory.union(setMath).size

document.write(`Number of students from the history group attending the mathematics group - ${historyToMathCount} <br>`)
console.log('Задача 10. Number of students from the history group attending the mathematics group =', historyToMathCount);

document.write(`Total number of unique students - ${totalUniqueStudents} <br>`)
console.log('Задача 10. Total number of unique students =', totalUniqueStudents);