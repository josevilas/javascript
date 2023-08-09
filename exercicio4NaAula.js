function verificar() {
    const palavra = document.getElementById("palavra").value.toLowerCase();
    //typeof(palavra) - verifica o tipo de uma variavel ou constante 
    if (palavra == ""){
      document.getElementById("result").innerHTML = "Não foi informada nenhuma palavra ";
    }else{
    const inversa = palavra.split("").reverse().join("");
    if(palavra == inversa){
    document.getElementById("result").innerHTML = "SIM";
    }else{
      document.getElementById("result").innerHTML = "NÃO";
     }
  
    }
    
  }
  function limpar(){
    document.getElementById('result').innerHTML = "";
  }