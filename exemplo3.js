function cadastrar(){
    const nome = document.getElementById("nome").value; 
    const idade = parseInt(document.getElementById("idade").value); 
    const email = document.getElementById("email").value;
    
    const pessoa = {
        nome: nome,
        idade: idade,
        email : email,
    };

    const telefones= ['64 9 9999 9999', '64 9 9999 9991' ];

    const produtos = [
        {nome: 'TV', quantidade: 10, preco: 2500.78},
        {nome: 'celular', quantidade: 5, preco: 2900.45},
        {nome: 'notebook', quantidade: 3, preco: 3500.89},
        {nome: 'Computador', quantidade: 10, preco: 2871.45},
    ];

    document.getElementById("result").innerHTML = 
    pessoa.nome +
     '<br>' +
      pessoa.idade +
       '<br>' +
        pessoa.email+
        '<br>' +
        telefones[0]+
        '<br>' +
        produtos[2].nome;

}