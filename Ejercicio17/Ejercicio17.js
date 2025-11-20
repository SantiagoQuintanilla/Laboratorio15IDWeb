let contador=0;
const contenedores=document.querySelectorAll('div')
for (let div of contenedores) {
    contador++;
}
const parrafo=document.createElement('p');
parrafo.textContent=`Parrafo creado dinamicamente: hay ${contador} contenedores`;
document.body.appendChild(parrafo);