'use strict'

function generateRandomNumber(min, max) {

    return (min + Math.floor(Math.random() * (max - min + 1)))
}

function createRandomImage(args, randNum) {

    let randomImageHTML = '<div class="some-image">'
    randomImageHTML += `<img src="${args[randNum]}" alt="Image - ${randNum + 1}">`
    randomImageHTML += '</div>'

    return randomImageHTML
}

function printRandomImage() {

    if (arguments.length > 0) {

        let randomNumber = generateRandomNumber(0, arguments.length - 1)
        const randomImage = createRandomImage(arguments, randomNumber)

        document.write(randomImage)
    } else {
        throw new Error("Error: No image paths!");
    }
}

printRandomImage(
    '../img/bouquets/bouquet_01.avif',
    '../img/bouquets/bouquet_02.avif',
    '../img/bouquets/bouquet_03.avif',
    '../img/bouquets/bouquet_04.avif'
)