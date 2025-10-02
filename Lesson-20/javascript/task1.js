"use strict";
/** Дано список автомобілів (марка, рік випуску, ціна).
    Сформувати елементи для фільтрування з використанням
    випадаючого списку (контент цих випадаючих списків
    сформувати у залежності від переданого списку).
 */

const listOfCars = [
    { brand: 'Mercedes', yearRelease: 2018, price: 25000 },
    { brand: 'Mercedes', yearRelease: 2018, price: 26000 },
    { brand: 'Mercedes', yearRelease: 2015, price: 22000 },
    { brand: 'Opel', yearRelease: 2000, price: 5000 },
    { brand: 'Opel', yearRelease: 2000, price: 4800 },
    { brand: 'Opel', yearRelease: 2004, price: 15000 },
    { brand: 'Audi', yearRelease: 2000, price: 7000 },
    { brand: 'Audi', yearRelease: 2000, price: 7100 },
    { brand: 'Audi', yearRelease: 1998, price: 650 },
    { brand: 'Audi', yearRelease: 2015, price: 14500 },
    { brand: 'KIA', yearRelease: 2020, price: 15599 },
    { brand: 'KIA', yearRelease: 2020, price: 16000 },
    { brand: 'KIA', yearRelease: 2018, price: 14500 },
    { brand: 'BMW', yearRelease: 2019, price: 27000 },
    { brand: 'BMW', yearRelease: 2019, price: 27500 },
    { brand: 'BMW', yearRelease: 2015, price: 23000 },
    { brand: 'Toyota', yearRelease: 2015, price: 12000 },
    { brand: 'Toyota', yearRelease: 2015, price: 12500 },
    { brand: 'Toyota', yearRelease: 2010, price: 9500 },
    { brand: 'Honda', yearRelease: 2012, price: 9800 },
    { brand: 'Honda', yearRelease: 2012, price: 9900 },
    { brand: 'Honda', yearRelease: 2016, price: 13500 },
    { brand: 'Ford', yearRelease: 2017, price: 13500 },
    { brand: 'Ford', yearRelease: 2017, price: 13700 },
    { brand: 'Ford', yearRelease: 2010, price: 8000 },
    { brand: 'Nissan', yearRelease: 2010, price: 7600 },
    { brand: 'Nissan', yearRelease: 2010, price: 7700 },
    { brand: 'Nissan', yearRelease: 2015, price: 11500 },
    { brand: 'Volkswagen', yearRelease: 2018, price: 17500 },
    { brand: 'Volkswagen', yearRelease: 2018, price: 18000 }
];

/**
 * Storage for user choose
 */
const filters = {
    brand: "",
    yearRelease: ""
};

/** 
 * Handle event change at the selects 
 */
function selectHandler(listItems, filterValue, filtersObj, e) {

    const value = e.target.value
    filtersObj[filterValue] = value

    const newList = listItems.filter(item => {
        return (
            (filtersObj.brand === "" || item.brand === filtersObj.brand) &&
            (filtersObj.yearRelease === "" || item.yearRelease.toString() === filtersObj.yearRelease)
        );
    });

    renderContentSection(newList)
}

/**
 * Remove exist element from DOM by CSS selector
 */
function removeIfExists(selectedContainer, selector) {
    const el = selectedContainer.querySelector(selector)
    if (el) el.remove()
}

/**
 * Return filtered array by key value of object
 */
function filterByValue(value, listItems) {

    const filteredValue = listItems.reduce((prevItem, item) => {
        if (!prevItem.includes(item[value])) {
            prevItem.push(item[value])
        }
        return prevItem
    }, [])

    return filteredValue
}

/**
 * Return select element with options
 */
function createSelectSection(label, id, filteredListItems, listItems, filterValue) {

    const cnt = document.createElement('div')
    cnt.className = 'cars-filter__item item-cars-filter'

    const labelEl = document.createElement('label')
    labelEl.className = 'item-cars-filter__label label'
    labelEl.htmlFor = id
    labelEl.innerText = label

    const selectEl = document.createElement('select')
    selectEl.className = 'item-cars-filter__select select'
    selectEl.id = id

    const defaultOption = document.createElement('option')
    defaultOption.value = ''
    defaultOption.selected = true
    defaultOption.innerText = 'All'
    selectEl.append(defaultOption)

    for (const item of filteredListItems) {

        const optionEl = document.createElement('option')
        optionEl.innerText = item
        optionEl.value = item

        selectEl.append(optionEl)
    }

    selectEl.onchange = selectHandler.bind(this, listItems, filterValue, filters)

    cnt.append(labelEl)
    cnt.append(selectEl)

    return cnt
}

/**
 * Return filters markup
 */
function createFilterElements(listItems) {

    const filteredListBrands = filterByValue('brand', listItems).sort()
    const filteredYearsOfRelease = filterByValue('yearRelease', listItems).sort((a, b) => a - b)

    const container = document.createElement('div')
    container.className = 'cars-filter__items'

    const selectBrandEl = createSelectSection('Brand', 'select-brand', filteredListBrands, listItems, 'brand')
    const selectYearReleaseEl = createSelectSection('Year of release', 'select-year-release', filteredYearsOfRelease, listItems, 'yearRelease')

    container.append(selectBrandEl)
    container.append(selectYearReleaseEl)

    return container
}

/**
 * Create filters element with two selects with options in DOM
 */
function renderFilterSection(listItems) {

    const filtersEl = createFilterElements(listItems)
    const filterContainer = document.querySelector('.cars-filter')

    if (filterContainer && filtersEl) {
        filterContainer.append(filtersEl)
    }
}

/**
 * Return list markup
 */
function createListEl(listItems) {

    const list = document.createElement('ul')
    list.className = 'cars__list list-cars'

    for (const item of listItems) {

        const itemList = document.createElement('li')
        itemList.className = 'list-cars__item title title--small'
        itemList.innerText = `${item.brand} - ${item.yearRelease} p. - ${item.price}$`

        list.append(itemList)
    }

    return list
}

/**
 * Create content element with list of cars items in DOM
 */
function renderContentSection(listItems) {

    const listCarsEl = createListEl(listItems)
    const carsContainer = document.querySelector('.cars__content')

    if (carsContainer && listCarsEl) {
        removeIfExists(carsContainer, '.cars__list.list-cars')
        carsContainer.append(listCarsEl)
    }
}

window.onload = function () {

    renderFilterSection(listOfCars)
    renderContentSection(listOfCars)
};