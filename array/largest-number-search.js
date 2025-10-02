const largestNumberFound = (numbers) => {
    let largestNumber = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (largestNumber < numbers[i]) {
            largestNumber = numbers[i]
        }
    }

    return `Largest number is: ${largestNumber}`
}

console.log(largestNumberFound([1, 2, 6, 3, 5]))