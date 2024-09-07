const botaoAbrir = document.querySelector("header > button")
const botaoFechar = document.querySelector("header nav button")

const body = document.querySelector("body")
const nav = document.querySelector("header .mobile")

botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click', fecharMenu)

function abrirMenu () {
  body.classList.add("escurecer")
  nav.classList.add("abrir")
}

function fecharMenu () {
  body.classList.remove("escurecer")
  nav.classList.remove("abrir")
} // Abrir/Fechar menu FIM

function navegarParaSecao() {
  const id = document.getElementById("inputPesquisa").value;
  const elemento = document.getElementById(id);

  if (elemento) {
    elemento.scrollIntoView({ behavior: 'smooth' });
  } else {
    alert("Seção não encontrada.");
  }
}

