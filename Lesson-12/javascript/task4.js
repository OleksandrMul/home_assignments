"use strict";
/**
 * Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
 */
const names = [
    "David", "Amelia", "Jack", "Eva", "Henry",
    "Lily", "Oliver", "Clara", "Benjamin", "Tara",
    "Olga", "Grace", "Rachel", "Isabella", "Samuel",
    "Alice", "Brian", "Victoria", "Zachary", "Nora",
    "Michael", "Penelope", "Ulysses", "Derek", "Charlotte",
    "William", "Yvonne", "Frank", "Quentin", "Emma"
];
function swap(A, i, j) {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}
function Partition(A, p, q) {
    const pivot = A[q];
    let i = p - 1;
    for (let j = p; j < q; j++) {
        if (A[j] <= pivot) {
            i = i + 1;
            swap(A, i, j);
        }
    }
    swap(A, i + 1, q);
    return i + 1;
}
function Quicksort(A, p, q) {
    if (p >= q)
        return;
    const i = Partition(A, p, q);
    Quicksort(A, p, i - 1);
    Quicksort(A, i + 1, q);
}
Quicksort(names, 0, names.length - 1);
function includes_binarySearch(arr, searchElement) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const middle = Math.floor((start + end) / 2);
        if (arr[middle] === searchElement)
            return middle;
        if (arr[middle] < searchElement)
            start = middle + 1;
        if (arr[middle] > searchElement)
            end = middle - 1;
    }
    return -1;
}
const indexOlga = includes_binarySearch(names, "Olga");
console.log(names);
if (indexOlga !== -1) {
    document.write(`<h2>Yes, Olga exists at index ${indexOlga}</h2>`);
}
else {
    document.write("<h2>No! Olga doesn't exist in array</h2>");
}
