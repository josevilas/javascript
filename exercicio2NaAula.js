function verificar() {
    const idade = parseInt(document.getElementById("idade").value);
  
    if (idade < 18) {
      document.getElementById("result").innerHTML = "Não Pode Dirigir!";
    } else if (idade >=18) {
      document.getElementById("result").innerHTML = " Pode Dirigir !";
    } else {
      document.getElementById("result").innerHTML = "Idade não Informada! ";
    }
  }
  function limpar(){
      document.getElementById("result").innerHTML = "";
    }