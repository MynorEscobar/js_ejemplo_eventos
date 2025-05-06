const btnEjecutar = document.getElementById("btn_generar");
const divResultado = document.getElementById("div_resultado");
const btnLita = document.getElementById("btn_lista");
let txtNumero;
let acumular;
let acumularHtml="";

btnEjecutar.addEventListener("click",()=>{
    acumular="";
    acumularHtml="";
    txtNumero = parseInt(document.getElementById("txt_numero").value);
    console.log(txtNumero);
    for (let index = 1; index <= 10; index++) {
        acumular+=txtNumero+" x "+ index +" = "+ (txtNumero * index) +"\n";
        acumularHtml+="<br>"+txtNumero+" x "+ index +" = "+ (txtNumero * index) +"\n";
        console.log(index);
    }
    console.log(acumular);
    alert(acumular);
    
    divResultado.innerHTML="";
    
    const elemento = document.createElement("p");
    elemento.innerHTML=acumularHtml;
    const titulo = document.createElement("h2");
    titulo.innerText="Tabla de Multiplicación del " + txtNumero;
    divResultado.append(titulo, elemento)
    

});

btnLita.addEventListener("click",()=>{
    acumularHtml="";
    txtNumero = parseInt(document.getElementById("txt_numero").value);
    const ul = document.createElement("ul");
    ul.innerHTML="";
    for (let index = 1; index <= 10; index++) {
        const li = document.createElement("li");
        li.innerHTML=txtNumero+" x "+ index +" = "+ (txtNumero * index) +"\n";
        ul.appendChild(li);        
    }
    
    divResultado.innerHTML="";
    
    
    const titulo = document.createElement("h2");
    titulo.innerText="Tabla de Multiplicación del " + txtNumero;
    divResultado.append(titulo, ul)
    

});