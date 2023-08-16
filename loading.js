// Ocultar la pantalla de carga después de 4 segundos (4000 milisegundos)
window.addEventListener("load", function () {
    var loadingBar = document.querySelector(".loading-bar");
    // Establecer el ancho de la barra en 100% en 4 segundos
    loadingBar.style.width = "100%";
    // Ocultar la pantalla de carga después de 4 segundos (4000 milisegundos)
    setTimeout(function () {
        var loadingScreen = document.getElementById("loadingScreen");
        loadingScreen.style.display = "none";
    }, 4000);
});




