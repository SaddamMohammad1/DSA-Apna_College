/* Square using number */
let n = 4;
for (let i=1; i<=n; i++) {      // outer loop
    let row = "";
    for (let j=1; j<=n; j++) {  // inner loop
        row += `${j}  `
    }
    console.log(row)
}

console.log("*****************")

/* Square using astrics */
let p = 4;
for (let i=1; i<p; i++) {      // outer loop
    let pattern = "";
    for (let j=1; j<=p; j++ ) { // inner loop
        pattern += "* "
    }
    console.log(pattern);
}

console.log("*****************")

/* Square using alphabets */
let a = 4;
for (let i=1; i<=a; i++) {      // outer loop
    let alphabets = "";
    for (let j=1; j<=a; j++ ) { // inner loop
        alphabets += `${String.fromCharCode(j + 64)} `;
    }
    console.log(alphabets);
}


console.log("*****************")

/* Square
1  2  3
4  5  6
7  8  9
*/
let b = 3;
let num = 1;
for (let i=0; i<b; i++) {      // outer loop
    let output = "";
    for (let j=0; j<b; j++ ) { // inner loop
        output += `${num} `;
        num++;
    }
    console.log(output);
}