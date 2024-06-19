


// Función pintar que recibe el elemento clickeado y un color opcional
function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

// Obtener el elemento con id "ele1"
const ele = document.getElementById("ele1");

// Añadir un listener para el evento click
ele.addEventListener("click", function() {
    // Llamar a la función pintar pasando el elemento ele y el color amarillo
    pintar(ele, 'yellow');
});


