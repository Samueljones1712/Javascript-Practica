//ECMAScript Modules

import guapo, { sumar, restar } from "./functions-Arrow.js" //Siempre la extension del archivo
//import guapo, { sumar, restar } from "./functions.js"

const resultado = sumar(20,10)
const resultadoGuapo = guapo(5,5)
console.log(`export ${resultado}`)
console.log(`export default ${resultadoGuapo}`)