"use strict";
/**
    Розробити клас «Керівник танців»
 *  Поля:
        Масив імен хлопців
        Масив імен дівчат
 *  Методи:
        Метод випадкового вибору імені хлопця
        Метод випадкового вибору імені дівчини
        Метод виведення пари для танців
        Метод run , який ініціює через кожні 5 секунд виведення нової
        пари для танців
 */
if (confirm('Почати тестування?')) {
    class DanceDirector {
        constructor(initNamesBoysList, initNamesGirlsList, initTimeInterval) {
            this.namesBoysList = initNamesBoysList;
            this.namesGirlsList = initNamesGirlsList;
            this.timeInterval = initTimeInterval;
        }
        getRandomName(namesList) {
            const randIndex = Math.floor(Math.random() * namesList.length);
            return namesList[randIndex];
        }
        getRandomBoyName() {
            return this.getRandomName(this.namesBoysList);
        }
        getRandomGirlName() {
            return this.getRandomName(this.namesGirlsList);
        }
        getCoupleForDance() {
            const boyName = this.getRandomBoyName();
            const girlName = this.getRandomGirlName();
            return {
                boyName,
                girlName
            };
        }
        run() {
            setInterval(() => {
                const coupleDance = this.getCoupleForDance();
                document.write(`${coupleDance.boyName} - ${coupleDance.girlName}<br>`);
            }, this.timeInterval);
        }
    }
    const boysNames = [
        "Andriy",
        "Oleksandr",
        "Dmytro",
        "Yuriy",
        "Serhiy",
        "Vasyl",
        "Petro",
        "Roman",
        "Taras",
        "Maksym"
    ];
    const girlsNames = [
        "Olena",
        "Kateryna",
        "Iryna",
        "Natalia",
        "Oksana",
        "Tetiana",
        "Yuliya",
        "Mariia",
        "Halyna",
        "Anna"
    ];
    const playDance = new DanceDirector(boysNames, girlsNames, 5000);
    playDance.run();
}
