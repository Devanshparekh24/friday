const n = 5;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");

    }
    // Spaces
    for (let j = 1; j <= (n - i) * 2; j++) {
    process.stdout.write("  ");
}

    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");

    }

    console.log();

}