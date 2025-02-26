//console.log('Hello World');

// Variables
let a = 10
const b = 20
var c = 30

//console.log(a, b, c);

// Fuonctions
function Add(a, b) {
    return a + b
}

const AddBis = function (a,b) {
    return a + b
}

const AddArrow = (a, b) => {
    return a + b
}

// tableaux
const tab = [1, 2, 3, 4, 5]

const tabDouble = tab.map(x => x * 2)

//console.log(tabDouble)


// Utilisation avancée du spead operator

let original = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'New York',
        zip: '10001'
    }
};

const clone = {
    ...original
};

const clone2 = {
    ...original,
    address: {
        ...original.address
    }
}

console.log('original: ', original);
console.log('clone: ', clone);
console.log('clone2: ', clone2);

original.address.city = 'Los Angeles';
console.log('changement de la ville dans original');

console.log('original: ', original);
console.log('clone: ', clone);
console.log('clone2: ', clone2);

