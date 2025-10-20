/*

(2) (2, 4) (2, 4, 6) (2, 4, 6, 8) (2, 4, 6, 8, 10)
(4) (4, 6) (4, 6, 8) (4, 6, 8, 10)
(6) (6, 8) (6, 8, 10)
(8) (8, 10)
(10)

*/

function printSubarrays(arr) {
    for (let i = 0; i < arr.length; i++) {
        let row = "";
        for (let j = i; j < arr.length; j++) {
            let group = "(";
            for (let k = i; k <= j; k++) {
                group += arr[k];
                if (k !== j) {
                    group += ", ";
                }
            }
            group += ")";
            row += group + " ";
        }
        console.log(row.trim());
    }
}

printSubarrays([2, 4, 6, 8, 10]);
