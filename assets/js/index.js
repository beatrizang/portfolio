
function fecha(){
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    document.getElementById('year').innerHTML = anioActual;
}

fecha();
