'use strict'

const AGE_CHILD_IN_KINDERGARTEN = 2
const AGE_OF_SCHOOLCHILD = 6
const AGE_OF_STUDENT = 18
const AGE_OF_EMPLOYEE = 24
const AGE_OF_PENSIONER = 65

let userAge = parseInt(prompt('Введіть Ваш вік:', 18))

if (userAge >= 0 && userAge <= 100) {
    if (userAge >= AGE_CHILD_IN_KINDERGARTEN && userAge < AGE_OF_SCHOOLCHILD) {
        document.write(`
            <h2 style="color: blue;">Ви є дитиною у садочку.</h2>
        `)
    } else if (userAge >= AGE_OF_SCHOOLCHILD && userAge < AGE_OF_STUDENT) {
        document.write(`
            <h2 style="color: blue;">Ви є школярем.</h2>
        `)
    } else if (userAge >= AGE_OF_STUDENT && userAge < AGE_OF_EMPLOYEE) {
        document.write(`
            <h2 style="color: blue;">Ви є студентом.</h2>
        `)
    } else if (userAge >= AGE_OF_EMPLOYEE && userAge < AGE_OF_PENSIONER) {
        document.write(`
            <h2 style="color: blue;">Ви є працівником.</h2>
        `)
    } else if (userAge >= AGE_OF_PENSIONER) {
        document.write(`
            <h2 style="color: blue;">Ви є пенсіонером.</h2>
        `)
    } else {
        document.write(`
            <h2 style="color: blue;">Ви є немовля.</h2>
        `)
    }
} else {
    document.write(`
        <h2 style="color: red;">Заданий некоректний вік людини!</h2>
    `)
}