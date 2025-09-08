function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (peso && altura) {
        const alturaMetros = altura / 100;
        const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);
        
        let classificacao = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc < 24.9) {
            classificacao = "Peso normal";
        } else if (imc < 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc < 39.9) {
            classificacao = "Obesidade";
        } else {
            classificacao = "Obesidade mórbida";
        }

        document.getElementById("resultado").innerText = `Seu IMC é ${imc} (${classificacao}).`;
    } else {
        document.getElementById("resultado").innerText = "Por favor, preencha peso e altura.";
    }
}



