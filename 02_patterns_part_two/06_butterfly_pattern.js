/*
*                           *
*   *                   *   *
*   *   *           *   *   *
*   *   *   *   *   *   *   *
*   *   *   *   *   *   *   *
*   *   *           *   *   *
*   *                   *   *
*                           *
*/

function printDoublePyramid(n) {
    // Top half (including middle line)
    for (let i = 1; i <= n; i++) {
        let row = "";

        // Left stars
        for (let j = 1; j <= i; j++) {
            row += "*   ";
        }

        // Middle spaces
        for (let k = 1; k <= (2 * (n - i)); k++) {
            row += "    "; // 4 spaces to match "*   "
        }

        // Right stars
        for (let x = 1; x <= i; x++) {
            row += "*   ";
        }

        console.log(row);
    }

    // Bottom half (reverse, excluding the middle line)
    for (let i = n; i >= 1; i--) {
        let row = "";

        // Left stars
        for (let j = 1; j <= i; j++) {
            row += "*   ";
        }

        // Middle spaces
        for (let k = 1; k <= (2 * (n - i)); k++) {
            row += "    ";
        }

        // Right stars
        for (let x = 1; x <= i; x++) {
            row += "*   ";
        }

        console.log(row);
    }
}

printDoublePyramid(4);
