//Iteradores de arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript','React.js', 'Node.js']
//Map y filter son iteradores

for (let i = 0; i < tecnologias.length; i++) {//largo
    const element = tecnologias[i];
//    console.log(element)
}

tecnologias.forEach(function(tecnologia){
   // console.log(tecnologia)
})

//Map es diferente a ForEach, porque genera un nuevo arreglo
const arrayMap = tecnologias.map(function(tech){
    //console.log(tech)
    return tech
})

//Se parece al forEach
for (const element of tecnologias) {
//    console.log(element)
}

console.table(arrayMap)