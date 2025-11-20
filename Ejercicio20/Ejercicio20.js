const seccion=document.querySelector('section');
const encabezadoH2=document.createElement('h2');
encabezadoH2.textContent="Título nuevo";
const parrafo=document.createElement('p');
parrafo.textContent="Descripción generada";
const lista=document.createElement('ul');
for (let i=1; i<=3; i++){
    let elemento=document.createElement('li');
    elemento.textContent=`${i} item`;
    lista.appendChild(elemento);
}
const encabezadoOriginal=seccion.querySelector('h2');
encabezadoOriginal.remove();
seccion.appendChild(encabezadoH2);
seccion.appendChild(parrafo);
seccion.appendChild(lista);