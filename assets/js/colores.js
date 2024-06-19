

// Cambiar el color de los divs existentes a negro al hacer clic
document.querySelectorAll('.color-box').forEach(div => {
    div.addEventListener('click', function() {
        div.style.backgroundColor = 'black';
    });
});