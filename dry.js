for (let i = 1; i <= 5; i++) {
    // Print stars and spaces
    for (let j = 1; j <= 5; j++) {
        if (i % 2 !== 0) { // Odd rows: Full stars
            process.stdout.write("* ");
        } else { // Even rows: Stars with space in the middle
            if (j === 4) { // The middle star in even rows
                process.stdout.write("  ");
            } else {
                process.stdout.write("* ");
            }
        }
    }
    // Move to the next line after each row
    console.log();
}
