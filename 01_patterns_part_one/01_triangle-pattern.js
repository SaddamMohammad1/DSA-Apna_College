/* Triangle of star
    *
    *   *
    *   *   *
    *   *   *   *
*/

let n = 4;
for (let i = 1; i <= n; i++) {          // outer loop
    let row = "";
    for (let j = 1; j <= i; j++) {      // inner loop
        row += "* "
    }

    console.log(row);
}

console.log("*****************")