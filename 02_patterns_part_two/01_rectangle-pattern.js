/*
Rectangle pattern

    *   *   *   *   *
    *               *
    *               *
    *   *   *   *   *
*/

function rectangle(row, column) {
    for (let i = 1; i <= row; i++) {
        let output = "";
        for (let j = 1; j <= column; j++) {
            if (i == 1 || i == row || j == 1 || j==column) {
                output += "*"
            } else {
                output += " "
            }
        }
        console.log(output)
    }
}

rectangle(4, 5);