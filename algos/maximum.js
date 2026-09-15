let nombres = [12, 5, 27, 9, 18];

let maximum = nombres[0];

for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] > maximum) {
        maximum = nombres[i];
    }
}

console.log("Le maximum est :", maximum);