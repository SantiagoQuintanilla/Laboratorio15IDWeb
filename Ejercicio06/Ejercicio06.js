const contenedores=document.querySelectorAll('div');
const colores=["red", "blue", "green", "yellow", "purple"];

contenedores.forEach((contenedores, i) => {
    contenedores.style.backgroundColor=colores[i%colores.length];
});