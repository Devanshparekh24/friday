const symbols = ['*', '&', '@', '+'];

for (let i = 1; i <= 4; i++) {
    // Print symbols for the current row
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${symbols[i - 1]} `);
    }
    // Move to the next line after each row
    console.log();
}
