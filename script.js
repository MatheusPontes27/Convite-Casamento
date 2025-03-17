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

document.addEventListener("DOMContentLoaded", function () {
  let audio = document.getElementById("background-music");

  // Recupera o tempo salvo
  let savedTime = localStorage.getItem("musicTime");

  if (savedTime) {
      audio.currentTime = parseFloat(savedTime);
  }

  // Salva o tempo da música antes de sair da página
  window.addEventListener("beforeunload", function () {
      localStorage.setItem("musicTime", audio.currentTime);
  });

  audio.play();
});

document.addEventListener('DOMContentLoaded', function () {
  var audio = document.getElementById('background-music');
  
  // Verificar se o áudio foi encontrado
  if (audio) {
      // Tentando reproduzir o áudio automaticamente
      audio.play().catch(function (error) {
          console.log("Erro ao tentar reproduzir o áudio: ", error);
      });
  } else {
      console.log("Elemento de áudio não encontrado");
  }
});




