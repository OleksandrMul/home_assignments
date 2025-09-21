"use strict";
/**
    Створити службове авто (водій, марка, номер). Створити клас
    таким чином, щоб можна було створити тільки один екземпляр цього класу.
 */
if (confirm('Почати тестування?')) {
    class CompanyCar {
        constructor(initDriverName, initCarModel, initLicensePlate) {
            this._driverName = '';
            this._carModel = '';
            this._licensePlate = '';
            if (CompanyCar.CompanyCarRef)
                return CompanyCar.CompanyCarRef;
            this.Driver = initDriverName;
            this.CarModel = initCarModel;
            this.LicensePlate = initLicensePlate;
            CompanyCar.CompanyCarRef = this;
        }
        set Driver(driverName) {
            if (driverName.length === 0)
                throw new Error("Error: Driver name field is empty!");
            this._driverName = driverName;
        }
        get Driver() {
            return this._driverName;
        }
        set CarModel(carModel) {
            if (carModel.length === 0)
                throw new Error("Error: Car model field is empty!");
            this._carModel = carModel;
        }
        get CarModel() {
            return this._carModel;
        }
        set LicensePlate(licensePlate) {
            if (licensePlate.length === 0)
                throw new Error("Error: License plate field is empty!");
            this._licensePlate = licensePlate;
        }
        get LicensePlate() {
            return this._licensePlate;
        }
        toString() {
            return `<h2>Driver name is ${this.Driver}, car model - ${this.CarModel}, license plate - ${this.LicensePlate}</h2>`;
        }
    }
    try {
        const companyCar1 = new CompanyCar('Ivan', 'BWM', 'ZS222KP');
        const companyCar2 = new CompanyCar('Alex', 'KIA', 'PP11111KL');
        const companyCar3 = new CompanyCar('Olga', 'ZAZ', 'AA33445OG');
        document.write(companyCar1.toString());
        document.write(companyCar2.toString());
        document.write(companyCar3.toString());
    }
    catch (error) {
        console.log(error);
    }
}
