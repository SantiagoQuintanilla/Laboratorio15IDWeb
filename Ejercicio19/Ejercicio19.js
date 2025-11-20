const contenedor=document.createElement('div');
contenedor.className="contenedor";
for (let i=1; i<=3; i++){
    let parrafo=document.createElement('p');
    parrafo.textContent=`${i}° parrafo creado dinamicamente`;
    contenedor.appendChild(parrafo);
}
const parrafoEliminar=contenedor.firstElementChild.nextElementSibling;
parrafoEliminar.remove();
document.body.appendChild(contenedor);