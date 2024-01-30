fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
.then(datos => datos.json())
.then(resultado => {
    console.log(resultado.count)
    resultado.results.forEach(element => {
        console.log(element.name)
    });

})

