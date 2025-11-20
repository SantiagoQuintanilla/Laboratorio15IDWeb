const lista=document.createElement('ul');
for (let i=0; i<15; i++){
    let nuevoElemento=document.createElement('li');
    let span=document.createElement('span');
    span.textContent="Nivel Interno";
    nuevoElemento.appendChild(span);
    lista.appendChild(nuevoElemento);
}
document.body.appendChild(lista);