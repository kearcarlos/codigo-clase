
let fotos = ["forever.jpg", "ola.webp", "troll.png"];


function add(){

    // Cuando se ejecute esta función,
    // quiero que imprimas una foto
    // en la parte llamada "print" del html
    
    for (let i = 0; i < fotos.length; i++){
        document.getElementById("print").innerHTML += 
        `<div class="card"> 
        <img src="./${fotos[i]}" alt="ola que ase">
        </div>
        `
    }
}
