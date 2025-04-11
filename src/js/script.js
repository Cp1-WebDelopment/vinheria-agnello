
// solicitando nome do vinho
var nomeDoVinho = prompt("qual é o nome do vinho?")
// validando o nome inserido, caso não tenha sido inserido, vai ter o prompt denovo
if (nomeDoVinho == "") {
    alert("nome do vinho não inserido")
    nomeDoVinho = prompt("qual é o nome do vinho?")
}
if (nomeDoVinho != "") {
    alert(`nome do vinho inserido -> ${nomeDoVinho}`)
}

// solicitando o tipo do vinho
var tipoDoVinho = prompt("qual seria o tipo do vinho?")
// validando o tipo inserido, caso não tenha sido inserido, vai ter o prompt denovo
if (tipoDoVinho == "") {
    alert("tipo do vinho não inserido")
    tipoDoVinho = prompt("qual seria o tipo do vinho")
}
if (tipoDoVinho != "") {
    alert(`tipo do vinho inserido -> ${tipoDoVinho}`)
}
// solicitando o ano da safra do vinho
var safraDoVinho = parseInt(prompt("de que ano é a safra é do vinho?"))
// validando o ano inserido, caso não tenha sido inserido, vai ter o prompt denovo
if (safraDoVinho <= 0 || safraDoVinho == null) {
    alert("safra do vinho inválida ou não inserida")
    safraDoVinho = prompt("de que ano é a safra do vinho?")
}
if (safraDoVinho != null & quantidadeVinho > 0) {
    alert(`safra inserida -> ${safraDoVinho}`)
}
// solicitando a quantidade do vinho disponivel no estoque
var quantidadeVinho = parseInt(prompt("quanto desse vinho tem disponivel no estoque?"))
// validando se o usuario inseriu uma quantidade valida, caso não, havera o prompt novament
if (quantidadeVinho <= 0 || quantidadeVinho == null) {
    alert("quantidade do vinho não inserida, ou invalida")
    quantidadeVinho = prompt("quanto desse vinho tem disponivel no estoque??")
}
if (quantidadeVinho != null & quantidadeVinho > 0) {
    alert(`estoque do vinho -> ${quantidadeVinho}`)
}


// caso todas as informações tenham sido inseridas e validadas, exibe um alert 
if (nomeDoVinho != "" & tipoDoVinho != "" & safraDoVinho != "" & quantidadeVinho != "") {
    alert("Cadastro realizado! Veja os detalhes no console")

    console.log("=============================")
    console.log("===== VINHO CADASTRADO =====")
    console.log(`Nome do Vinho: ${nomeDoVinho}`)
    console.log(`Tipo de Vinho: ${tipoDoVinho}`)
    console.log(`Ano da Safra do Vinho: ${safraDoVinho}`)
    console.log(`Quantidade de Vinho: ${quantidadeVinho}`)  
    console.log("=============================")

// Exibindo detalhes básicos no console
// samuel, inserir aqui dentro do bloco de comando os detalhes do vinho no console.
    //ex: nome vinho:
    //    tipo vinho:
    //    safra vinho:
    //    quantidade vinho:
// samuel, não precisa ser exatamente do jeito que eu escrevi, só deixei desse jeito para vc ter uma ideia doque 
//printar no console nesse momento do código
}



// "calculo" do estoque
var estoque = ""
if (quantidadeVinho < 5) {
    estoque = "Estoque Baixo"
    alert("a seguir veja o estado do estoque no console")
    //exibir no console ESTOQUE BAIXO
} else {
    estoque = "Estoque Normal"
    alert("a seguir veja o estado do estoque no console")
    //exibir no console ESTOQUE NORMAL
}

var idadeVinho = ""
if (safraDoVinho >= 2020) {
    idadeVinho = "Vinho Jovem"
    alert("Classificação da safra inserida no console")
    // Exibindo a classificação da safra no console
}
else if (safraDoVinho >= 2015 & safraDoVinho <= 2019) {
    idadeVinho = "Vinho Amadurecido"
    alert("Classificação da safra inserida no console")
    // Exibindo a classificação da safra no console
}
else {
    idadeVinho = "Vinho Antigo"
    alert("Classificação da safra inserida no console")
}


alert("uma síntese do vinho cadastrado foi inserida no console")
//samuel, fazer um console.log com a seguinte frase

// (`Nome do Vinho:               ${nomeDoVinho}
//        Tipo do Vinho:               ${tipoDoVinho}
//        Ano Da Safra:                ${safraDoVinho}
//        Classificação do Vinho:      ${idadeVinho}
//        Quantidade em estoque:       ${quantidadeVinho}
//        Estado Do Estoque:           ${estoque}`)
    console.log(`Estado do Estoque do Vinho: ${estoque}`)
    console.log(`Classificação do Vinho: ${idadeVinho}`)
    console.log("=============================")
    console.log("===== SÍNTESE DOS VINHOS CADASTRADOS =====")
    console.log(`Nome do Vinho: ${nomeDoVinho}`)
    console.log(`Tipo de Vinho: ${tipoDoVinho}`)
    console.log(`Ano da Safra do Vinho: ${safraDoVinho}`)
    console.log(`Quantidade de Vinho: ${quantidadeVinho}`)  
    console.log(`Estado do Estoque do Vinho: ${estoque}`)
    console.log(`Classificação do Vinho: ${idadeVinho}`)












