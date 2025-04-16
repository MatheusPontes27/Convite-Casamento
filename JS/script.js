ScrollReveal().reveal('.container1', {
  delay: 300,        // Atraso de 300ms antes da animação
  distance: '50px',  // Distância do movimento (em pixels)
  origin: 'bottom',  // O elemento aparece vindo de baixo
  duration: 1000,    // Tempo da animação (em milissegundos)
  easing: 'ease-in-out', // Efeito de transição
});

ScrollReveal().reveal('.container2', {
  delay: 300,        // Atraso de 300ms antes da animação
  distance: '50px',  // Distância do movimento (em pixels)
  origin: 'bottom',  // O elemento aparece vindo de baixo
  duration: 1000,    // Tempo da animação (em milissegundos)
  easing: 'ease-in-out', // Efeito de transição
});

ScrollReveal().reveal('.container3', {
  delay: 300,        // Atraso de 300ms antes da animação
  distance: '50px',  // Distância do movimento (em pixels)
  origin: 'bottom',  // O elemento aparece vindo de baixo
  duration: 1000,    // Tempo da animação (em milissegundos)
  easing: 'ease-in-out', // Efeito de transição
});

function handleTickInit(tick) {
  // Define a data de contagem regressiva
  var countdownDate = "2025-07-05T17:30:00";

  // Criar o contador regressivo
  var counter = Tick.count.down(countdownDate);

  counter.onupdate = function (value) {
      tick.value = value;
  };

  counter.onended = function () {
      // Mensagem ao final da contagem regressiva
      document.querySelector('.tick-onended-message').style.display = '';
  };
}

function toggleMenu() {
  const navList = document.querySelector('.navList');
  navList.classList.toggle('active');
}

function playMusic() {
  document.getElementById("musica").play();
  closePopup(); // Fecha o pop-up após aceitar
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// JS/script.js
function verificarAcessoPadrinhos(event) {
  event.preventDefault();
  
  const SENHA_CORRETA = "Deus0507"; // Altere para sua senha real
  const senhaInserida = prompt("Área restrita\nDigite a senha para acessar:");
  
  if (senhaInserida === SENHA_CORRETA) {
      window.location.href = "pagina4.html";
  } else {
      alert("Senha incorreta. Fale com o casal para obter acesso.");
  }
}

// Vincula ao link existente no menu
document.addEventListener('DOMContentLoaded', function() {
  const linkPadrinhos = document.querySelector('a[href="pagina4.html"]');
  
  if (linkPadrinhos) {
      linkPadrinhos.addEventListener('click', verificarAcessoPadrinhos);
  }
});























