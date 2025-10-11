"use strict";
/** 
 *  Користувач може змінювати колір фону, що вибирає користувач з використанням <br>
    <input type="color">
    Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін протягом одного сеансу.
 */

function setColor(color) {
    document.body.style.backgroundColor = color
    localStorage.setItem('bkgColor', color)
}
function onSetColor() {
    let color = this.value
    setColor(color)

    let clickNumber = parseInt(
        sessionStorage.getItem('setColorNumber') ?? 0
    )

    sessionStorage.setItem('setColorNumber', ++clickNumber)
    document.getElementById('changeNumber').innerText = clickNumber
}

window.onload = function () {

    const colorSelector = document.getElementById('colorSelector')
    colorSelector.oninput = onSetColor

    let savedColor = localStorage.getItem('bkgColor')
    if (savedColor) {
        setColor(savedColor)
        colorSelector.value = savedColor
    }
}