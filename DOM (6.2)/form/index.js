function clicar(){
    // GRABAR LO QUE EL USUARIO HA ESCRITO. 
    let datoUsuario = document.getElementById("img").value;

    // IMPRIMES INFO CON LOS DATOS QUE TE HA DADO
    document.getElementById("print").innerHTML += 
    `<a href="http://www.rajoy.es"><img class="foto" src="${datoUsuario}" alt="error foto" 
    width="150px" height="150px"></a>`
}