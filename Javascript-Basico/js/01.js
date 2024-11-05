const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'cooking', 'sports']
}

//Object.freeze(person); // No se puede modificar el objeto
//Object.seal(person); // No se puede agregar ni eliminar propiedades, pero si se pueden modificar

//delete person.hobbies; //Elimina la propiedad 
person.name = 'Jane';

console.log(person); // { name: 'John', age: 30, hobbies: [ 'reading', 'cooking', 'sports' ] }

