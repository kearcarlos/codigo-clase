let resultado, titleName, firstName, lastName;

function llamarAPI(){

    fetch("https://randomuser.me/api/")
    .then(function cogerRespuesta(respuesta){
        return respuesta.json();
    }).then(function cogerData(data){

        resultado = data.results;
        titleName = resultado[0].name.title;
        firstName = resultado[0].name.first;
        lastName = resultado[0].name.last;
        photo = resultado[0].picture.large;
        print();
    }
    
)}


function print(){
    document.getElementById("print").innerHTML += 
    `<div id="persona">
    <img src="${photo}" alt="foto">
    <h1>${firstName}</h1>
    <h2>${lastName}</h2> 
    </div>
    `
}
