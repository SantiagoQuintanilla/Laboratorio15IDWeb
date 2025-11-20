const contenedor=document.querySelector('div');
const parrafos=contenedor.querySelectorAll('p');
const arregloP=Array.from(parrafos);
arregloP.sort((a, b) => 
    a.textContent.localeCompare(b.textContent)
);
contenedor.innerHTML="";
arregloP.forEach(p => 
    contenedor.appendChild(p)
);
