"use strict";
/**
 *  Створити клас Нагадувач. Кожні вказані кількості секунд
   (використати setInterval) програма нагадує про якусь подію
   (це просто текст) і також виводиться порядковий номер
   скільки раз вже нагадування було. Зробити так, щоб не можна
   було зробити одночасно декілька об’єктів-нагадувачів. Методи
   зупинки таймера, метод зміни повідомлення без зупинки таймера.
 */
if (confirm('Почати тестування?')) {
    class Reminder {
        constructor(initNumberSeconds, initEventMsg) {
            this._reminderCounter = 0;
            this._numberSeconds = 0;
            this._interval = 0;
            if (Reminder.ReminderRef)
                return Reminder.ReminderRef;
            this.NumberSeconds = initNumberSeconds;
            Reminder.EventMsg = initEventMsg;
            Reminder.ReminderRef = this;
        }
        set NumberSeconds(numberSeconds) {
            if (numberSeconds < 0)
                throw new Error("Error: Number of seconds is incorrect!");
            this._numberSeconds = numberSeconds;
        }
        get NumberSeconds() {
            return this._numberSeconds;
        }
        static set EventMsg(msg) {
            if (msg.length === 0)
                throw new Error("Error: Event message field is empty!");
            this._eventMsg = msg;
        }
        static get EventMsg() {
            return this._eventMsg;
        }
        get ReminderCounter() {
            return this._reminderCounter;
        }
        set ReminderCounter(newValue) {
            if (newValue < 0)
                throw new Error("Error: Reminder counter value is incorrect!");
            this._reminderCounter = newValue;
        }
        toString() {
            return `<h2>${Reminder.EventMsg} - ${this.ReminderCounter}</h2><br>`;
        }
        run() {
            this._interval = setInterval(() => {
                this.ReminderCounter = this.ReminderCounter + 1;
                document.write(this.toString());
            }, this.NumberSeconds * 1000);
        }
        stop(numberSeconds = 0) {
            setTimeout(() => {
                clearInterval(this._interval);
            }, numberSeconds * 1000);
        }
        changeMsg(newMsg, numberSeconds = 0) {
            if (newMsg.length === 0)
                throw new Error("Error: New event message is empty!");
            setTimeout(() => {
                Reminder.EventMsg = newMsg;
            }, numberSeconds * 1000);
        }
    }
    Reminder._eventMsg = '';
    try {
        const reminder1 = new Reminder(2, 'Wake Up!');
        reminder1.run();
        reminder1.changeMsg('Hello World!', 5);
        reminder1.stop(10);
    }
    catch (error) {
        console.log(error);
    }
}
