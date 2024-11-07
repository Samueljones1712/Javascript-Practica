//Edicion del dom

const heading = document.querySelector('.heading')
heading.textContent = 'Titulo editado'
heading.id = 'Un nuevo ID'
heading.removeAttribute('id') //class or id, cualquier atributo

const inputNombre = document.querySelector('#username')
inputNombre.placeholder = 'Samuel Jones' 

//Para atributos personalizados
inputNombre.dataset.nombre = 'samuelito'

console.log(inputNombre.classList
)

document.querySelectorAll('.navegacion a').forEach((item) => {
    return item.textContent = "Cambiado"
})

