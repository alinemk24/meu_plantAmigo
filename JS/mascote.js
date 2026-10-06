const mascote = localStorage.getItem("mascote");

const imagemMascote = document.getElementById("mascoteMascote");

if (mascote === "axolote") {
    imagemMascote.src = "../IMG/mascote_axolote.png";
}

if (mascote === "sapo") {
    imagemMascote.src = "../IMG/mascote_sapo.png";
}

// pontos
let pontos = Number(localStorage.getItem("pontos")) || 0;

const quantidadePontos = document.getElementById("quantidadePontos");

quantidadePontos.textContent = pontos;

function adicionarPontos(valor) {

    pontos += valor;

    localStorage.setItem("pontos", pontos);

    quantidadePontos.textContent = pontos;

}

// botão personalizar
const btnPersonalizar = document.getElementById("btnPersonalizar");

btnPersonalizar.addEventListener("click", function() {
    window.location.href = "loja.html";
});