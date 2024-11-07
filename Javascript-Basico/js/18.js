//Performance y Multiple Async / Await

const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/todos'
const url3 = 'https://jsonplaceholder.typicode.com/albums'

const consultarApi = async () => {
    try {
        const start = performance.now()
        
        const response = await fetch(url)
        const data = await response.json()
        const response2 = await fetch(url2)
        const data2 = await response2.json()
        const response3 = await fetch(url3)
        const data3 = await response3.json()

        const end = performance.now()

        console.log(`El resultado de la Primera funcion es ${end - start} ms`)
    } catch (error) {
        console.error(error.message)
    }
}



const consultarApi2 = async () => {
    try {
        const start = performance.now()
        const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)])
        const [data, data2, data3] = await Promise.all([response.json(), response2.json(), response3.json()])
        const end = performance.now()

        console.log(`El resultado de la Segunda funcion es ${end - start} ms`)
    } catch (error) {
        console.error(error.message)
    }
}

consultarApi() //La ejecucion
consultarApi2()