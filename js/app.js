let descripcion = document.getElementById("descripcion");
let fichaTecnica = document.getElementById("ficha-tecnica");

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