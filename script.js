/* mudança de tema */
// Ajustado para o ID 'change-theme' que colocamos no HTML
document.querySelector("#change-theme").addEventListener("change", function() {
    document.body.classList.toggle("tema-claro");
    document.body.classList.toggle("tema-escuro");
});

/* ícone de menu responsivo */
let navegacao = document.querySelector('.cabecalho__navegacao'); 
let navIcon = document.querySelector('#js-navbar');

navIcon.addEventListener('click', function() {
    navegacao.classList.toggle('cabecalho__navegacao--ativado');
});

/* animação título (Efeito "Typing") */
var tituloAnimado = document.querySelector(".sobremim__titulo--animado");
var textoTitulo = "Do Hardware ao Software"; // Atualizado para o seu novo slogan
var index = 0, isAdding = true;

function playAnim() {
  setTimeout(function () {
    tituloAnimado.innerText = textoTitulo.slice(0, index);
    if (isAdding) {
      if (index > textoTitulo.length) {
        isAdding = false;
        setTimeout(function () {
          playAnim();
        }, 1500); // Pausa maior ao terminar de escrever
        return;
      } else {
        index++;
      }
    } else {
      if (index === 0) {
        isAdding = true;
      } else {
        index--;
      }
    }
    playAnim();
  }, 100); // Velocidade de digitação
}

playAnim();

/* validação de formulário */
const form = document.getElementById("form");
const comentario = document.querySelector("textarea[name='comentario']");
const mensagemErro = document.querySelector(".mensagem-erro");
const mensagemSucesso = document.getElementById("sucesso");

comentario.addEventListener("input", function () {
    if (comentario.value.trim().length < 10) {
        comentario.classList.add("erro");
        mensagemErro.style.display = "block";
        comentario.setCustomValidity("Invalido");
    } else {
        comentario.classList.remove("erro");
        mensagemErro.style.display = "none";
        comentario.setCustomValidity("");
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        comentario.classList.add("erro");
        return;
    }

    // Sucesso com tom profissional
    mensagemSucesso.textContent = "Mensagem enviada com sucesso! Entrarei em contato em breve.";
    mensagemSucesso.style.display = "block";
    
    // Feedback visual de botão (Opcional: desabilitar após envio)
    const botao = document.getElementById("enviar");
    botao.value = "Enviado!";
    botao.style.backgroundColor = "#4bb450";

    form.reset();
});