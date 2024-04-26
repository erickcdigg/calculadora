// JQUERY 4.0.0-BETA
$(document).ready(function(){
    var obtenerNumero = 0;

    $("#button0").click(() => {
        obtenerNumero = numero(0);
        mostrarEnPantalla(0);
    });

    $("#button1").click(() => {
        obtenerNumero = numero(1);
        mostrarEnPantalla();
    });

    $("#button2").click(() => {
        obtenerNumero = numero(2);
        mostrarEnPantalla();
    });

    $("#button3").click(() => {
        obtenerNumero = numero(3);
        mostrarEnPantalla();
    });

    $("#button4").click(() => {
        obtenerNumero = numero(4);
        mostrarEnPantalla();
    });

    $("#button5").click(() => {
        obtenerNumero = numero(5);
        mostrarEnPantalla();
    });

    $("#button6").click(() => {
        obtenerNumero = numero(6);
        mostrarEnPantalla();
    });

    $("#button7").click(() => {
        obtenerNumero = numero(7);
        mostrarEnPantalla();
    });

    $("#button8").click(() => {
        obtenerNumero = numero(8);
        mostrarEnPantalla();
    });

    $("#button9").click(() => {
        obtenerNumero = numero(9);
        mostrarEnPantalla();
    });

    function numero(n){
        return n;
    }

    function mostrarEnPantalla(){
        $("#input").val(obtenerNumero);
    }

});