'use strict'

function createBanner(image, description, title, link) {
    let bannerHTML = `<a href="${link}" class="sale-banner">`
    bannerHTML += '<div class="sale-banner__body">'
    bannerHTML += `<h3 class="sale-banner__title">${title}</h3>`
    bannerHTML += '</div>'
    bannerHTML += `<img src="${image}" alt="${description}" class="sale-banner__image">`
    bannerHTML += '</a>'

    return bannerHTML
}

function printBanner(image, description = 'image', title = 'Banner', link = '#') {

    const banner = createBanner(image, description, title, link)
    document.write(banner)
}

printBanner(
    '../img/banners/promo_veggie_bag.avif',
    'A paper bag overflowing with a variety of fresh vegetables and fruits, showcasing vibrant colors and textures',
    '75% off',
    'https://www.google.com'
)

printBanner(
    '../img/banners/fresh_fruit_offer.avif',
    'A paper bag overflowing with a variety of fresh vegetables and fruits, showcasing vibrant colors and textures',
    ' Save 37% on Every Order',
    'https://www.google.com'
)