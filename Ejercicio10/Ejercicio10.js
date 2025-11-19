const parrafo=document.querySelector('p');
parrafo.remove();
const contenedor=document.createElement('div');
contenedor.textContent="Párrafo reemplazado";
document.body.insertBefore(contenedor, document.querySelector('p'));