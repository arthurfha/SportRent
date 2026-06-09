function verificarNota(){

    let nota = parseFloat(document.getElementById("nota").value);

    if(nota < 0 || nota > 100){
        document.getElementById("resultado").innerText = "Digite uma nota entre 0 e 100";
    }
    else if(nota >= 90){
        document.getElementById("resultado").innerText = "Excelente";
    }
    else if(nota >= 60){
        document.getElementById("resultado").innerText = "Bom";
    }
    else{
        document.getElementById("resultado").innerText = "Precisa melhorar";
    }
}