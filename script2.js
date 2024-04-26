// JAVASCRIPT PURO O VANILLA
document.addEventListener("DOMContentLoaded", function () {
    var obtenerNumeros = 0;
    document.querySelector("#button0").addEventListener('click', () => {
        obtenerNumeros = numeros(0);
        mostrarEnPantalla();
    });

    document.querySelector("#button1").addEventListener('click', () => {
        obtenerNumeros = numeros(1);
        mostrarEnPantalla();
    });

    document.querySelector("#button2").addEventListener('click', () => {
        obtenerNumeros = numeros(2);
        mostrarEnPantalla();
    });

    document.querySelector("#button3").addEventListener('click', () => {
        obtenerNumeros = numeros(3);
        mostrarEnPantalla();
    });

    document.querySelector("#button4").addEventListener('click', () => {
        obtenerNumeros = numeros(4);
        mostrarEnPantalla();
    });

    document.querySelector("#button5").addEventListener('click', () => {
        obtenerNumeros = numeros(5);
        mostrarEnPantalla();
    });

    document.querySelector("#button6").addEventListener('click', () => {
        obtenerNumeros = numeros(6);
        mostrarEnPantalla();
    });

    document.querySelector("#button7").addEventListener('click', () => {
        obtenerNumeros = numeros(7);
        mostrarEnPantalla();
    });

    document.querySelector("#button8").addEventListener('click', () => {
        obtenerNumeros = numeros(8);
        mostrarEnPantalla();
    });

    document.querySelector("#button9").addEventListener('click', () => {
        obtenerNumeros = numeros(9);
        mostrarEnPantalla();
    });

    function numeros(n){
        return n;
    }

    function mostrarEnPantalla() { 
        document.querySelector("#input").value = obtenerNumeros;
    }
});
