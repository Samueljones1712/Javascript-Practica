//Fetch API con Promises

const urlProduction = 'http://127.0.0.1:8001/api/users';
const urlMala = 'https://jsonplaceholder.typicode.com/123'
const urlBuena = 'https://jsonplaceholder.typicode.com/comments'
/*
fetch(urlBuena)
.then(response => {
    if(response.ok){
    console.log(response)
    return response.json()
    }
    throw new Error('Hubo un error...')
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error:', error.message);
});*/

fetch(urlBuena)
.then(response => {
    if(response.ok){
    console.log(response)
    return response.json()
    }
    throw new Error('Hubo un error...')
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error.message));
