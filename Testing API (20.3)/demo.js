let chiste, link;

function llamarAPI(){
    fetch("https://api.chucknorris.io/jokes/random")
    .then(function cogerRespuesta(respuesta){
        return respuesta.json();
    })
    .then(function cogerData(data){
        chiste = data.value;
        link = data.url;
        print();
    })
}


function print(){
    document.getElementById("print").innerHTML += 
    `<div id="persona">
    <p>${chiste}</p>
    <a href="${link}"></a>
    </div>
    `
}
