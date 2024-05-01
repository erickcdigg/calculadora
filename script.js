// JQUERY 4.0.0-BETA
$(document).ready(function(){
    var obtenerNumero = 0;
    var obterOperador;
    var numeros = '';
    var numeroA = 0, numeroB = 0;
    var temp = '';
    var numerosAgregados = '';

    $("#input").val(0);


    $("#button0").click(() => {
        obtenerNumero = 0;
        mostrarNumeroEnPantalla();
    });

    $("#button1").click(() => {
        obtenerNumero = 1;
        mostrarNumeroEnPantalla();
    });

    $("#button2").click(() => {
        obtenerNumero = 2;
        mostrarNumeroEnPantalla();
    });

    $("#button3").click(() => {
        obtenerNumero = 3;
        mostrarNumeroEnPantalla();
    });

    $("#button4").click(() => {
        obtenerNumero = 4;
        mostrarNumeroEnPantalla();
    });

    $("#button5").click(() => {
        obtenerNumero = 5;
        mostrarNumeroEnPantalla();
    });

    $("#button6").click(() => {
        obtenerNumero = 6;
        mostrarNumeroEnPantalla();
    });

    $("#button7").click(() => {
        obtenerNumero = 7;
        mostrarNumeroEnPantalla();
    });

    $("#button8").click(() => {
        obtenerNumero = 8;
        mostrarNumeroEnPantalla();
    });

    $("#button9").click(() => {
        obtenerNumero = 9;
        mostrarNumeroEnPantalla();
    });

    $("#btn-sumar").click(() => {
        obterOperador = "+";
        manipulaOperadores();
    });
    
    $("#btn-restar").click(() => {
        obterOperador = "-";
        manipulaOperadores();
    });

    $("#btn-multiplicar").click(() => {
        obterOperador = "x";
        manipulaOperadores();
    });

    $("#btn-dividir").click(() => {
        obterOperador = "÷";
        manipulaOperadores();
    });

    $("#btn-reciduo").click(() => {
        obterOperador = "re";
        manipulaOperadores();
    });

    $("#btn-igual").click(()=>{
        numeroB = numerosAgregados;
        numeroA = temp;
        numeros = '';
        var respuesta = calcular(obterOperador, numeroA, numeroB);
        $("#input").val("");
        mostrarEnPantalla(respuesta);
        console.log(respuesta, "tipo de dato: ", typeof respuesta);
    });

    $("#btn-punto").click(()=>{
        obtenerNumero = ".";
        mostrarNumeroEnPantalla();
    });

    $("#btn-borrar").click(()=>{
        borrarPantalla();
    });

    function mostrarNumeroEnPantalla(){
        numerosAgregados = agregarNumeros(obtenerNumero);
        numeroA = $("#input").val(numerosAgregados);
    }

    function manipulaOperadores(){
        temp = numerosAgregados;
        $("#output").val(numerosAgregados+" "+obterOperador);
        numeros = '';
    }

    function mostrarEnPantalla(res){
        $("#output").val(res);
    }


    function agregarNumeros(numero){
        numeros += numero;
        console.log("agragar numero: ",numeros);
        return numeros;
    }

    function borrarPantalla(){
        numeros ='';
        $("#input").val('');
        $("#output").val('');

        if(numeros == ''){
            $("#input").val(0);
        }
    }

    function calcular(operacion, numsA, numsB){
        var numA = parseFloat(numsA);
        var numB = parseFloat(numsB);
        
        switch(operacion){
            case "+":
                return numA + numB;
            case "-":
                return numA - numB;
            case "x":
                return numA * numB;
            case "÷":
                if(numB == 0){
                    return "Error no se puede dividir entre 0";
                }else{
                    return numA / numB;
                }
            case "re":
                return numA % numB;
            default: 
                $("#output").val("Error");
            break;
        }
    }
});