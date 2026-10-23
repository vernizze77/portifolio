console.log("Olá")

const nome = "Vernizze"
let hora = new Date().getHours();
console.log(hora);

let saudacao;
if (hora < 12) {
    saudacao = "Bom dia";
} else if (hora < 18) {
    saudacao = "Boa Tarde";
} else {
    saudacao = "Boa Noite";

}
console.log(saudacao);

const titulo = document.querySelector(".Titulo");
titulo.textContent = saudação + ", Eu sou o " + nome, "Seja Bem vindo ao meu Portfólio";