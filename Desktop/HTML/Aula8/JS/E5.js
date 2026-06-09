function calcularSanduiche(){

    let total = 4.00;

    if(document.getElementById("alface").checked)
        total += 0.30;

    if(document.getElementById("presunto").checked)
        total += 0.70;

    if(document.getElementById("peru").checked)
        total += 1.00;

    if(document.getElementById("azeitona").checked)
        total += 0.50;

    if(document.getElementById("tomate").checked)
        total += 0.50;

    if(document.getElementById("queijo").checked)
        total += 1.00;

    if(document.getElementById("ovo").checked)
        total += 0.50;

    if(document.getElementById("milho").checked)
        total += 0.30;

    if(document.getElementById("frango").checked)
        total += 2.00;

    document.getElementById("resultado").innerText =
    "Total: R$ " + total.toFixed(2);
}