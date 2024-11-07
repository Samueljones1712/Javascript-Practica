//Evento del DOM - input

const inputName = document.querySelector('#username')
inputName.addEventListener('input',(e) => {
    console.log(e.target.value)
})

//En este caso al hacer el functionPassword funcion, se debe declarar antes de su utilizacion
const inputPass = document.querySelector('#password')

const functionPassword = () =>{
    console.log('Escribiendo...')
    inputPass.type = 'text'
    setTimeout(() => {
        inputPass.type = 'password'
    },2000)
}


inputPass.addEventListener('input',functionPassword)






