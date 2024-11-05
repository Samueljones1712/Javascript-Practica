const tecnologias = ['HTML', 'CSS', 'JavaScript','React.js', 'Node.js']
const numeros = [10,20,30]


/*
const tecnologias2 = tecnologias.filter(ejemploFilter)
function ejemploFilter(tech){ //Las Declarative y Expression Function NO son variables
    console.log(tech)
}
*/

/*
//Traer todas menos HTML y da por implicito el return
const tecnologias3 = tecnologias.filter((tech) =>  tech !== 'HTML')
console.log(tecnologias3)
*/

//Includes 
const existIncludes = tecnologias.includes('CSS')//True o False

//Some (Devuelve si al menos uno si cumple la condicion)
const existSome = numeros.some(number => number>10)//True o False

//Find (Devuelve el primer elemento que cumple la funcion)
const existFind = numeros.find(number => number>20) //Primer Elemento que cumpla

//Every (Retorna True o False si todos cumplen la condicion)
const existEvery = numeros.every(number => number>5) //True o False

//Reduce (Retorna un acumulado del total)
const existReduce = numeros.reduce((total, numero) => { //Suma todos los numeros
    console.log(`El total es ${total}`)
    console.log(`El numero a sumar es ${numero}`)
    return total + numero;
})

console.log(existReduce)





