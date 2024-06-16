var carta1 = {
  nome: "Finn",
  imagem: "./img/finn.jpg",
  atributos: {
  ataque: 10,
  defesa: 18,
  magia: 5,
  Inteligencia: 15
}
};

var carta2 = {
  nome: "Princesa Caroço",
  imagem: "./img/caroco.jpg",
  atributos: {
  ataque: 20,
  defesa: 20,
  magia: 0,
  Inteligencia: 20
}
};

var carta3 = {
  nome: "Princesa Jujuba",
  imagem: "./img/bonni.jpg",
  atributos: {
  ataque: 10,
  defesa: 5,
  magia: 12,
  Inteligencia: 20
}
};

var carta4 = {
  nome: "Marceline",
  imagem: "./img/marcy.jpg",
  atributos: {
  ataque: 17,
  defesa: 10,
  magia: 0,
  Inteligencia: 16
}
};

var carta5 = {
  nome: "Rei gelado",
  imagem: "./img/iceking.jpg",
  atributos: {
  ataque: 18,
  defesa: 17,
  magia: 20,
  Inteligencia: 1
}
};

var carta6 = {
  nome: "Simon",
  imagem: "./img/simon.jpg",
  atributos: {
  ataque: 4,
  defesa: 5,
  magia: 0,
  Inteligencia: 20
}
};

var carta7 = {
  nome: "Jake",
  imagem: "./img/jake.jpg",
  atributos: {
  ataque: 15,
  defesa: 12,
  magia: 8,
  Inteligencia: 10
}
};

var carta8 = {
  nome: "Beemo",
  imagem: "./img/bmo.png",
  atributos: {
  ataque: 2,
  defesa: 9,
  magia: 0,
  Inteligencia: 20
}
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8]
var cartaMaquina
var cartaJogador

function sortearCarta() {
var numeroDeCartasMaquina = parseInt(Math.random() * 8);
cartaMaquina = cartas[numeroDeCartasMaquina];
console.log(cartaMaquina);

var numeroDeCartaJogador = parseInt(Math.random() * 8);
while (numeroDeCartasMaquina == numeroDeCartaJogador) {
  numeroDeCartaJogador = parseInt(Math.random() * 8);
}
cartaJogador = cartas[numeroDeCartaJogador];
console.log(cartaJogador);
document.getElementById("btnSortear").disabled = true;
document.getElementById("btnJogar").disabled = false;

exibirCartaJogador();
}

function obtemAtributoSelecionado() {
   var radioAtributos = document.getElementsByName("atributo");

for (var i = 0; i < radioAtributos.length; i++) {
  if (radioAtributos[i].checked == true) return radioAtributos[i].value;
}
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  var divResultado = document.getElementById("resultado")
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
  if ( cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = "<p class='resultado-final'>Você venceu</p>";
  } 
  else if (
    cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = "<p class='resultado-final'>Você perdeu</p>";
  } 
  else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
 
  exibirCartaMaquina()
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
var tagHTML = "<div id ='opcoes' class='carta-status'>";
  
var opcoesTexto = "";
for (var atributo in cartaJogador.atributos) {
  opcoesTexto +=
    "<input type='radio' name = 'atributo' value= '" +
    atributo +
    "'>" +
    atributo +
    " " +
    cartaJogador.atributos[atributo] +
    "<br>";
}
var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
divCartaJogador.innerHTML = nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
var tagHTML = "<div id ='opcoes' class='carta-status'>";
  
var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
divCartaMaquina.innerHTML = nome + tagHTML + opcoesTexto + "</div>";
}
