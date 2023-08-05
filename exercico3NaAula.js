function verificar() {
    const idade = parseInt(document.getElementById("idade").value);
    const carta = parseInt(document.getElementById("carta").value);
  
    
    if (idade < 18 && carta ) {
      document.getElementById("result").innerHTML = "Não Pode Dirigir!";
    } else if (idade >=18 && carta = sim) {
      document.getElementById("result").innerHTML = " Pode Dirigir !";
    } else {
      document.getElementById("result").innerHTML = "Nada Informado! ";
    }
  }
  function limpar(){
      document.getElementById("result").innerHTML = "";
    }