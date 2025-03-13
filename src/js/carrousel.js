let slideIndex = 0;
let intervalo; // Variável para armazenar o intervalo de mudança automática

// Função para mudar automaticamente os slides
function iniciarAutoSlide() {
  intervalo = setInterval(() => {
    proximoSlide();
  }, 15000); // Muda a cada 20 segundos
}

// Função para avançar para o próximo slide automaticamente
function proximoSlide() {
  const totalSlides = document.querySelectorAll('.slides img').length;
  slideIndex = (slideIndex + 1) % totalSlides; // Volta ao primeiro depois do último
  atualizarSlide();
}

// Função para mudar para um slide específico (usada pelos indicadores)
function irParaSlide(n) {
  slideIndex = n;
  atualizarSlide();

  // Pausar a troca automática por 40 segundos
  clearInterval(intervalo); // Para o intervalo atual
  setTimeout(iniciarAutoSlide, 30000); // Reinicia após 40 segundos
}

// Atualiza a posição do slide e os indicadores ativos
function atualizarSlide() {
  const slides = document.querySelector('.slides');
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  atualizarIndicadores();
}

// Atualiza os indicadores visuais
function atualizarIndicadores() {
  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === slideIndex);
  });
}

// Inicializa o carrossel quando a página carrega
document.addEventListener("DOMContentLoaded", () => {
  atualizarIndicadores();
  iniciarAutoSlide(); // Inicia a troca automática

  // Adiciona evento de clique nos indicadores
  document.querySelectorAll('.indicator').forEach((indicator, index) => {
    indicator.addEventListener('click', () => irParaSlide(index));
  });
});
