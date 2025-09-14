"use strict";
/**
    Розробити клас Banner
 *  Поля:
        Масив об’єктів ( графічних зображень та посилань на сайти)
 *  Методи:
        Метод випадкового вибору об’єкта (графічного зображення та посилання)
        Метод виведення випадкового банера
 */
if (confirm('Почати тестування?')) {
    const imageLinks = [
        { imageUrl: "https://picsum.photos/200/300?random=3", siteUrl: "https://wikipedia.org" },
        { imageUrl: "https://picsum.photos/200/300?random=4", siteUrl: "https://github.com" },
        { imageUrl: "https://picsum.photos/200/300?random=5", siteUrl: "https://stackoverflow.com" },
        { imageUrl: "https://picsum.photos/200/300?random=6", siteUrl: "https://google.com" },
        { imageUrl: "https://picsum.photos/200/300?random=7", siteUrl: "https://facebook.com" },
        { imageUrl: "https://picsum.photos/200/300?random=9", siteUrl: "https://linkedin.com" },
        { imageUrl: "https://picsum.photos/200/300?random=10", siteUrl: "https://youtube.com" }
    ];
    class Banner {
        constructor(arrOfObjects) {
            this.objectsList = arrOfObjects;
        }
        getRandomBanner() {
            const randIndex = Math.floor(Math.random() * this.objectsList.length);
            return this.objectsList[randIndex];
        }
        printBanner() {
            const randomObject = this.getRandomBanner();
            document.write(`<img src="${randomObject.imageUrl}" alt="Banner for ${randomObject.siteUrl}"> - <a target="_blank" href="${randomObject.siteUrl}">${randomObject.siteUrl}</a>`);
        }
    }
    const banner = new Banner(imageLinks);
    banner.printBanner();
}
