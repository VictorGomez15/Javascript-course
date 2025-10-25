let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster',],
};

console.log( personaje );
console.log('Nombre:', personaje.nombre);

console.log(personaje.trajes.length);
console.log(personaje.trajes[personaje.trajes.length - 1]);

delete personaje.edad;
console.log( personaje );

const entriesPares = Object.entries( personaje );

console.log(entriesPares);