let corEscolhida = "#4da3ff";

function escolherCor(cor) {
  corEscolhida = cor;
  document.getElementById("mensagem").innerHTML = "Cor selecionada!";
}

function verificar(botao, resposta, correta) {
  if (resposta === correta) {
    botao.style.backgroundColor = corEscolhida;
    botao.style.color = "white";
    document.getElementById("mensagem").innerHTML = "Parabéns! Resposta correta.";
  } else {
    botao.style.backgroundColor = "#ff6b6b";
    botao.style.color = "white";
    document.getElementById("mensagem").innerHTML = "Tente novamente.";
  }
}
