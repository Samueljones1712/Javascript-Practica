const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'cooking', 'sports']
}

const product = {
    name: 'TV',
    price: 500,
    available: true
}
/*
const carrito = {
    nameP: product.name, 
    price: product.price,
    ...person
}
*/

const carrito = {
    ...product,
    ...person
}

const nuevoObject2 = Object.assign(product, person);

//console.log(nuevoObject2); // { name: 'TV', price: 500, name: 'John', age: 30, hobbies: [ 'reading', 'cooking', 'sports' ] }




