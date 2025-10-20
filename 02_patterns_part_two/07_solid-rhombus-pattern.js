/*
                *   *   *   *   *
            *   *   *   *   *
        *   *   *   *   *
    *   *   *   *   *
*/

function solidRhombusPattern(n) {
    for (let i = 1; i <= n; i++) {
        let output = " ";

        // Spaces
        for (j = 1; j <= (n - i) ; j++) {
            output += " ";
        }

        // Star
        for (k = 1; k <= n; k++) {
            output += "* "
        }

        console.log(output);
    }
}

solidRhombusPattern(5);