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

function verificarSenha() {
  const senha = prompt("Digite a senha para acessar a página de Padrinhos:");
  // Substitua "senha123" pela senha que você deseja usar
  if (senha === "Deus0507") {
      window.location.href = "pagina4.html"; // substitua pelo URL real
  } else {
      alert("Senha incorreta. Acesso negado.");
  }
}























