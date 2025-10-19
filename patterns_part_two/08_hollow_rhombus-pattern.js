/*
                *   *   *   *   *
            *               *
        *               *
    *   *   *   *   *
*/

function hollowRhombusPattern(n) {
    for (let i = 1; i <= n; i++) {
        let output = "";

        // Leading spaces (indentation)
        for (let j = 1; j <= (n - i); j++) {
            output += "    "; // 4 spaces to align with "*   "
        }

        // Stars and hollow spaces
        for (let k = 1; k <= n; k++) {
            if (i === 1 || i === n || k === 1 || k === n) {
                output += "*   "; // star + 3 spaces
            } else {
                output += "    "; // 4 spaces
            }
        }

        console.log(output);
    }
}

hollowRhombusPattern(5);