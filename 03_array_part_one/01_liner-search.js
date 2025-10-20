function linearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (key === arr[i]) {
            return `This key ${key} present on ${i} index`;
        }
    }

    return `This key ${key} does not exist`;
}

const arr = [3, 23, 21, 43, 24];

console.log(linearSearch(arr, 43));