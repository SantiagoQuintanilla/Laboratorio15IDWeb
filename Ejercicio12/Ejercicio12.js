const contenedor=document.getElementById("contenido");
const contenido=Array.from(contenedor.children);
for (let hijo of contenido) {
    hijo.remove();
}