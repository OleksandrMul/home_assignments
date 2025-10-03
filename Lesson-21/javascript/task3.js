"use strict";
/**
    Відобразити падаючий сніг. Сніжинка з’являється у верхній
    частині екрану (top =0) і з випадковою швидкістю рухається
    вниз (у setInterval викликати метод, у якому додавати крок до top). 
    Як тільки сніжинка досягає нижньої частини екрану
    (top>maxTop) вона знову повинна з’явитись у верхній частині екрану (top=0).
 */


class Snowflake {

    constructor(maxStep) {
        this.maxStep = maxStep
        this.snowflakeEl = null
    }

    getRandomStep() {
        return 1 + Math.floor(Math.random() * 2 * this.maxStep)
    }

    move() {

        let maxTop = window.innerHeight
        let stepTop = this.getRandomStep()
        let stepLeft = this.getRandomStep() > 25 ? 5 : -10
        let topEl = parseInt(this.snowflakeEl.style.top) || 0
        let leftEl = parseInt(this.snowflakeEl.style.left) || 0

        topEl += stepTop
        leftEl += stepLeft
        if (topEl > maxTop) topEl = 0

        this.snowflakeEl.style.top = topEl + 'px'
        this.snowflakeEl.style.left = leftEl + 'px'
    }

    render(selector) {

        this.snowflakeEl = document.querySelector(selector)

        if (this.snowflakeEl) {

            this.snowflakeEl.style.position = 'absolute'
            this.snowflakeEl.style.top = '0px'

            setInterval(() => {
                this.move()
            }, 50)
        }
    }
}

window.onload = function () {

    const snowflakeObject1 = new Snowflake(50)
    snowflakeObject1.render('.snowflake-object--1')

    const snowflakeObject2 = new Snowflake(65)
    snowflakeObject2.render('.snowflake-object--2')

    const snowflakeObject3 = new Snowflake(80)
    snowflakeObject3.render('.snowflake-object--3')
}
