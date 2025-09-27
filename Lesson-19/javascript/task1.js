"use strict";
/** Відображаємо картки товарів, які користувач може вибирати. 
    Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)
 */

function clickProductItem(e) {

    const clickedItem = e.target.closest('.item-product')
    if (clickedItem) clickedItem.classList.toggle('item-product--active')
}

window.onload = function () {

    const containerProducts = document.querySelector('.products__items')

    if (containerProducts) {
        containerProducts.addEventListener('click', clickProductItem);
    }
};