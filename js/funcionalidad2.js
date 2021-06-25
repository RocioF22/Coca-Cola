//Arreglo de nombres.
var sabores = ['Clásica', 'Sin Azúcar', 'Zero', 'Light', 'Life'];

//Se guarda en una variable la clase indicada del HTML.
var saboresContainer = document.getElementsByClassName('topicsIcons')[0];
//Se recorre el arreglo y se agrega un div al HTML agregando dichos arreglos e imágenes.
for (let i = 0; i < sabores.length; i++) {
    let newNode = document.createElement('div');
    newNode.innerHTML = 
    `
    <img src="./images/lata_${i+1}.png" alt="Imagen" class="icon lata${i+1}">
    <h3>${sabores[i]}</h3>
    `;
    console.log(newNode)
    newNode.classList.add('iconSvg');
//Se agrega la clase creada al div padre.
    saboresContainer.appendChild(newNode);
}

//Validación de datos del formulario.

var nombre = document.getElementById('nombre');
var email = document.getElementById('email');

function datos() {
    nombre.addEventListener('input', validacionNombre);
    email.addEventListener('input', validacionEmail);

    validacionNombre();
    validacionEmail();
}

function validacionNombre() {
    if(nombre.value == ''){
        nombre.style.backgroundColor = "#e3504b";
        nombre.setCustomValidity('Ingresa tu Nombre');
    }else {
        nombre.style.backgroundColor = "#4de871";
        nombre.setCustomValidity('');
    }
}

function validacionEmail() {
    if(email.value == ''){
        email.style.backgroundColor = "#e3504b";
        email.setCustomValidity('Ingresa un e-mail válido');
    }else {
        email.style.backgroundColor = "#4de871";
        email.setCustomValidity('');
    }
}

datos();