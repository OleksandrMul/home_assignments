/**
 * Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує
 * всі можливі підмножини заданого масиву. Наприклад, для масиву [1, 2, 3]
 * можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].
 */


if (confirm('Почати тестування?')) {

    function generateSubsets(arr: number[], step: number = 0, current: number[] = []): void {

        if (step === arr.length) {
            document.write(`[${current}]<br>`)
            return
        }

        generateSubsets(arr, step + 1, current)
        generateSubsets(arr, step + 1, [...current, arr[step]])
    }

    const array: number[] = [1, 2, 3]
    generateSubsets(array)
}