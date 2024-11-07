//Evento del DOM - click
const heading = document.querySelector('.heading')



heading.addEventListener('click', (e) => {
    if (heading.textContent === 'Cambio con un click') {
        heading.textContent = 'Javascript Intermedio - Manejo del DOM'
    } else {
        console.log(e)
        console.log(e.target)
        heading.textContent = 'Cambio con un click'
    }
})

document.querySelectorAll('.navegacion a').forEach((item) => {
    item.addEventListener('click',(e) => {
    e.preventDefault() //Evita la accion por default del HTML
    console.log('No redirige')
    })
})



heading.addEventListener('keydown', onkeydown)
onkeydown = () => {
    if (heading.textContent === 'Cambio con keydown') {
        heading.textContent = 'Javascript Intermedio - Manejo del DOM'
    } else {
        heading.textContent = 'Cambio con keydown'
    }
}

