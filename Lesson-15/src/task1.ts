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

    type CoupleDance = {
        boyName: string,
        girlName: string
    }

    class DanceDirector {

        namesBoysList: string[];
        namesGirlsList: string[];
        timeInterval: number;

        constructor(initNamesBoysList: string[], initNamesGirlsList: string[], initTimeInterval: number) {
            this.namesBoysList = initNamesBoysList
            this.namesGirlsList = initNamesGirlsList
            this.timeInterval = initTimeInterval
        }

        getRandomName(namesList: string[]): string {
            const randIndex = Math.floor(Math.random() * namesList.length);
            return namesList[randIndex];
        }
        getRandomBoyName(): string {
            return this.getRandomName(this.namesBoysList)
        }
        getRandomGirlName(): string {
            return this.getRandomName(this.namesGirlsList)
        }

        getCoupleForDance(): CoupleDance {
            const boyName: string = this.getRandomBoyName()
            const girlName: string = this.getRandomGirlName()

            return {
                boyName,
                girlName
            }
        }

        run(): void {
            setInterval(() => {

                const coupleDance: CoupleDance = this.getCoupleForDance()
                document.write(`${coupleDance.boyName} - ${coupleDance.girlName}<br>`)
            }, this.timeInterval)
        }
    }

    const boysNames: string[] = [
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
    ]

    const girlsNames: string[] = [
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
    ]

    const playDance = new DanceDirector(boysNames, girlsNames, 5000)
    playDance.run()
}
