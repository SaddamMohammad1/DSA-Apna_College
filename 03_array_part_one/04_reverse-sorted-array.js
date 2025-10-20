function reverseSortedArray(arr) {
    let first = 0;
    let last = arr.length - 1;

    while (first < last) {
        let swap = arr[last];
        arr[last] = arr[first];
        arr[first] = swap;

        first++;
        last--;
    }

    return arr;
}

console.log(reverseSortedArray([2, 4, 6, 8]))