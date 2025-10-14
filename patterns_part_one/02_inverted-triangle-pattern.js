/* Inverted Triangle of star
    *   *   *   *
    *   *   *
    *   *
    *
*/

let n = 4;
for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = i; j > 0; j--) {
        row += "* "
    }

    console.log(row);
}