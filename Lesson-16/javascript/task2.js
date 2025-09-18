"use strict";
/**
    Об’єкт “Фірма” (використати члени-класи)
 *  Поля:
        - назва фірми
        - дата заснування (рік, місяць)
        - послуги (назва послуги, вартість, термін виконання)
        - адреси філіалів (країна, місто, вулиця, номер будинку)
    Методи:
        - визначення кількості років існування фірми
        - виведення всіх філіалів фірми у вказаному місті
        - виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу
 */
if (confirm('Почати тестування?')) {
    class Firm {
        constructor(initName, initDateFoundation, initServices, initBranchAddresses) {
            this._currentYear = 2025;
            this._name = '';
            this._dateFoundation = {
                year: 0,
                month: 0
            };
            this._services = [];
            this._branchAddresses = [];
            this.Name = initName;
            this.DateFoundation = initDateFoundation;
            this.Services = initServices;
            this.BranchAddresses = initBranchAddresses;
        }
        get CurrentYear() {
            return this._currentYear;
        }
        get Name() {
            return this._name;
        }
        get DateFoundation() {
            return this._dateFoundation;
        }
        get Services() {
            return this._services;
        }
        get BranchAddresses() {
            return this._branchAddresses;
        }
        set Name(name) {
            if (name.length === 0)
                throw new Error("Error: Name is empty!");
            this._name = name;
        }
        set DateFoundation(dateObj) {
            if (Object.keys(dateObj).length === 0)
                throw new Error("Error: Date foundation object is empty!");
            if (dateObj.year <= this.CurrentYear) {
                this._dateFoundation = JSON.parse(JSON.stringify(dateObj));
            }
            else {
                throw new Error("Error: Year foundation does not be greater than current year!");
            }
        }
        set Services(dataList) {
            if (dataList.length === 0)
                throw new Error("Error: Services list is empty!");
            this._services = JSON.parse(JSON.stringify(dataList));
        }
        set BranchAddresses(dataList) {
            if (dataList.length === 0)
                throw new Error("Error: Branch addresses list is empty!");
            this._branchAddresses = JSON.parse(JSON.stringify(dataList));
        }
        printName(name) {
            document.write(`<h1>Name firm:${name}</h1>`);
        }
        printDateFoundation(dateFoundationObj) {
            document.write(`<h2>Year and month foundation:</h2>`);
            document.write(`<ul>`);
            document.write(`<li>Year - ${dateFoundationObj.year}</li>`);
            document.write(`<li>Month - ${dateFoundationObj.month}</li>`);
            document.write(`</ul>`);
        }
        printServices(servicesList) {
            document.write(`<h2>Services list:</h2>`);
            document.write(`<ul>`);
            servicesList.forEach((serviceObj) => {
                document.write(`<li>${serviceObj.name} - ${serviceObj.cost}$ - ${serviceObj.numDaysToCompletion}days</li>`);
            });
            document.write(`</ul>`);
        }
        printBranchAddresses(branchAddressesList) {
            document.write(`<h2>Branch addresses list:</h2>`);
            document.write(`<ul>`);
            branchAddressesList.forEach((branchAddress) => {
                document.write(`<li>${branchAddress.country}, ${branchAddress.city}, street -  ${branchAddress.street}, house number - ${branchAddress.houseNumber}</li>`);
            });
            document.write(`</ul>`);
        }
        toString() {
            this.printName(this.Name);
            this.printDateFoundation(this.DateFoundation);
            this.printServices(this.Services);
            this.printBranchAddresses(this.BranchAddresses);
        }
        /**
         * Determining the number of years the firm has been in existence
         */
        get numberYearsFirmExistence() {
            return this.CurrentYear - this.DateFoundation.year;
        }
        /**
         * Display of all branches of the firm in the specified city
         */
        displayBranchesListByCity(city) {
            if (city.length === 0)
                throw new Error("Error: City is empty!");
            const filteredBranchAddresses = this.BranchAddresses.filter((branchAddressObj) => branchAddressObj.city === city);
            if (filteredBranchAddresses.length !== 0) {
                document.write(`<h2>All branches of the firm in the specified city - "${city}":</h2>`);
                this.printBranchAddresses(filteredBranchAddresses);
            }
        }
        /**
         * Displaying on the screen services that can be performed for a specified amount of money and a specified period of time
         */
        displayServicesAvailableWithinBudgetAndTime(amountMoney, daysCompletion) {
            if (amountMoney < 1 || daysCompletion < 1)
                throw new Error("Error: Input data is incorrect!");
            const filteredServices = this.Services.filter((serviceObj) => serviceObj.cost === amountMoney && serviceObj.numDaysToCompletion === daysCompletion);
            if (filteredServices.length !== 0) {
                document.write(`<h2>All services of the firm a specified amount of money = ${amountMoney} and a specified period of time = ${daysCompletion}:</h2>`);
                this.printServices(filteredServices);
            }
        }
    }
    const dateFoundation = {
        year: 1994,
        month: 5
    };
    const services = [
        {
            name: "Web Development",
            cost: 5000,
            numDaysToCompletion: 30
        },
        {
            name: "Mobile App Development",
            cost: 8000,
            numDaysToCompletion: 45
        },
        {
            name: "UI/UX Design",
            cost: 5000,
            numDaysToCompletion: 30
        },
        {
            name: "SEO Optimization",
            cost: 1500,
            numDaysToCompletion: 15
        },
        {
            name: "Cloud Migration",
            cost: 10000,
            numDaysToCompletion: 60
        },
        {
            name: "IT Consulting",
            cost: 2000,
            numDaysToCompletion: 10
        },
        {
            name: "Cybersecurity Audit",
            cost: 4000,
            numDaysToCompletion: 25
        },
        {
            name: "E-commerce Platform",
            cost: 12000,
            numDaysToCompletion: 70
        },
        {
            name: "CRM Integration",
            cost: 5000,
            numDaysToCompletion: 30
        },
        {
            name: "ERP System Setup",
            cost: 15000,
            numDaysToCompletion: 90
        }
    ];
    const branchAddresses = [
        {
            country: "USA",
            city: "New York",
            street: "5th Avenue",
            houseNumber: 101
        },
        {
            country: "Canada",
            city: "Toronto",
            street: "King Street",
            houseNumber: 15
        },
        {
            country: "UK",
            city: "London",
            street: "Baker Street",
            houseNumber: 221
        },
        {
            country: "Germany",
            city: "Berlin",
            street: "Unter den Linden",
            houseNumber: 44
        },
        {
            country: "France",
            city: "Paris",
            street: "Champs-Élysées",
            houseNumber: 10
        },
        {
            country: "Italy",
            city: "Rome",
            street: "Via del Corso",
            houseNumber: 88
        },
        {
            country: "Spain",
            city: "Madrid",
            street: "Gran Via",
            houseNumber: 14
        },
        {
            country: "Poland",
            city: "Warsaw",
            street: "Marszałkowska",
            houseNumber: 50
        },
        {
            country: "Ukraine",
            city: "Kyiv",
            street: "Khreshchatyk",
            houseNumber: 22
        },
        {
            country: "Ukraine",
            city: "Kyiv",
            street: "Pochajna",
            houseNumber: 8
        },
        {
            country: "Ukraine",
            city: "Lviv",
            street: "Svobody Avenue",
            houseNumber: 13
        },
        {
            country: "Japan",
            city: "Tokyo",
            street: "Shibuya Street",
            houseNumber: 88
        }
    ];
    function printValue(value, msg) {
        document.write(`<h2>${msg} - ${value}</h2>`);
    }
    try {
        const myFirm = new Firm("MUL-DEV", dateFoundation, services, branchAddresses);
        printValue(myFirm.numberYearsFirmExistence, 'Number of years the firm has been in existence');
        myFirm.displayBranchesListByCity('Kyiv');
        myFirm.displayServicesAvailableWithinBudgetAndTime(5000, 30);
    }
    catch (error) {
        console.log(error);
    }
}
