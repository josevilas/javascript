function verificar() {
  const numero = parseInt(document.getElementById("numero").value);

  if (numero < 0) {
    document.getElementById("result").innerHTML = "Numero negativo !";
  } else if (numero >=0) {
    document.getElementById("result").innerHTML = " Numero positivo !";
  } else {
    document.getElementById("result").innerHTML = "Numero não informado! ";
  }
}
function limpar(){
    document.getElementById("result").innerHTML = "";
  }