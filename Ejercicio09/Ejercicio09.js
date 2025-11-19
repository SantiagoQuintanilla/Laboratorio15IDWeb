const lista=document.createElement('ul');
for (let i=1; i<=5; i++){
    let elementoNuevo=document.createElement('li');
    elementoNuevo.textContent=`Elemento ${i}`;
    lista.appendChild(elementoNuevo);
};
document.body.appendChild(lista);