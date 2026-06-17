function tabuada() {

    let numero =
        document.getElementById("numero").value;

    let resultado = "";

    for (let i = 1; i <= 10; i++) {

        resultado +=
            numero + " x " + i + " = " +
            (numero * i) + "<br>";

    }

    document.getElementById("resultado").innerHTML =
        resultado;

}

function limpar() {

    document.getElementById("numero").value = "";

    document.getElementById("resultado").innerHTML = "";

}