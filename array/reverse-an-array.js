// This is normal approch to reverse a array,
// here time complexity is 0(n)
// space coplexity is 0(n), because here created a extra variable

const reverseAnArray = (arr) => {
    let first = 0;
    let last = arr.length - 1;

    let output = [];

    for (let i = arr.length; i > 0; i--) {
        output.push(arr[i - 1])
    }

    return output
}

console.log(reverseAnArray([2, 4, 6, 8, 10]));


console.log("***************")

// This is best approch to reverse a array,
// here time complexity is 0(n)
// space coplexity is 0(1), because here not created any extra variable
const reverseArray = (arr) => {
    let first = 0;
    let last = arr.length - 1;

    while (first < last) {
        // swap
        temp = arr[last];
        arr[last] = arr[first];
        arr[first] = temp;

        first++;
        last--;
    }

    return arr;
}

console.log(reverseArray([2, 4, 6, 8, 10]))