"use strict";
/**
 * Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць)). 
   Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»
 */

class IsNotNumberError extends Error {
   constructor() {
      super()
      this.message = 'Must be a number!'
      this.name = 'IsNotNumberError'
   }
}

class IsNegativeNumberError extends Error {
   constructor() {
      super()
      this.message = "Number cannot be negative!"
      this.name = 'IsNegativeNumberError'
   }
}

class IsEmptyTitleError extends Error {
   constructor() {
      super()
      this.message = "Title cannot be empty!"
      this.name = 'IsEmptyTitleError'
   }
}

class IsProductListError extends Error {
   constructor() {
      super()
      this.message = "Products list must be an array!"
      this.name = 'IsProductListError'
   }
}

function createElByTagName(tagName) {
   const el = document.createElement(tagName)
   return el
}

class Product {

   #title
   #price
   #quantity
   constructor(initTitle, initPrice, initQuantity) {
      this.Title = initTitle
      this.Price = initPrice
      this.Quantity = initQuantity
   }

   set Title(value) {
      if (value.length === 0) throw new IsEmptyTitleError()
      this.#title = value
   }

   set Price(value) {
      if (value < 0) throw new IsNegativeNumberError()
      if (isNaN(value)) throw new IsNotNumberError()

      this.#price = value
   }

   set Quantity(value) {
      if (value < 0) throw new IsNegativeNumberError()
      if (isNaN(value)) throw new IsNotNumberError()

      this.#quantity = value
   }

   get Title() {
      return this.#title
   }

   get Price() {
      return this.#price
   }

   get Quantity() {
      return this.#quantity
   }

   get TotalPrice() {
      return this.Price * this.Quantity
   }

   toString() {
      return `${this.Title} - ${this.TotalPrice}$`
   }
}

class Shop {

   #productsList
   constructor(initProductsList) {
      this.Products = initProductsList
   }

   set Products(value) {
      if (!Array.isArray(value)) throw new IsProductListError();
      this.#productsList = value
   }

   get Products() {
      return this.#productsList
   }

   [Symbol.iterator]() {
      this.current = 0
      return this
   }

   next() {
      if (this.current < this.Products.length) {

         return { done: false, value: this.Products[this.current++].toString() }
      } else {
         return { done: true }
      }
   }
}

const products = [
   new Product('Wireless Mouse', 450, 25),
   new Product('Mechanical Keyboard', 2100, 10),
   new Product('USB-C Charger', 600, 40),
   new Product('Bluetooth Headphones', 1750, 15),
   new Product('Smartphone Case', 250, 60),
   new Product('Laptop Stand', 890, 12),
   new Product('External SSD 1TB', 3900, 8),
   new Product('HDMI Cable', 180, 50),
   new Product('Gaming Chair', 5400, 5),
   new Product('Webcam Full HD', 1350, 20)
]

window.onload = function () {

   try {

      const cnt = document.querySelector('.page')
      const shop = new Shop(products)

      if (cnt && shop) {

         for (const product of shop) {

            const el = createElByTagName('div')
            el.textContent = product
            cnt.append(el)
         }
      }
   } catch (err) {
      if (err instanceof IsEmptyTitleError) {
         console.log(err.message)
      } if (err instanceof IsNegativeNumberError) {
         console.log(err.message)
      } else if (err instanceof IsNotNumberError) {
         console.log(err.message)
      } else if (err instanceof IsProductListError) {
         console.log(err.message)
      } else console.log(err.message)
   }
}