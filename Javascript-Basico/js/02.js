const product = {
    name: 'TV',
    price: 500,
    available: true
}

const cliente = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'cooking', 'sports']
}

const { name : nameProduct } = product; // Destructuring Renaming

console.log(nameProduct); // TV


