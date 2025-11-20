let articulo=document.querySelector('article');
let clon=articulo.cloneNode(true);
const main=document.querySelector('main');
main.appendChild(clon);