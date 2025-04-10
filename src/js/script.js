
// 5. Informações obrigatórias a serem coletadas:
//    - Nome do vinho  
//    - Tipo (Tinto, Branco, Rosé)  
//    - Safra (ano)  
//    - Qu"antidade em estoque
// 1. **As informações devem ser solicitadas ao usuário usando `prompt()`**
nomeDoVinho = prompt("qual é o nome do vinho?")
// 2. **Valide se o usuário realmente digitou algum valor** em cada `prompt()`
if (nomeDoVinho == "") {
    alert("nome do vinho não inserido")
    nomeDoVinho = prompt("qual é o nome do vinho?")
}
if (nomeDoVinho != "") {
    alert(`nome do vinho inserido -> ${nomeDoVinho}`)
}
// 2. **Valide se o usuário realmente digitou algum valor** em cada `prompt()`
// 1. **As informações devem ser solicitadas ao usuário usando `prompt()`**
tipoDoVinho = prompt("qual seria o tipo do vinho?")
if (tipoDoVinho == "") {
    alert("tipo do vinho não inserido")
    tipoDoVinho = prompt("qual seria o tipo do vinho")
}
if (tipoDoVinho != "") {
    alert(`tipo do vinho inserido -> ${tipoDoVinho}`)
}
// 2. **Valide se o usuário realmente digitou algum valor** em cada `prompt()`
// 1. **As informações devem ser solicitadas ao usuário usando `prompt()`**
safraDoVinho = prompt("de que safra é o vinho?")
if (safraDoVinho == "") {
    alert("safra do vinho não inserida")
    safraDoVinho = prompt("de que safra é o vinho?")
}
if (safraDoVinho != "") {
    alert(`safra inserida -> ${safraDoVinho}`)
}
// 2. **Valide se o usuário realmente digitou algum valor** em cada `prompt()`
// 1. **As informações devem ser solicitadas ao usuário usando `prompt()`**
quantidadeVinho = prompt("quanto desse vinho tem disponivel no estoque?")
if (quantidadeVinho == "") {
    alert("quantidade do vinho não inserida")
    quantidadeVinho = prompt("quanto desse vinho tem disponivel no estoque??")
}
if (quantidadeVinho != "") {
    alert(`estoque do vinho -> ${quantidadeVinho}`)
}
















//    - Se o campo estiver vazio ou cancelado, solicite novamente a entrada
// 3. Após o cadastro, exiba um `alert()` informando:
//    > `"Cadastro realizado! Veja os detalhes no console."`
// 4. **Sempre que alguma informação for exibida no console, deve haver um `alert()` antes avisando o usuário**, como por exemplo:
//    > `"A seguir, veja os detalhes do vinho no console."`