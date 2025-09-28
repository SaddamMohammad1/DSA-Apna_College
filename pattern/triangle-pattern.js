/* Triangle of star */
let n = 4;
for (let i=1; i<=n; i++) {      // outer loop
    let row = "";
    for (let j=1; j<=i; j++) {  // inner loop
        row += "* "
    }
    console.log(row)
}

console.log("*****************")

/* Triangle
1
2  2
3  3  3
4  4  4  4
*/
for (let i=0; i<n; i++) {      // outer loop
    let output = "";
    for (let j=0; j<=i; j++ ) { // inner loop
        output += `${i + 1} `;
    }
    console.log(output);
}

console.log("*****************")

/* Triangle
1
1  2
1  2  3
1  2  3  4
*/
for (let i=0; i<n; i++) {      // outer loop
    let output = "";
    for (let j=0; j<=i; j++ ) { // inner loop
        output += `${j + 1} `;
    }
    console.log(output);
}

console.log("*****************")

/* Reverse Triangle
1
2  1
3  2  1
4  3  2  1
*/
for (let i=1; i<=n; i++) {      // outer loop
    let output = "";
    for (let j=i; j>0; j--) {  // inner loop
        output += `${j} `
    }
    console.log(output);
}

console.log("*****************")

/* Floyd's Triangle Pattern
1
2  3
4  5  6
7  8  9  10
*/
let number = 1;
for (let i=0; i<n; i++) {      // outer loop
    let output = "";
    for (let j=0; j<=i; j++) {  // inner loop
        output += `${number} `
        number++
    }
    console.log(output);
}

console.log("*****************")

/* Triangle Pattern
1  1  1  1
   2  2  2
      3  3
         4
*/
for (let i=0; i<n; i++) {      // outer loop
    let output = "";

    // spaces
    for (let j=0; j<i; j++) {  // inner loop
        output += " "
    }

    // nums
    for (let j = 0; j < n-i; j++) {
        output += `${(i + 1)}`
    }
    console.log(output);
}