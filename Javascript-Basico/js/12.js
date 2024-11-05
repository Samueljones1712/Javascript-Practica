//Operadores Ternarios
const auth = true
const saldo = 1000
const costo = 2000
const tarjeta = true

/* 
//   (condicion ? opcion1 : opcion2)
saldo > costo ? console.log('Si puedes pagar') : console.log('No puedes pagar')
*/

//  (condicion ? opcionTrue : otraCondicion ? opcionTrue : opcionFalse)
saldo > costo ? 
    console.log('Si puedes pagar') : 
    tarjeta ? 
        console.log('Puedes pagar con tarjeta') : 
        console.log('No puedes pagar')




