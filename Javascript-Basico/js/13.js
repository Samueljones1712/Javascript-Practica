//Option Chaining (?) //Acceder a propiedades sin saber si existen


const alumno = {
    nombre :'Juan',
    clase : 'Programacion 1',
    aprobado : true,
//    examenes : {
//        examen1 : 90
//    }
}

console.log(`El examen del alumno ${alumno.nombre} es ${alumno.examenes?.examen1}`) //Devuelve UNDEFINED pero no explota

//Nullish coalescing Operator (??) //Devuelve el valor derecho si es NULL o UNDEFINED

const pagina = null ?? 1 //Devuelve 1 cuando el derecho es NULL o UNDEFINED
console.log(`La pagina es ${pagina}`)




