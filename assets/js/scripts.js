
const btn = document.getElementById("btn");
console.log(btn);

btn.addEventListener('click', function(){
    const cantidad = document.getElementById("cantidad").value;
    const color = document.getElementById("color").value;
    const precio = document.getElementById("precio").textContent;
    const rTotal = document.getElementById("rTotal");
    const rCantidad = document.getElementById("rCantidad");
    const rColor = document.getElementById("rColor");
    rTotal.textContent = precio * cantidad;
    rCantidad.textContent = cantidad;
    rColor.style.backgroundColor = color;
    console.log(cantidad, color);
});