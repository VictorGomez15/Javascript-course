
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log('!true ->' ,!true); //false
console.log('!false ->' ,!false); //true

console.warn('And / &&'); // true si todos los valores son verdaderos
console.log('true && true ->' ,(true && true)); //true
console.log('true && false ->' ,true && false); //false
console.log('false && true ->' ,false && true); //false
console.log('false && false ->' ,false && false); //false

console.log('Falso primero');
regresaFalse() && regresaTrue();

console.log('Verdadero primero');
regresaTrue() && regresaFalse();

console.warn('Or / ||'); // true si todos los valores son verdaderos
console.log('true || true ->' ,(true || true)); //true
console.log('true || false ->' ,true || false); //true
console.log('false || true ->' ,false || true); //true
console.log('false || false ->' ,false || false); //false

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;


console.log({a1, a2 });
console.log({ a3, a4, a5 });