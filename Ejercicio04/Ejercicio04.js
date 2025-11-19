const ocultos=document.querySelectorAll(".oculto");
ocultos.forEach( li => {
    li.classList.remove("oculto");
});

const lista=document.querySelectorAll('li');
lista.forEach(li => {
    li.classList.add('resaltado');
});
