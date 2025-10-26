const elMayor = (a, b) => ( a > b ) ? a : b;

console.log( elMayor(20, 15) );

const membresía = ( miembro ) => ( miembro ) ? '2 Dólares' : '10 Dólares';

console.log( membresía(false) );

const nota = 65;
const grado = ( nota >= 95 ) ? 'A+' :
                (nota >= 90 ) ? 'A' :
                (nota >= 85 ) ? 'B+' :
                (nota >= 80 ) ? 'B' :
                (nota >= 75 ) ? 'C+' :
                (nota >= 70 ) ? 'C' : 'F';
console.log({ nota, grado });

