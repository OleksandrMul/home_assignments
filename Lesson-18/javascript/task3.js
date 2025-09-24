"use strict";
/**
 *  Подорож складається з 3 етапів. На кожному етапі користувач
    може вибрати
    
    - один з видів транспорту (авто, автобус, літак -
    випадаючий список),
    - харчування (сніданок, обід, вечеря –
    checkbоx)
    - та одного з 3-х гідів(використати - radio buttons).
    
    Ціни визначте самі. Підрахувати загальну вартість.
 */
/**
 * Remove exist element from DOM by CSS selector
 */
function removeIfExs(selector) {
    if (document.querySelector(selector)) {
        document.querySelector(selector).remove();
    }
}
/**
 * Print result
 */
function printRes(res) {
    const result = document.createElement('div');
    result.innerHTML = `Total Cost = <span>${res}$</span>`;
    result.classList.add("trip__result");
    if (document.querySelector('.trip')) {
        removeIfExs('.trip__result');
        document.querySelector('.trip').append(result);
    }
}
/**
* Return total sum value from list
*/
function getSumFromList(someList) {
    let resSum = 0;
    for (const item of someList) {
        if (item.checked) {
            resSum += parseFloat(item.value);
        }
    }
    return resSum;
}
function getTotalCost() {
    const transportationCost = parseFloat(document.querySelector('.type-transport').value);
    const foodList = document.querySelectorAll('.food');
    let totalFoodCost = getSumFromList(foodList);
    const tourGuideList = document.querySelectorAll('.tour-guide');
    let totalGuideCost = getSumFromList(tourGuideList);
    const totalCost = transportationCost + totalFoodCost + totalGuideCost;
    printRes(totalCost);
}
window.onload = function () {
    if (document.getElementById('trip-btn')) {
        document.getElementById('trip-btn').onclick = getTotalCost;
    }
};
