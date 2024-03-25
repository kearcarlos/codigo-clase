// PREGUNTAREMOS AL USUARIO SI ES MAYOR DE EDAD
// Y EN BASE A ESO CREAREMOS UNA INTERACCIÓN
// coste por día son 60 euros.

let edad, carnet, nombre, apellido, ciudad, dias, coste, total;

edad = Number(prompt("dime tu edad"));
condicional();
calculo();

function condicional(){
    if (edad < 18){
        alert("no eres mayor edad y no puedes entrar");
    } else {
        carnet = confirm("¿tienes carnet de conducir?");
        if (!carnet) {
            alert("no tienes carnet y por tanto no puedes alquilar");
        } else {
            nombre = prompt("dime tu nombre");
            apellido = prompt("dime tus apellidos");
            ciudad = prompt("ciudad de recogida");
            dias = Number(prompt("¿cuántos días quieres alquilar?")); // 10 días
        }
    }
}

function calculo() {
    // coste por día 60 euros
    // si son 7 días o más, el coste son 55
    // si son 14 o más, el coste son 50 y una reducción general de 25 euros
    if (dias < 7){
        coste = 60;
        total = coste * dias;
        print();
    } else if (dias >= 7 && dias < 14){
        coste = 55;
        total = coste * dias;
        print();
    } else if (dias >= 14){
        coste = 50;
        total = (coste * dias) - 25;
        print();
    }
}

function print(){
    alert(`el coste total son ${total}`);
    alert(`concretament, alquilas ${dias} días y el coste por día son ${coste}`);
}