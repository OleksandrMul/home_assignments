/**
 *  При старті питаємо у користувача чи хоче він читати новини.
    Якщо так, то одразу переходимо до сайту Ukr.Net, якщо ні, то
    через 20 секунд самі переходимо на сайт ukr.net. Для цього
    через 20 секунд після відкриття треба виконати команду.
 */

if (confirm('Do you want to read the news?')) {
    window.location.href = 'https://www.ukr.net/'
} else {
    document.write('<h2>You will be redirected to ukr.net in 20 seconds...</h2>')
    setTimeout((): void => {
        window.location.href = 'https://www.ukr.net/'
    }, 20000)
}