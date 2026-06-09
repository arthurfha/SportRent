function calcularIR(){

    let salario = parseFloat(document.getElementById("salario").value);

    let imposto;

    if(salario < 1903.99){
        imposto = "Isento";
    }
    else if(salario < 2826.66){
        imposto = salario * 0.075;
    }
    else if(salario < 3751.06){
        imposto = salario * 0.15;
    }
    else if(salario < 4664.69){
        imposto = salario * 0.225;
    }
    else{
        imposto = salario * 0.275;
    }

    document.getElementById("resultado").innerText = imposto;
}