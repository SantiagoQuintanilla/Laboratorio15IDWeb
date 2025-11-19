const nuevoElemento=document.createElement('h3');
nuevoElemento.textContent="h3 creado con JS";
const parrafo=document.querySelector('p');
document.body.insertBefore(nuevoElemento, parrafo);