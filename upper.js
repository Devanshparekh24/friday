for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
        process.stdout.write(" ")

    }
    for (let k = 1; k <= i; k++) {
        if (i == 1 || i == 5 || k == 1 || k == i) {
            process.stdout.write(" *")

        } else {
            process.stdout.write("  ")
        }

    }
    console.log();


}