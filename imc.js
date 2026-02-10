function calcularImc() {

    let pesoCorporal = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let valorImc = (pesoCorporal / (altura *altura)).toFixed(2);


    let classificacao = "";

    if (valorImc < 18.5) { 
        classificacao = "Abaixo do peso"}
    else if (valorImc < 24.9) { 
        classificacao = "Peso normal"}
    else if (valorImc >24.9) {
        classificacao = "Acima do peso"}

    document.getElementById("imc").textContent = "Imc = " + valorImc + " - " + classificacao;
}
