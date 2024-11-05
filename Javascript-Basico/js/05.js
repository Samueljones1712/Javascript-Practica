//Array o Arreglos

//Objectos {} -Tienen llaves
//Array [] -Tienen valores
const tecnologia = ['HTML', 'CSS', 'React.js', 'Node.js', 'JavaScript']
//tecnologia[tecnologia.length] = 'Next.js'
tecnologia.push('Next.js') //Muta el arreglo

//Al usar ... recordar que el const debe ser del mismo tipo que el objeto copia
const array = [
    ...tecnologia,
    'Next.js'
]

console.table(array)

