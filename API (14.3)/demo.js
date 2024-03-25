let fetchPersonajes = "https://rickandmortyapi.com/api/character"; 
let pregunta = parseInt(prompt("dime qué pagina quieres mostrar")); // 5



      //https://rickandmortyapi.com/api/character/?page=5//
fetch(fetchPersonajes + "?page=" + pregunta) // PIDES LA INFORMACIÓN A LA API
.then(function cogerRespuesta(respuesta) {  // TE DEVUELVE ESA INFORMACIÓN (EN LA VARIABLE RESPUESTA)
    return respuesta.json(); // TRANSFORMO ESA INFORMACIÓN PARA PODERLA PROCESAR
})
.then(function cogerData(data){ // YA TENGO LA INFORMACIÓN PROCESADA
    imprimirFicha(data);
})

// ahora imprime la info...
// ahora, créame un botoón...
function imprimirFicha(data){
    for (let i = 0; i < data.results.length; i++){
        document.getElementById("print").innerHTML += 
        `
        <div class="ficha">
        <h1>${data.results[i].name}</h1>
        <img src="${data.results[i].image}">
        <p>${data.results[i].gender}</p>
        <p>${data.results[i].origin.name}</p>
        </div>  
        `   
    }
}