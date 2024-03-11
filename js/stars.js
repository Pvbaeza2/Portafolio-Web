document.addEventListener("DOMContentLoaded", function() {
    createStars();
});

function createStars() {
    const stars = document.getElementById('stars');
    const stars2 = document.getElementById('stars2');
    const stars3 = document.getElementById('stars3');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const initialStarCount = 100; // Cantidad inicial de estrellas generadas en cualquier parte de la pantalla
    const additionalStarCount = 100; // Cantidad adicional de estrellas generadas solo en la parte inferior de la pantalla
    
    // Límite inferior para las coordenadas y
    const lowerLimitY = screenHeight - 50; // 50 es la altura de las estrellas

    // Crear estrellas iniciales en cualquier parte de la pantalla
    for (let i = 0; i < initialStarCount; i++) {
        const x = Math.random() * screenWidth;
        const y = Math.random() * screenHeight;
        const duration = Math.random() * 50 + 5; // Ajusta la duración de la animación aquí
        const size1 = Math.random() * 2 + 1; // Tamaño entre 1 y 3
        const size2 = Math.random() * 3 + 4; // Tamaño entre 3 y 8
        const size3 = Math.random() * 5 + 6; // Tamaño entre 8 y 13
        
        const star = `<div class="star" style="left:${x}px; top:${y}px; width: ${size1}px; height: ${size1}px; animation-duration:${duration}s;"></div>`;
        const star2 = `<div class="star2" style="left:${x}px; top:${y}px; width: ${size2}px; height: ${size2}px; animation-duration:${duration}s;"></div>`;
        const star3 = `<div class="star3" style="left:${x}px; top:${y}px; width: ${size3}px; height: ${size3}px; animation-duration:${duration}s;"></div>`;

        stars.innerHTML += star;
        stars2.innerHTML += star2;
        stars3.innerHTML += star3;
    }

    // Crear estrellas adicionales solo en la parte inferior de la pantalla
    for (let i = 0; i < additionalStarCount; i++) {
        const x = Math.random() * screenWidth;
        const y = Math.random() * (screenHeight / 1) + lowerLimitY; // Ajusta el rango según lo necesites
        const duration = Math.random() * 50 + 5; // Ajusta la duración de la animación aquí
        const size1 = Math.random() * 2 + 1; // Tamaño entre 1 y 3
        const size2 = Math.random() * 3 + 4; // Tamaño entre 3 y 8
        const size3 = Math.random() * 5 + 6; // Tamaño entre 8 y 13
        
        const star = `<div class="star" style="left:${x}px; top:${y}px; width: ${size1}px; height: ${size1}px; animation-duration:${duration}s;"></div>`;
        const star2 = `<div class="star2" style="left:${x}px; top:${y}px; width: ${size2}px; height: ${size2}px; animation-duration:${duration}s;"></div>`;
        const star3 = `<div class="star3" style="left:${x}px; top:${y}px; width: ${size3}px; height: ${size3}px; animation-duration:${duration}s;"></div>`;

        stars.innerHTML += star;
        stars2.innerHTML += star2;
        stars3.innerHTML += star3;
    }
}
