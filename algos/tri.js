let nombres = [8, 3, 6, 1, 5];

console.log("Avant :", nombres);

for (let i = 0; i < nombres.length; i++) {

    for (let j = 0; j < nombres.length - 1; j++) {

        if (nombres[j] > nombres[j + 1]) {

            let temp = nombres[j];
            nombres[j] = nombres[j + 1];
            nombres[j + 1] = temp;
        }
    }
}

console.log("Après :", nombres);