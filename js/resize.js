window.onload = function() {
    resizeElements();
    window.addEventListener('resize', resizeElements);
};

function resizeElements() {
    var nombrePrincipal = document.getElementById('contenedor_nombre_principal');
    var iconos = document.querySelectorAll('.iconos');
    var windowWidth = window.innerWidth;
    var textFontSize = windowWidth * 0.10; // Ajusta este valor según tus necesidades
    var iconWidth = windowWidth * 0.10; // Ajusta este valor según tus necesidades

    // Limitamos el tamaño mínimo y máximo del texto
    textFontSize = Math.max(textFontSize, 40); // Tamaño mínimo
    textFontSize = Math.min(textFontSize, 120); // Tamaño máximo

    // Limitamos el tamaño mínimo y máximo del icono
    iconWidth = Math.max(iconWidth, 30); // Tamaño mínimo
    iconWidth = Math.min(iconWidth, 60); // Tamaño máximo

    // Establecemos el tamaño del texto
    nombrePrincipal.style.fontSize = textFontSize + 'px';

    // Iteramos sobre cada icono y establecemos su tamaño
    if (iconos) {
        iconos.forEach(function(icono) {
            icono.style.width = iconWidth + 'px';
        });
    }
}
