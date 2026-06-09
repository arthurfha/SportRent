function mostrarEscolaridade(){

    let opcoes =
    document.getElementsByName("escolaridade");

    let escolhido = "";

    for(let opcao of opcoes){

        if(opcao.checked){

            escolhido = opcao.value;
            break;
        }
    }

    document.getElementById("resultado").innerText = escolhido;
}