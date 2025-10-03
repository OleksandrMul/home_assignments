"use strict";
/** Дано список спортсменів. Потрібно сформувати список тих, які
    будуть брати участь у змаганні. При цьому є два стовпці. В
    одному відображені всі спортсмени, в іншому – список тих,
    хто був вибраний. При натисканні на зелену стрілку спортсмен
    переміщається у список для змагань. При натисканні на
    червону стрілку спортсмен переміщається у загальний список.
 */

let generalList = [
    {
        id: 1,
        name: 'John Depp'
    },
    {
        id: 2,
        name: 'Sara Wik'
    },
    {
        id: 3,
        name: 'Den Miro'
    },
    {
        id: 4,
        name: 'Alan Woo'
    },
    {
        id: 5,
        name: 'Alex Mul'
    },
]
let selectedList = []

/**
 * Get list markup
 */
function getListMarkup(listItems, parentLink) {

    if (listItems.length > 0) {

        const ulList = document.createElement('ul')
        ulList.classList.add('competition__list')

        for (const item of listItems) {

            const listItem = document.createElement('li')
            listItem.setAttribute('id', item.id)
            listItem.classList.add('competition__item')

            const participantName = document.createElement('h3')
            participantName.classList.add('competition__name')
            participantName.innerText = item.name

            const btn = document.createElement('button')
            btn.setAttribute('type', 'button')

            if (parentLink.getAttribute('id') === 'general') {
                btn.className = 'competition__button link'
            }
            if (parentLink.getAttribute('id') === 'selected') {
                btn.className = 'competition__button link link--remove'
            }

            listItem.append(participantName)
            listItem.append(btn)
            ulList.append(listItem)
        }

        return ulList
    }
}

/**
 * Remove element from DOM at the Front-End part.
 */
function removeFromFontEnd(e) {
    e.target.parentElement.remove()
}

/**
 * Remove object from DB (general list),
 * and return new updated list with removed el.
 */
function removeFromDB(dbList, id) {
    const removedParticipant = dbList.filter((el) => el.id === id)
    const updatedList = dbList.filter((el) => el.id !== id)

    return [removedParticipant, updatedList]
}

/**
 * Add object to DB (selected list),
 */
function addToDB(objItem, list) {
    list.push(objItem)
}

/**
 * Remove exist element from DOM by CSS selector
 */
function removeIfExists(selectedContainer, selector) {
    if (selectedContainer.querySelector(selector)) {
        selectedContainer.querySelector(selector).remove()
    }
}

/**
 * Add element to DOM at the Front-End part.
 */
function addToFrontEnd(list, selector, selectorList) {
    const container = document.getElementById(selector)
    if (container) {
        removeIfExists(container, selectorList)
        drawList(container, list)
    }
}

/**
 * Move participant between lists.
 */
function moveParticipant(e, fromList, toList, fromContainerId, toContainerId) {

    const clickedBtn = e.target.closest('.competition__button')
    if (clickedBtn) {

        const item = e.target.closest('.competition__item')
        if (item) {

            const id = parseInt(item.getAttribute('id'))

            removeFromFontEnd(e)
            const [removedParticipant, updatedList] = removeFromDB(fromList, id)

            if (fromContainerId === 'general') {
                generalList = [...updatedList]
                addToDB(removedParticipant[0], selectedList)
            } else {
                selectedList = [...updatedList]
                addToDB(removedParticipant[0], generalList)
            }

            addToFrontEnd(toList, toContainerId, '.competition__list')
        }
    }
}

/**
 * Draw list at the Front-end part.
 */
function drawList(parentLink, listItems) {
    parentLink.append(getListMarkup(listItems, parentLink))
}

window.onload = function () {

    const generalContainer = document.getElementById('general')
    const selectedContainer = document.getElementById('selected')

    if (generalContainer) {
        drawList(generalContainer, generalList)
        generalContainer.addEventListener('click', function (e) {
            moveParticipant(e, generalList, selectedList, 'general', 'selected');
        });
    }

    if (selectedContainer) {
        selectedContainer.addEventListener('click', function (e) {
            moveParticipant(e, selectedList, generalList, 'selected', 'general');
        });
    }
};

