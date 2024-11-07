//El mejor selector
const heading = document.querySelector('.heading')


// console.log(heading)
// console.log(heading.tagName)
// console.log(heading.textContent)
// console.log(heading.classList)
// console.log(heading.id)

/*
.clase
#id
:last-of-type
:nth-child()
*/

const elementos = document.querySelectorAll('.navegacion a')
const array = [...elementos]
array.map((item)=>{
    console.log(item.textContent)
})


const labels = [...document.querySelectorAll('.formulario label')];
labels.forEach((label) => {
    console.log(label.textContent);  // Aquí puedes hacer lo que quieras con cada label
});