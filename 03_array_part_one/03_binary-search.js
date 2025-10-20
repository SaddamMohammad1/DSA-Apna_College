/*
Note:
    Binary serach only work on sorted array, that means for binary serach array must be a sorted array.
*/

function binarySearch(arr, key) {
    let low = 0
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([2, 4, 6, 8, 10, 12], 2))