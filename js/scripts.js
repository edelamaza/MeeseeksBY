const seat = document.querySelectorAll(".asiento")

for (let i = 0; i < seat.length; i++) {
    seat[i].addEventListener("click", function(){
        seat[i].classList.toggle("deleted")
    })
}