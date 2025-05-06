const BOTON_EVENTOS = document.getElementById("btnEventos");
const ETIQUETA_P = document.getElementById("etiquetP");
const BOTON_ROJO = document.getElementById("btnFondoRojo");
const H2_FONDO_ROJO = document.getElementById("h2FondoRojo");

//función básica en JS
function cambiarFondo(){
    ETIQUETA_P.style.backgroundColor="red";
}
function cambiarFondo2(){
    ETIQUETA_P.style.backgroundColor="blue";
}
//llamar a una función existente por nombre
BOTON_ROJO.addEventListener("click",cambiarFondo);
document.getElementById("btnFondoAzul").addEventListener("click",cambiarFondo2);
H2_FONDO_ROJO.addEventListener("click",cambiarFondo);

ETIQUETA_P.addEventListener("dblclick",()=>{
    ETIQUETA_P.textContent="haz click";
    ETIQUETA_P.style.color="white";
    ETIQUETA_P.style.backgroundColor="black";
});
ETIQUETA_P.addEventListener("click",()=>{
    ETIQUETA_P.removeAttribute("style");
    ETIQUETA_P.textContent="haz doble click";
});

BOTON_EVENTOS.addEventListener("click",()=>{
    console.log("clic en el boton");
    alert("Clic en el boton");
    BOTON_EVENTOS.textContent="Clic en boton";
});
BOTON_EVENTOS.addEventListener("mouseover",()=>{
    BOTON_EVENTOS.textContent="Mouse over";
});
BOTON_EVENTOS.addEventListener("mouseout",()=>{
    BOTON_EVENTOS.textContent="Mouse out";
});


