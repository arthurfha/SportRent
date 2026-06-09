function AdicionarItem(){
    let lista = document.getElementById("lista");
    let novoItem = document.createElement("li");
    novoItem.textContent = "Novo Item";
    lista.appendChild(novoItem);
}