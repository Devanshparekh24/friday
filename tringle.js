for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= i; j++) {
        if (i == 1 || i == 8 || j == 1 || j == i) {
            process.stdout.write("*")

        } else {
            process.stdout.write(" ")
        }
    }
    console.log();

}