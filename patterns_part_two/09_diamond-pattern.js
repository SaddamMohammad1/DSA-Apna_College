/*

                *
            *   *   *
        *   *   *   *   *
    *   *   *   *   *   *   *
    *   *   *   *   *   *   *
        *   *   *   *   *
            *   *   *
                *

*/

function diamondPattern(n) {
    // Upper part
    for (let i = 1; i <= n; i++) {
        let row = "";

        // Spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }

        // Stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "*";
        }

        console.log(row);
    }

    // Lower part
    for (let i = n - 1; i >= 1; i--) {
        let row = "";

        // Spaces
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }

        // Stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "*";
        }

        console.log(row);
    }
}

diamondPattern(4);
