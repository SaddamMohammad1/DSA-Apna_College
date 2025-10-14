/* Half Character pattern
    A
    B   C
    D   E   F
    G   H   I   J
*/

let n = 4;
let chr = 1;
for (let i = 0; i < n; i++) {
    row = "";
    for (let j = 0; j <= i; j++) {
        row += String.fromCharCode(64 + chr) + " ";
        chr++;
    }

    console.log(row);
}