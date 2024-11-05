//Metodos de arreglos -filter
const tecnologias = ['HTML', 'CSS', 'React.js', 'Node.js', 'JavaScript']

//tecnologias.shift() //Elimina el primero

/*
//Itera pero solo guarda o elimina con la condicion
const tecnologias2 = tecnologias.filter(function(tech){ 
    
    if(tech === 'HTML'){
        return tech
    }
})
*/

//Itera sobre todos los elementos
const tecnologias2 = tecnologias.map(function(item){ //No hay mutacion
    if(item === 'HTML'){
        return item
    }else{
        return 'No es HTML'
    }
})

console.log(tecnologias2)

