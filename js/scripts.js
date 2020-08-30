const seat = document.querySelectorAll(".asiento");
const porcentaje = document.getElementById("porcentaje");
const distancia = document.getElementById("distancia");
const asientosTotales = 35;
const btnEnter = document.querySelector(".enter");
const area = document.querySelector("#area");



btnEnter.addEventListener("click", function(){
    seat.forEach(element => {
        element.classList.add("deleted");
    });
    capacidad = getCapacidad();
    dMin = getDistancia();
    let persons = document.getElementById("persons").textContent=capacidad;
    solucion(capacidad,dMin)
});

function getCapacidad(){
    let valorPorcentaje = document.getElementById("porcentaje").value;
    let intPorcentaje = parseInt(valorPorcentaje);
    let calc1 = asientosTotales*(Math.trunc(intPorcentaje) / 100);
    let capacidad = Math.trunc(calc1);
    return capacidad;
}

function getDistancia(){
    let valorDist = document.getElementById("distancia").value;
    let dMin = parseInt(valorDist)
    return dMin
}


