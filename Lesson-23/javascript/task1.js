"use strict";
/** 
 * Дано клас PhoneNumber. 
   Створити функцію перетворення до string, при якому на основі номера виводиться оператор (050….  -> MTC, 096… -> Kyivstar, ….)
 */

class IsValidPhoneNumber extends Error {
   constructor() {
      super()
      this.message = "Phone number is not valid!"
      this.name = 'IsValidPhoneNumber'
   }
}

class PhoneNumber {

   #number
   constructor(initNumber) {
      this.Number = initNumber
   }

   set Number(value) {
      if (!this.isValidPhoneNumber(value)) throw new IsValidPhoneNumber()
      this.#number = value
   }

   get Number() {
      return this.#number
   }

   isValidPhoneNumber(number) {
      const regex = /^\+380\d{9}$/
      return regex.test(number)
   }

   [Symbol.toPrimitive](hint) {

      if (hint === "string") {

         const prefix = this.Number.slice(4, 6);
         let operator;

         switch (prefix) {
            case "50":
            case "66":
            case "95":
            case "99":
               operator = "MTC";
               break;
            case "67":
            case "68":
            case "96":
            case "97":
            case "98":
               operator = "KyivStar";
               break;
            default:
               operator = "Unknown operator";
         }

         return operator;
      }
   }
}

window.onload = function () {

   try {

      const phoneNum1 = new PhoneNumber('+380961234567')
      const phoneNum2 = new PhoneNumber('+380501234567')
      const phoneNum3 = new PhoneNumber('+380981234567')
      const phoneNum4 = new PhoneNumber('+380631234567')

      document.write(`${phoneNum1} <br>`)
      document.write(`${phoneNum2} <br>`)
      document.write(`${phoneNum3} <br>`)
      document.write(`${phoneNum4} <br>`)

   } catch (err) {
      if (err instanceof IsValidPhoneNumber) {
         console.log(err.message)
      } else console.log(err.message)
   }
}
