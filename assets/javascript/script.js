//TABS NAVBAR
function abrirTabs(IdTab) {
    var categorias = document.getElementsByClassName('categoria');

    for (var i = 0; i < categorias.length; i++) {
        categorias[i].style.display = 'none';
    }

    document.getElementById(IdTab).style.display = "block";;
    document.getElementById('intro').style.display = "none";
}

//TROCA DE PALAVRAS
const palavras = ["JAPONÊS", "CHINÊS"];
let indice = 0;

function trocarPalavra() {
    document.getElementById('trocaPalavra').innerHTML = palavras[indice];
    indice++;
    if (indice === palavras.length) {
        indice = 0;
    }
}
setInterval(trocarPalavra, 2000);