/*

(2 4)(2 6)(2 8)(2 10)
(4 6)(4 8)(4 10)
(6 8)(6 10)
(8 10)

*/

function pairsInArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let row = "";
        for (j = i + 1; j < arr.length; j++) {
            row += `(${arr[i]} ${arr[j]})`;
        }

        console.log(row);
    }
}

pairsInArray([2, 4, 6, 8, 10]);