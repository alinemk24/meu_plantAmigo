const nomePlanta = localStorage.getItem("nomePlanta");
const mascote = localStorage.getItem("mascote");
const ultimaRega = localStorage.getItem("ultimaRega");

const ultimaRegaElemento = document.getElementById("ultimaRega");

const mascoteMensagem = document.getElementById("mascoteMensagem");
const imagemMascote = document.getElementById("mascoteHome");

mascoteMensagem.textContent = nomePlanta + " está saudável!";

console.log(mascote);

if (mascote === "axolote") {
    imagemMascote.src = "../IMG/mascote_axolote.png";
}

if (mascote === "sapo") {
    imagemMascote.src = "../IMG/mascote_sapo.png";
}

if (ultimaRega) {
    ultimaRegaElemento.textContent = ultimaRega;
}