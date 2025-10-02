/*
arr = [2, 4, 6, 8, 10]

output:
(2, 4)  (2, 6)  (2, 8)  (2, 10)
(4, 6)  (4, 8)  (4, 20)
(6, 8)  (6, 10)
(8, 10)
*/

const printPairs = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let row = ""; // collect all pairs for this row

        for (let j = i + 1; j < arr.length; j++) {
            row += `(${arr[i]}, ${arr[j]})  `;
        }

        console.log(row); // print row
    }
};

printPairs([2, 4, 6, 8, 10]);
