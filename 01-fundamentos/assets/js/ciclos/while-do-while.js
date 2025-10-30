const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

console.warn('While');
while (i < carros.length) {
    if (i === 1) {
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}

let j = 0;

console.warn('Do While');
do {
    console.log(carros[j]);
    j++;
} while (carros[j]);
