/* Hollow Diamond pattern
           *
          * *
         *   *
        *     *
         *   *
          * *
           *
*/

let n = 4; // half of the diamond height

// upper half
for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // stars + hollow space
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}

// lower half
for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // stars + hollow space
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}
