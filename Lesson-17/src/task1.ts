/**
    Створити службове авто (водій, марка, номер). Створити клас
    таким чином, щоб можна було створити тільки один екземпляр цього класу.
 */

if (confirm('Почати тестування?')) {

    class CompanyCar {

        private static CompanyCarRef: CompanyCar
        private _driverName = ''
        private _carModel = ''
        private _licensePlate = ''

        constructor(initDriverName: string, initCarModel: string, initLicensePlate: string) {

            if (CompanyCar.CompanyCarRef) return CompanyCar.CompanyCarRef

            this.Driver = initDriverName
            this.CarModel = initCarModel
            this.LicensePlate = initLicensePlate

            CompanyCar.CompanyCarRef = this
        }

        private set Driver(driverName: string) {
            if (driverName.length === 0) throw new Error("Error: Driver name field is empty!");
            this._driverName = driverName;
        }
        public get Driver(): string {
            return this._driverName
        }

        private set CarModel(carModel: string) {
            if (carModel.length === 0) throw new Error("Error: Car model field is empty!");
            this._carModel = carModel;
        }
        public get CarModel(): string {
            return this._carModel
        }

        private set LicensePlate(licensePlate: string) {
            if (licensePlate.length === 0) throw new Error("Error: License plate field is empty!");
            this._licensePlate = licensePlate;
        }
        public get LicensePlate(): string {
            return this._licensePlate
        }

        toString() {
            return `<h2>Driver name is ${this.Driver}, car model - ${this.CarModel}, license plate - ${this.LicensePlate}</h2>`
        }
    }

    try {

        const companyCar1 = new CompanyCar('Ivan', 'BWM', 'ZS222KP')
        const companyCar2 = new CompanyCar('Alex', 'KIA', 'PP11111KL')
        const companyCar3 = new CompanyCar('Olga', 'ZAZ', 'AA33445OG')

        document.write(companyCar1.toString())
        document.write(companyCar2.toString())
        document.write(companyCar3.toString())

    } catch (error) {
        console.log(error);
    }
}
