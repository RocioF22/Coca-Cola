//Variable GLobal
var welcome = document.getElementById('welcome');

var nombre = prompt('Por favor, ingrese su nombre');
//Se grega un condional para que no se agregue la palabra 'null' si no se agrega nada en el pormpt.
if(nombre === null) {
    nombre = '';
}

welcome.innerHTML = '<h2> Bienvenido/a  ' + ' <span class="cocaSpan">' + nombre + '</span> ' + '  <span class="span2"> a <span class="pagina">la página de </span> <span class="cocaSpan"> Coca-Cola</span></span></h2>';