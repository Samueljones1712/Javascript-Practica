//Evento del DOM - submit

const form = document.querySelector('.formulario')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('Enviando formulario...')
    const username = document.querySelector('#username').value //recordar el .value
    const password = document.querySelector('#password').value

    const alertPrevious = document.querySelector('#alerta')
    alertPrevious?.remove()
    /*
    if(alertPrevius)
    {
        alertPrevius.remove()
    }
    */

    const alert = document.createElement('DIV')//No puede ser Const porque ya tiene un tipo
    alert.classList.add('text-white','text-sm','uppercase','p-2','text-center','font-black')
    alert.id = 'alerta'


    if(username==='' || password ===''){
         alert.textContent = 'Los campos son obligatorios'
         alert.classList.add('bg-red-500')
    }else{
        alert.textContent = 'Todo bien, iniciando sesion...'
        alert.classList.add('bg-green-500')
    }
    console.log(alert)
    form.appendChild(alert)
    setTimeout(()=>{
        form.removeChild(alert)
    },3000)
})