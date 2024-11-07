//Fetch API con Async / Await
//Await espera a que finalice de ejecutarse el codigo para seguir 
const urlBuena = 'https://jsonplaceholder.typicode.com/comments'
const urlMala = 'https://jsonplaceholder.typicode.com/1234'
const consultarApi = async () => {
    try {
        const response = await fetch(urlMala) //Voy a esperar la respuesta
        if(!response.ok){
            throw new Error('Hubo un Error...');
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(error.message)
    }
}

consultarApi() //La ejecucion