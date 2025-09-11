"use strict";
/**
 * Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
 * ----- Властивості ------
    • назва компанії на час розробки (назву періодично змінюють)
    • власник компанії
    • споснсори (масив спонсорів)
      * прізвище спонсора
      * ім’я  спонсора
      * сума вкладень спонсора
    • рік випуску
    • вартість сайту
    Знайти:
    1) загальну вартість усіх сайтів
    2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
    3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
    4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
    5) знайти рік, коли прибуток був найбільшим
    6) упорядкувати список за спаданням прибутку
    7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
 */
/**
 * Prints a value to the document with a custom message.
 * @param {any} value - The value that will be printed.
 * @param {string} msg - A message to display before the value.
 * @returns {void} This function does not return anything.
 */
function printValue(value, msg) {
    document.write(`<h2>${msg} = ${value}</h2>`);
}
/**
 * Prints an array of Sponsor objects to the document with a custom message.
 * Each sponsor is displayed with surname, name, and investment.
 * @param {Sponsor[]} arrObjects - The array of sponsors to be printed.
 * @param {string} msg - A message to display before the list of objects.
 * @returns {void} This function does not return anything.
 */
function printArrayOfSponsorObjects(arrObjects, msg) {
    document.write(`<h2>${msg}</h2><br>`);
    for (const obj of arrObjects) {
        const { surname, name, investment } = obj;
        document.write(`<h3>${surname} - ${name} - ${investment}</h3><br>`);
    }
}
const webSites = [
    {
        title: "InfoPortal",
        owner: "Serhiy Danylko",
        sponsors: [
            { surname: "Shevchenko", name: "Ivan", investment: 150000 },
            { surname: "Tkachenko", name: "Oksana", investment: 12000 }
        ],
        yearRelease: 2001,
        siteCost: 9800,
        profit: 250000
    },
    {
        title: "TradeZone",
        owner: "Ihor Klymenko",
        sponsors: [
            { surname: "Petrenko", name: "Vasyl", investment: 200000 }
        ],
        yearRelease: 2003,
        siteCost: 45000,
        profit: 500000
    },
    {
        title: "MusicWorld",
        owner: "Oleh Marchenko",
        sponsors: [
            { surname: "Bondarenko", name: "Olena", investment: 100000 },
            { surname: "Savchenko", name: "Andriy", investment: 8000 }
        ],
        yearRelease: 2005,
        siteCost: 28000,
        profit: 320000
    },
    {
        title: "AutoDrive",
        owner: "Kateryna Ivanova",
        sponsors: [
            { surname: "Kravets", name: "Oleksandr", investment: 25000 }
        ],
        yearRelease: 2007,
        siteCost: 50000,
        profit: 450000
    },
    {
        title: "GameLand",
        owner: "Volodymyr Petrov",
        sponsors: [
            { surname: "Lysenko", name: "Mykhailo", investment: 12000 },
            { surname: "Horbunov", name: "Roman", investment: 9000 }
        ],
        yearRelease: 2009,
        siteCost: 1000,
        profit: 200000
    },
    {
        title: "TechVision",
        owner: "Andriy Kovalenko",
        sponsors: [
            { surname: "Shevchenko", name: "Petro", investment: 50000 },
            { surname: "Bondarenko", name: "Olena", investment: 30000 }
        ],
        yearRelease: 2020,
        siteCost: 120000,
        profit: 950000
    },
    {
        title: "GreenFuture",
        owner: "Iryna Melnyk",
        sponsors: [
            { surname: "Tkachenko", name: "Oleh", investment: 20000 },
            { surname: "Savchenko", name: "Anna", investment: 40000 },
            { surname: "Kravets", name: "Maksym", investment: 15000 }
        ],
        yearRelease: 2021,
        siteCost: 95000,
        profit: 600000
    },
    {
        title: "EduPro",
        owner: "Volodymyr Kravchuk",
        sponsors: [
            { surname: "Lysenko", name: "Yurii", investment: 60000 }
        ],
        yearRelease: 2019,
        siteCost: 75000,
        profit: 400000
    },
    {
        title: "HealthLine",
        owner: "Kateryna Horobets",
        sponsors: [
            { surname: "Ivanov", name: "Dmytro", investment: 35000 },
            { surname: "Polishchuk", name: "Ihor", investment: 25000 }
        ],
        yearRelease: 2022,
        siteCost: 110000,
        profit: 700000
    },
    {
        title: "TravelNow",
        owner: "Oksana Koval",
        sponsors: [
            { surname: "Melnyk", name: "Taras", investment: 30000 }
        ],
        yearRelease: 2018,
        siteCost: 80000,
        profit: 500000
    },
    {
        title: "ShopOnline",
        owner: "Denys Kryvonis",
        sponsors: [
            { surname: "Tkachuk", name: "Olha", investment: 20000 },
            { surname: "Bondar", name: "Stepan", investment: 25000 }
        ],
        yearRelease: 2017,
        siteCost: 70000,
        profit: 350000
    },
    {
        title: "FoodExpress",
        owner: "Petro Sydorenko",
        sponsors: [
            { surname: "Andriyenko", name: "Maria", investment: 15000 }
        ],
        yearRelease: 2015,
        siteCost: 60000,
        profit: 300000
    },
    {
        title: "CityGuide",
        owner: "Olena Hrytsenko",
        sponsors: [
            { surname: "Levchenko", name: "Marta", investment: 12000 }
        ],
        yearRelease: 2016,
        siteCost: 55000,
        profit: 280000
    },
    {
        title: "StudyHub",
        owner: "Roman Dovzhenko",
        sponsors: [
            { surname: "Kozak", name: "Yulia", investment: 18000 },
            { surname: "Tymoshenko", name: "Danylo", investment: 10000 }
        ],
        yearRelease: 2014,
        siteCost: 50000,
        profit: 320000
    },
    {
        title: "MediaSpace",
        owner: "Natalia Borysenko",
        sponsors: [
            { surname: "Rudenko", name: "Andriy", investment: 250000 }
        ],
        yearRelease: 2013,
        siteCost: 67000,
        profit: 800000
    },
    {
        title: "EcoMarket",
        owner: "Ihor Sydor",
        sponsors: [
            { surname: "Kovalchuk", name: "Larysa", investment: 20000 }
        ],
        yearRelease: 2012,
        siteCost: 48000,
        profit: 290000
    },
    {
        title: "BuildSmart",
        owner: "Yuriy Antonov",
        sponsors: [
            { surname: "Horodetskyi", name: "Pavlo", investment: 30000 }
        ],
        yearRelease: 2011,
        siteCost: 70000,
        profit: 360000
    },
    {
        title: "BookWorld",
        owner: "Maksym Lytvyn",
        sponsors: [
            { surname: "Shapoval", name: "Olha", investment: 22000 }
        ],
        yearRelease: 2010,
        siteCost: 40000,
        profit: 310000
    },
    {
        title: "SportLife",
        owner: "Anastasiya Kyrylenko",
        sponsors: [
            { surname: "Ostapenko", name: "Vitaliy", investment: 300000 }
        ],
        yearRelease: 2023,
        siteCost: 130000,
        profit: 1200000
    },
    {
        title: "NewsToday",
        owner: "Stepan Havrylenko",
        sponsors: [
            { surname: "Yakovenko", name: "Andriy", investment: 50000 }
        ],
        yearRelease: 2024,
        siteCost: 150000,
        profit: 900000
    }
];
const totalSitesCost = webSites.reduce((prevSiteCost, site) => {
    return prevSiteCost + site.siteCost;
}, 0);
printValue(totalSitesCost, '1) Total sites cost');
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
const numberOfSites2000to2009 = webSites.reduce((prevSiteNumber, site) => {
    if (site.yearRelease >= 2000 && site.yearRelease <= 2009) {
        return prevSiteNumber + 1;
    }
    else {
        return prevSiteNumber;
    }
}, 0);
printValue(numberOfSites2000to2009, '2) Number of websites created between 2000 and 2009');
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
const numberOfSitesWithSponsorsOver100000 = webSites.reduce((prevSiteNumber, site) => {
    const totalInvestment = site.sponsors.reduce((prevSum, sponsor) => {
        return prevSum + sponsor.investment;
    }, 0);
    return totalInvestment > 100000 ? prevSiteNumber + 1 : prevSiteNumber;
}, 0);
printValue(numberOfSitesWithSponsorsOver100000, '3) Number of sites where the amount of sponsorship investments was more than 100,000');
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
const totalListSponsors = webSites.reduce((prevArr, site) => {
    for (const sponsor of site.sponsors) {
        prevArr.push(sponsor);
    }
    return prevArr;
}, []);
printArrayOfSponsorObjects(totalListSponsors, '4) Total list sponsors');
// 5) знайти рік, коли прибуток був найбільшим
const yearWithMaxProfit = webSites.reduce((maxSite, site) => site.profit > maxSite.profit ? site : maxSite).yearRelease;
printValue(yearWithMaxProfit, '5) The year when profits were the highest');
// 6) упорядкувати список за спаданням прибутку
webSites.sort((prevSite, site) => site.profit - prevSite.profit);
printValue('Look in the console.log!', '6) Sorted list by descending profit');
console.log('Sorted list by descending profit', webSites);
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
const listObjectsCostUp10000 = JSON.parse(JSON.stringify(webSites.filter((site) => site.siteCost < 10000)));
const listObjectsCostMore10000 = JSON.parse(JSON.stringify(webSites.filter((site) => site.siteCost > 10000)));
printValue('Look in the console.log!', '7) 2 separate lists with copies of objects containing sites with a cost of up to 10,000 and more than 10,000');
console.log('listObjectsCostUp10000', listObjectsCostUp10000);
console.log('listObjectsCostMore10000', listObjectsCostMore10000);
