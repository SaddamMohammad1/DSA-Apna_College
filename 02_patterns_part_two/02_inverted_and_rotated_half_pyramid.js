/* Triangle of star
                *
            *   *
        *   *   *
    *   *   *   *
*/

// 1st way
let n = 4;
for (let i = n - 1; i >= 0; i--) {
    let row = "";
    for (j = 0; j < n; j++) {
        if (j >= i) {
            row += "*"
        } else {
            row += " "
        }
    }

    console.log(row);
}

console.log("*****************")

// 2nd way
let number = 4;
for (let i = 1; i <= n; i++) {
    let row = "";
    // loop run for print space
    for (let j = 1; j <= n - i; j++) {
        row += " ";         // add spaces
    }
    // opp run for print start
    for (let k = 1; k <= i; k++) {
        row += "*";         // add star
    }

    console.log(row);
}