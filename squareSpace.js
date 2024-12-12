for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 7; j++) { // Each row has 7 positions
        if (i % 2 != 0 || j == 1 || j == 4 || j == 7) {
            process.stdout.write("* ");
        } else {
            process.stdout.write("  "); // Two spaces for alignment
        }
    }
    console.log(); // Move to the next line after each row
}
