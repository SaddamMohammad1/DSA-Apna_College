/* Pyramid of number
         1
      1  2  1
   1  2  3  2  1
1  2  3  4  3  2  1

*/
let n = 4;

for (let i = 1; i <= n; i++) {
    let output = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
        output += "   "; // 3 spaces for alignment
    }

    // increasing numbers
    for (let j = 1; j <= i; j++) {
        output += j + "  ";
    }

    // decreasing numbers
    for (let j = i - 1; j >= 1; j--) {
        output += j + "  ";
    }

    console.log(output);
}