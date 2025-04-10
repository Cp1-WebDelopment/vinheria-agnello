
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
    safraDoVinho = prompt("de que ano é a safra é do vinho?")
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

// Exibindo detalhes básicos no console
    console.log("=== DADOS DO VINHOS ===")
    console.log(`Nome: ${nomeDoVinho}`)
    console.log(`Tipo: ${tipoDoVinho}`)
    console.log(`Safra: ${safraDoVinho}`)
    console.log(`Quantidade: ${quantidadeVinho}`)
    console.log("=============================")
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
    estoque = "estoque baixo"
    alert("a seguir veja o estado do estoque no console")
// Exibindo o console de "ESTOQUE BAIXO"
    console.log("⚠️ ATENÇÃO: " + estoque + " ⚠️")
    console.log(`Quantidade atual: ${quantidadeVinho} (Mínimo recomendado: 5)`)
    //exibir no console ESTOQUE BAIXO
} else {
    estoque = "estoque normal"
    alert("a seguir veja o estado do estoque no console")
// Exibindo no console "ESTOQUE NORMAL"
    console.log("✅ " + estoque + " ✅")
    console.log(`Quantidade atual: ${quantidadeVinho}`)
    //exibir no console ESTOQUE NORMAL
}

var idadeVinho = ""
if (safraDoVinho >= 2020) {
    idadeVinho = "Vinho Jovem"
    alert("Classificação da safra inserida no console")
    // Exibindo a classificação da safra no console
    console.log(" Classificação: " + idadeVinho + " (Safra recente)")
}
else if (safraDoVinho >= 2015 & safraDoVinho <= 2019) {
    idadeVinho = "Vinho Amadurecido"
    alert("Classificação da safra inserida no console")
    // Exibindo a classificação da safra no console

}
else {
    idadeVinho = "Vinho Antigo"
    alert("Classificação da safra inserida no console")
    // Exibindo a classificação da safra no console
    
}


alert("uma síntese do vinho cadastrado foi inserida no console")
//samuel, fazer um console.log com a seguinte frase

// (`Nome do Vinho:               ${nomeDoVinho}
//        Tipo do Vinho:               ${tipoDoVinho}
//        Ano Da Safra:                ${safraDoVinho}
//        Classificação do Vinho:      ${idadeVinho}
//        Quantidade em estoque:       ${quantidadeVinho}
//        Estado Do Estoque:           ${estoque}`)













