let bars = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-times");
let move = document.querySelector(".moves");
bars.addEventListener("click", () => {
    move.classList.toggle("active");
    close.classList.toggle("active");
});
close.addEventListener("click", () => {
    move.classList.toggle("active");
    close.classList.toggle("active");
});