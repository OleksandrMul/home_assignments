"use strict";
/**
 * Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити,
 * чи є у масиві ім’я довжиною 5 символів і під яким індексом.
 */
const namesList = [
    "David", "Amelia", "Jack", "Eva", "Henry",
    "Lily", "Oliver", "Clara", "Benjamin", "Tara",
    "Olga", "Grace", "Rachel", "Isabella", "Samuel",
    "Alice", "Brian", "Victoria", "Zachary", "Nora",
    "Michael", "Penelope", "Ulysses", "Derek", "Charlotte",
    "William", "Yvonne", "Frank", "Quentin", "Emma"
];
function swapElements(A, i, j) {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}
function Partition_(A, p, q) {
    const pivot = A[q].length;
    let i = p - 1;
    for (let j = p; j < q; j++) {
        if (A[j].length <= pivot) {
            i = i + 1;
            swapElements(A, i, j);
        }
    }
    swapElements(A, i + 1, q);
    return i + 1;
}
function QuickSort(A, p, q) {
    if (p >= q)
        return;
    const i = Partition_(A, p, q);
    QuickSort(A, p, i - 1);
    QuickSort(A, i + 1, q);
}
QuickSort(namesList, 0, namesList.length - 1);
function includesBinarySearch(arr, searchLength) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const middle = Math.floor((start + end) / 2);
        console.log(arr[middle].length);
        if (arr[middle].length === searchLength)
            return middle;
        if (arr[middle].length < searchLength)
            start = middle + 1;
        if (arr[middle].length > searchLength)
            end = middle - 1;
    }
    return -1;
}
const indexName = includesBinarySearch(namesList, 5);
console.log(namesList);
if (indexName !== -1) {
    document.write(`<h2>Yes, the array has a name = ${namesList[indexName]} of 5 characters long under the index ${indexName}</h2>`);
}
else {
    document.write("<h2>No!</h2>");
}
