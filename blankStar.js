for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i % 2 !== 0) {
            process.stdout.write("* ")


        } else {
            if (j === 3) {
                process.stdout.write(" ")
            } else {
                process.stdout.write("* ")
            }
        }

    }
    console.log();

}