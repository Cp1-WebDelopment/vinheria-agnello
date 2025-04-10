
// 5. Informações obrigatórias a serem coletadas:
//    - Nome do vinho  
//    - Tipo (Tinto, Branco, Rosé)  
//    - Safra (ano)  
//    - Qu"antidade em estoque
// 1. **As informações devem ser solicitadas ao usuário usando `prompt()`**
var nomeDoVinho = prompt("qual é o nome do vinho?")
// 2. **Valide se o usuário realmente digitou algum valor** em cada `prompt()`
//    - Se o campo estiver vazio ou cancelado, solicite novamente a entrada
if (nomeDoVinho == "") {
    alert("nome do vinho não inserido")
    nomeDoVinho = prompt("qual é o nome do vinho?")
}
if (nomeDoVinho != "") {
    alert(`nome do vinho inserido -> ${nomeDoVinho}`)
}

// 1. **As informações devem ser solicitadas ao usuário usando `prompt()`**
var tipoDoVinho = prompt("qual seria o tipo do vinho?")
// 2. **Valide se o usuário realmente digitou algum valor** em cada `prompt()`
//    - Se o campo estiver vazio ou cancelado, solicite novamente a entrada
if (tipoDoVinho == "") {
    alert("tipo do vinho não inserido")
    tipoDoVinho = prompt("qual seria o tipo do vinho")
}
if (tipoDoVinho != "") {
    alert(`tipo do vinho inserido -> ${tipoDoVinho}`)
}
// 1. **As informações devem ser solicitadas ao usuário usando `prompt()`**
var safraDoVinho = prompt("de que safra é o vinho?")
// 2. **Valide se o usuário realmente digitou algum valor** em cada `prompt()`
//    - Se o campo estiver vazio ou cancelado, solicite novamente a entrada
if (safraDoVinho == "") {
    alert("safra do vinho não inserida")
    safraDoVinho = prompt("de que safra é o vinho?")
}
if (safraDoVinho != "") {
    alert(`safra inserida -> ${safraDoVinho}`)
}
// 1. **As informações devem ser solicitadas ao usuário usando `prompt()`**
var quantidadeVinho = prompt("quanto desse vinho tem disponivel no estoque?")
// 2. **Valide se o usuário realmente digitou algum valor** em cada `prompt()`
//    - Se o campo estiver vazio ou cancelado, solicite novamente a entrada
if (quantidadeVinho == "") {
    alert("quantidade do vinho não inserida")
    quantidadeVinho = prompt("quanto desse vinho tem disponivel no estoque??")
}
if (quantidadeVinho != "") {
    alert(`estoque do vinho -> ${quantidadeVinho}`)
}


// 3. Após o cadastro, exiba um `alert()` informando:
//    > `"Cadastro realizado! Veja os detalhes no console."`
if (nomeDoVinho != "" & tipoDoVinho != "" & safraDoVinho != "" & quantidadeVinho != "") {
    alert("Cadastro realizado! Veja os detalhes no console")
    //     4. **Sempre que alguma informação for exibida no console, deve haver um `alert()` antes avisando o usuário**, como por exemplo:  
    //    > `"A seguir, veja os detalhes do vinho no console."`
    // samuel, inserir aqui dentro do bloco de comando os detalhes do vinho no console.
}



// "calculo" do estoque
// 6. Verificação de estoque:
var estoque = ""
if (quantidadeVinho < 5) {
    estoque = "estoque baixo"
    alert("a seguir veja o estado do estoque no console")
    //exibir no console ESTOQUE BAIXO
} else {
    estoque = "estoque normal"
    alert("a seguir veja o estado do estoque no console")
    //exibir no console ESTOQUE NORMAL
}

var idadeVinho = ""
if (safraDoVinho => 2020) {
    idadeVinho = "Vinho Jovem"
}
else if (safraDoVinho >= 2015 & safraDoVinho <= 2019) {
    idadeVinho = "Vinho Amadurecido"
}
else {
    idadeVinho = "Vinho Antigo"
}














