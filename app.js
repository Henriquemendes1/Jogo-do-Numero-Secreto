let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female",
     {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do numero secreto ");
    exibirTextoNaTela("p", "Escolha um Número entre 1 e 10");
}
exibirMensagemInicial();
  
function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1","Isso ai!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("P", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", `O número Secreto é menor que ${chute}`)}
            else{
            exibirTextoNaTela("p",`O número Secreto é maior que ${chute}`);}
            tentativas++;
            limparCampo();
            }
        }
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   }else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;

   }
}
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);

}