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


function busquedaAsiento(xInicio,yInicio,xPos,yPos,asientos,dMin) {
    let dMax = 0;
    let nuevoAsiento=0;
    for (let i = 0; i < xPos.length; i++) {
        let distancia = Math.sqrt((Math.pow(xInicio-xPos[i],2)) + (Math.pow(yInicio-yPos[i],2)));
        if (distancia>dMax && !(i in asientos) && distancia>=dMin){
            let contP=0;
            asientos.forEach(j => {
                d = Math.sqrt((Math.pow(xPos[i]-xPos[j],2)) + (Math.pow(yPos[i]-yPos[j],2)));
                if (d >= dMin){
                    contP+=1;
                }
            });
            if (contP==asientos.length){
                dMax = distancia;
                nuevoAsiento = i;
            }
        }
    }

    return nuevoAsiento
}

function solucion(){
    const xPos=[0,0,0,0,0,0,0,0,0,0,
                40,40,40,40,40,40,40,40,40,
                122,122,122,122,122,122,122,122,
                162,162,162,162,162,162,162,162]
    const yPos=[65, 0,-65,-130,-195,-260,-325,-390,-455,-520,
                0,-65,-130,-195,-260,-325,-390,-455,-520,
                0,-65,-130,-195,-260,-325,-390,-520,
                0,-65,-130,-195,-260,-325,-390,-520]
    let asientos = []
    asientos.push(0);
    let cont = 1;
    let xInicio = xPos[0];
    let yInicio = yPos[0];
    while (cont < capacidad) {
        nuevoAsiento = busquedaAsiento(xInicio,yInicio,xPos,yPos,asientos,dMin)
        if (nuevoAsiento==0){
            break;
        } else {
            asientos.push(nuevoAsiento);
            xInicio = xPos[nuevoAsiento];
            yInicio = yPos[nuevoAsiento];
        }
        cont += 1;
    }
    
    if (cont < capacidad){
        alert("No es Posible")
    } else {
        for (let i = 0; i < asientos.length; i++) {
            console.log(asientos[i])
            if (seat[asientos[i]].id == asientos[i]){
                seat[asientos[i]].classList.remove("deleted");
            }
            }
        }
    }

