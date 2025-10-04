"use strict";
/** 
 * Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули) 
 * та оцінку (перевіряти чи є числом, чи від 1 до 100). 
   Вивести чи зможе він виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі) . 
   Обробку усіх помилок зробити з використанням відповідних класів.
 */

//------------------------------------------------
// Custom Errors class exceptions ----------------
//------------------------------------------------
class IsNotNumberError extends Error {
   constructor() {
      super()
      this.message = 'Must be a number!'
      this.name = 'IsNotNumberError'
   }
}

class IsTooLowMonthNumberError extends Error {
   constructor(currentNumber) {
      super()
      this.currentNumber = currentNumber
      this.message = 'The month number must be greater than or equal to 1!'
      this.name = 'IsTooLowMonthNumberError'
   }
}

class IsTooLowAssessmentNumberError extends Error {
   constructor(currentNumber) {
      super()
      this.currentNumber = currentNumber
      this.message = 'The assessment number must be greater than or equal to 1!'
      this.name = 'IsTooLowAssessmentNumberError'
   }
}

class IsTooHighMonthNumberError extends Error {
   constructor(currentNumber) {
      super()
      this.currentNumber = currentNumber
      this.message = 'The month number must be less than or equal to 12!'
      this.name = 'IsTooHighMonthNumberError'
   }
}

class IsTooHighAssessmentNumberError extends Error {
   constructor(currentNumber) {
      super()
      this.currentNumber = currentNumber
      this.message = 'The assessment number must be less than or equal to 100!'
      this.name = 'IsTooHighAssessmentNumberError'
   }
}

class IsVacationMonthNumberError extends Error {
   constructor(currentNumber) {
      super()
      this.currentNumber = currentNumber
      this.message = 'Summer vacation months (June, July, August) are not part of the study semester!'
      this.name = 'IsVacationMonthNumberError'
   }
}

class IsLastMonthNumberError extends Error {
   constructor(currentNumber) {
      super()
      this.currentNumber = currentNumber
      this.message = 'This is the last month of the semester!'
      this.name = 'IsLastMonthNumberError'
   }
}
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------

/**
 * Shows an error message in both the console and on the web page,
 * and resets a specific input field in the form.
 */
function showError(err, cnt, fieldSelector, resetValue, formElement) {
   console.log(err.message)
   document.querySelector(cnt).innerText = err.message
   formElement.querySelector(fieldSelector).value = resetValue
}

/**
 * Return boolean value true or false,
 * depends on student assessment and month of study.
 */
function isAssessmentBeCorrected(month, assessment) {

   const BAD_ASSESSMENT = 60
   const LAST_MONTH_AUTUMN_SEMESTER = 12
   const LAST_MONTH_SPRING_SEMESTER = 5

   if (month === LAST_MONTH_AUTUMN_SEMESTER || month === LAST_MONTH_SPRING_SEMESTER) throw new IsLastMonthNumberError(month)

   return assessment <= BAD_ASSESSMENT
}

function studyFormHandler(e) {
   e.preventDefault()

   const form = e.target
   try {
      document.querySelector('.study__content').innerText = ''

      let inputMonth = form.querySelector('.input-month')
      let inputAssessment = form.querySelector('.input-assessment')

      let inputMonthValue = parseFloat(inputMonth.value)
      let inputAssessmentValue = parseFloat(inputAssessment.value)

      if (isNaN(inputMonthValue) || isNaN(inputAssessmentValue)) throw new IsNotNumberError()
      if (inputMonthValue < 1) throw new IsTooLowMonthNumberError(inputMonthValue)
      if (inputAssessmentValue < 1) throw new IsTooLowAssessmentNumberError(inputAssessmentValue)
      if (inputMonthValue > 12) throw new IsTooHighMonthNumberError(inputMonthValue)
      if (inputAssessmentValue > 100) throw new IsTooHighAssessmentNumberError(inputAssessmentValue)
      if (inputMonthValue === 6 || inputMonthValue === 7 || inputMonthValue === 8) throw new IsVacationMonthNumberError(inputMonthValue)

      const isCorrect = isAssessmentBeCorrected(inputMonthValue, inputAssessmentValue)
      if (isCorrect) {

         document.querySelector('.study__content').innerText = `Your assessment is bad (${inputAssessmentValue})! Yes you can change it! You should!!!`
      } else {

         document.querySelector('.study__content').innerText = `Congrats! You have a good grade (${inputAssessmentValue}), and there is no point in changing it =)`
      }

   } catch (err) {

      if (err instanceof IsNotNumberError) {

         showError(err, '.study__content', '.input-month', 1, form)
         showError(err, '.study__content', '.input-assessment', 1, form)

      } else if (err instanceof IsTooLowMonthNumberError) {

         showError(err, '.study__content', '.input-month', 1, form)

      } else if (err instanceof IsTooLowAssessmentNumberError) {

         showError(err, '.study__content', '.input-assessment', 1, form)

      } else if (err instanceof IsTooHighMonthNumberError) {

         showError(err, '.study__content', '.input-month', 12, form)

      } else if (err instanceof IsTooHighAssessmentNumberError) {

         showError(err, '.study__content', '.input-assessment', 100, form)

      } else if (err instanceof IsVacationMonthNumberError) {

         showError(err, '.study__content', '.input-month', 1, form)

      } else if (err instanceof IsLastMonthNumberError) {

         showError(err, '.study__content', '.input-month', 1, form)

      } else console.log(err.message)
   }
}

window.onload = function () {

   const form = document.querySelector('.form-study')
   if (form) {
      form.onsubmit = studyFormHandler
   }
};

