let nombres = [4, 7, 2, 7, 9, 4, 5];

let repetitions = [];

for (let i = 0; i < nombres.length; i++) {
    for (let j = i + 1; j < nombres.length; j++) {

        if (nombres[i] === nombres[j]) {

            if (!repetitions.includes(nombres[i])) {
                repetitions.push(nombres[i]);
            }

        }
    }
}

console.log(repetitions);