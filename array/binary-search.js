/* Binary Search */
// Binary search works on sorted arrays and repeatedly divides the search range by half.

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return `This target value ${target} found at ${mid} index`; // found → return index
        } else if (arr[mid] < target) {
            start = mid + 1; // search end half
        } else {
            end = mid - 1; // search start half
        }
    }

    return -1; // not found
};

// Example
let nums = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(nums, 7));  // ✅ 3 (index of 7)
console.log(binarySearch(nums, 2));  // ✅ -1 (not found)
