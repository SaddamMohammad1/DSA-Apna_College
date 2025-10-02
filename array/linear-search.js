const linearSearch = (numbers, key) => {
    for (let i = 0; i < numbers.length; i++) {
        if (key === numbers[i]) {
            return `${key} search in ${i} index`
        }
    }

    return `key not found: ${key}`
}

console.log(linearSearch([2, 5, 3, 7, 9, 10], 12));