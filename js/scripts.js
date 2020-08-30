const seat = document.querySelectorAll(".asiento");
const porcentaje = document.getElementById("porcentaje");
const distancia = document.getElementById("distancia");
const asientosTotales = 35;
const btnEnter = document.querySelector(".enter");
const area = document.querySelector("#area");
const asientoDisc = document.getElementById("34");
const checkbox = document.getElementById("handicap");
const asientoXElement = document.getElementById("asientoX");
const asientoYElement = document.getElementById("asientoY");
const pasilloXElement = document.getElementById("pasilloX");


btnEnter.addEventListener("click", function(){
    seat.forEach(element => {
        element.classList.add("deleted");
    });
    capacidad = getCapacidad();
    dMin = getDistancia();
    let persons = document.getElementById("persons").textContent=capacidad;
    let discCheck = checkbox.checked
    asientoX = getAsientoX();
    asientoY = getAsientoY();
    pasilloX = getPasilloX();

    solucion(capacidad,dMin,discCheck,asientoX,asientoY,passilloX)
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

function getAsientoX(){
    let valorAsientoX = document.getElementById("asientoX").value;
    let asientoX = parseInt(valorAsientoX)
    return asientoX
}

function getAsientoY(){
    let valorAsientoY = document.getElementById("asientoY").value;
    let asientoY = parseInt(valorAsientoY)
    return asientoY
}

function getPasilloX(){
    let valorpasilloX = document.getElementById("pasilloX").value;
    let pasilloX = parseInt(valorpasilloX)
    return pasilloX
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

function solucion(capacidad, dMin, checked,asientoX,asientoY,pasilloX){
    const xPos=[0,0,0,0,0,0,0,0,0,0,
                1*asientoX,1*asientoX,1*asientoX,1*asientoX,1*asientoX,1*asientoX,1*asientoX,1*asientoX,1*asientoX,
                2*asientoX+pasilloX,2*asientoX+pasilloX,2*asientoX+pasilloX,2*asientoX+pasilloX,2*asientoX+pasilloX,2*asientoX+pasilloX,2*asientoX+pasilloX,2*asientoX+pasilloX,
                3*asientoX+pasilloX,3*asientoX+pasilloX,3*asientoX+pasilloX,3*asientoX+pasilloX,3*asientoX+pasilloX,3*asientoX+pasilloX,3*asientoX+pasilloX,3*asientoX+pasilloX]
    const yPos=[1*asientoY,0*asientoY,-1*asientoY,-2*asientoY,-3*asientoY,-4*asientoY,-5*asientoY,-6*asientoY,-7*asientoY,-8*asientoY,
                0*asientoY,-1*asientoY,-2*asientoY,-3*asientoY,-4*asientoY,-5*asientoY,-6*asientoY,-7*asientoY,-8*asientoY,
                0*asientoY,-1*asientoY,-2*asientoY,-3*asientoY,-4*asientoY,-5*asientoY,-6*asientoY,-8*asientoY,
                0*asientoY,-1*asientoY,-2*asientoY,-3*asientoY,-4*asientoY,-5*asientoY,-6*asientoY,-8*asientoY,]
    let asientos = []
    asientos.push(0);
    let cont = 0;
    if (checked == true){
        asientos.push(34);
        asientoDisc.src = "img/busseat-disc.png"
        cont = 2;
    } else {
        asientoDisc.src = "img/busseat.png"
        cont = 1;
    }
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
        let persons = document.getElementById("persons").textContent="limit exceded";
    } else {
        for (let i = 0; i < asientos.length; i++) {
            console.log(asientos[i])
            if (seat[asientos[i]].id == asientos[i]){
                seat[asientos[i]].classList.remove("deleted");
            }
            }
        }
    }

