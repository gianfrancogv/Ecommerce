let descripcion = document.getElementById("descripcion");
let fichaTecnica = document.getElementById("ficha-tecnica");
let btnCompra = document.querySelector("#boton-compra");
let parent = document.querySelector(".compra");
let corazon = document.querySelector(".like2");
let sobre = document.querySelector(".envelope");
let carrito = document.querySelector(".cart");

let spinner = document.createElement('div');
let texto = document.createElement('div');

descripcion.addEventListener('click', function(){
    this.style.color = '#b6180d';
    this.style.borderBottom = '5px #b6180d solid';
    fichaTecnica.style.color = 'black';
    fichaTecnica.style.borderBottom = 'none';
});

fichaTecnica.addEventListener('click', function(){
    this.style.color = '#b6180d';
    this.style.borderBottom = '5px #b6180d solid';
    descripcion.style.color = 'black';
    descripcion.style.borderBottom = 'none';
});

btnCompra.addEventListener('click', addSpinner);

function addSpinner() {
    texto.innerHTML = 'CARGANDO DATOS';
    texto.setAttribute("class", "cargando-datos");
    spinner.setAttribute("class", "spinner-border text-danger");
    parent.replaceChild(spinner, btnCompra);
    parent.appendChild(texto);
    parent.style.marginLeft = "10px";
    corazon.remove();
    sobre.remove();
    setTimeout(removeSpinner, 2000);
}

function productoAgregado() {
    let productoAgregado = document.createElement('div');
    parent.appendChild(productoAgregado);
    productoAgregado.setAttribute("class", "cargando-datos");
    productoAgregado.innerHTML = '¡Producto agregado al carrito!';
    carrito.removeAttribute("src");
    carrito.setAttribute("src", "img/cart1.png");
}

function removeSpinner() {
    spinner.remove();
    texto.remove();
    productoAgregado();
}