
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'a':
            currentColor = 'pink';
            changeKeyColor(currentColor);
            break;
        case 's':
            currentColor = 'orange';
            changeKeyColor(currentColor);
            break;
        case 'd':
            currentColor = 'skyblue';
            changeKeyColor(currentColor);
            break;
        case 'q':
            createColoredDiv('purple');
            break;
        case 'w':
            createColoredDiv('gray');
            break;
        case 'e':
            createColoredDiv('brown');
            break;
    }
});


// Función para cambiar el color del div con id 'key'
function changeKeyColor(color) {
    const keyDiv = document.getElementById('key');
    keyDiv.style.backgroundColor = color;
}

function createColoredDiv(color) {
    const container = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.className = 'color-box';
    newDiv.style.backgroundColor = color;
    container.appendChild(newDiv);
}
