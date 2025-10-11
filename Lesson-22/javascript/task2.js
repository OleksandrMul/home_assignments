"use strict";
/**
 * Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). 
   Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). 
   Якщо користувач натискає на «Ок», то видаляти цю задачу.
 */

if (confirm('Почати тестування?')) {

   const todoList = [
      "Go for a morning run",
      "Finish homework",
      "Buy groceries",
      "Read a chapter of a book",
      "Call a friend"
   ]

   function loadToDoList(list) {

      let userData = localStorage.getItem('todoList')
      if (!userData) {

         localStorage.setItem('todoList', JSON.stringify(list))
      }
   }

   function getRandomIndex(list) {
      return Math.floor(Math.random() * list.length)
   }

   function getRandomTask(list, index) {
      return list[index]
   }

   function getRandomCase() {

      let userData = JSON.parse(localStorage.getItem('todoList')) || []
      if (!userData || userData.length === 0) {
         alert("To-do list is empty!")
         clearInterval(randomTaskInterval)
         return
      }

      const randomIndex = getRandomIndex(userData)
      const randomTask = getRandomTask(userData, randomIndex)

      const userAnswer = confirm(`Your task: "${randomTask}". Did you complete it?`)
      if (userAnswer) {

         userData.splice(randomIndex, 1)
         localStorage.setItem('todoList', JSON.stringify(userData))
      }
   }

   let randomTaskInterval

   window.onload = function () {

      loadToDoList(todoList)
      randomTaskInterval = setInterval(getRandomCase, 1000)
   }
}
