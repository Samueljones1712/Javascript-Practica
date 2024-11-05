//Concatenacion y template String

const product = "Tablet de 12 pulgadas"
const precio = 400
const marca = 'Channel'

//Antes
//console.log('El producto es una ',product)
//console.log(product+ " $"+ precio + " Dolares, marca: "+marca)

//Ahora
console.log(`El producto es una ${product}`)
console.log(`${product} $${precio} Dolares, marca: ${marca}`)


