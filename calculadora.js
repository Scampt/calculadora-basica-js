let botonResultado = document.getElementById("resultado");
botonResultado = document.addEventListener("click", operacion);

function operacion(resultado) 
{
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    
    resultado = numero1 + numero2
    
    document.getElementById("resultado").value = resultado;
}