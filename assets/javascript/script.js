function abrirTabs(IdTab) {
    var categorias = document.getElementsByClassName('categoria');

    for (var i = 0; i < categorias.length; i++) {
        categorias[i].style.display = 'none';
    }

    document.getElementById(IdTab).style.display = "block";;
    document.getElementById('intro').style.display = "none";
}