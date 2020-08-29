const seat = document.querySelectorAll(".asiento");
const porcentaje = document.querySelector("#porcentaje");

porcentaje.addEventListener('mouseup', function(){
    if (this.value > 0 && this.value < 50){
        seat[0].classList.add("deleted");
    } else{
        seat[0].classList.remove("deleted");
    }
});

for (let i = 0; i < seat.length; i++) {
    seat[i].addEventListener("click", function(){
        seat[i].classList.toggle("deleted");
    })
}