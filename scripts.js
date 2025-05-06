window.addEventListener('scroll', () => {
    // calcula o quanto o usuário rolou
    const altura = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const rolado = (window.scrollY / altura) * 100;
  
    // atualiza a largura da barra de progresso abaixo do header
    document.getElementById('progresso').style.width = rolado + "%";
  });


  function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - 100;
  }
  
  const caixas = document.querySelectorAll('.caixa');
  
  function checkScroll() {
    caixas.forEach((caixa, index) => {
        if (isElementInView(caixa)) {
            setTimeout(() => {
                caixa.classList.add('show-box');
            }, index * 150); 
        }
    });
}
  
  // verifica durante o scroll
  window.addEventListener('scroll', checkScroll);


  // criação do carrossel da página sobre o projeto
  let carrosselIndex = 0;
  const carrosselImages = document.querySelectorAll('.carrossel-item');
  const titulo = document.getElementById('titulo');
  const descricao = document.getElementById('descricao');
  const dotsContainer = document.getElementById('carrossel-dots');
  let carrosselInterval;
  
  const textos = [
      {
          titulo: "🎯 Objetivo",
          descricao: "Oferecer um curso introdutório, gratuito e acessível de programação em linguagem C."
      },
      {
          titulo: "📚 Metodologia",
          descricao: "Através de módulos bem estruturados, exemplos práticos e linguagem acessível, o curso busca criar uma base sólida."
      },
      {
          titulo: "👨‍💻 Quem Desenvolveu?",
          descricao: "Desenvolvido por estudantes, Josiely Toledo, Laura Trigo, Mariah Cesar, Rafael Ryan, Rômulo Lopes e Victor Romero, do 7º período de Engenharia de Computação, sob a orientação da docente Mônica Barbosa de Extensão III."
      },
      {
          titulo: "🛠️ Tecnologias Utilizadas",
          descricao: "A criação e desenvolvimento do site conta com HTML5 + CSS3, animações com AOS.js, design responsivo e práticas de acessibilidade."
      },
      {
          titulo: "🤝 Apoio Institucional",
          descricao: "Projeto vinculado à disciplina de Extensão Universitária, executado por um grupo de alunos de Engenharia da Computação da UNIVAP."
      }, 
      {
          titulo: "📫 Entre em Contato",
          descricao: `Tem dúvidas, sugestões ou encontrou algum erro? Fale com a gente!
               <div class="botoes-contato">
                   <a href="mailto:osprogramuxos@gmail.com" class="botao-contato">Enviar e-mail</a>
                   <a href="https://www.instagram.com/programuxos/" target="_blank" class="botao-contato">Instagram</a>
               </div>`
      }
  ];
  
  // cria os dots
  function criarDots() {
      textos.forEach((_, index) => {
          const dot = document.createElement('div');
          dot.classList.add('carrossel-dot');
          if (index === 0) dot.classList.add('active');
          dot.addEventListener('click', () => irParaSlide(index));
          dotsContainer.appendChild(dot);
      });
  }
  
  // atualiza o carrossel
  function atualizarCarrossel() {
      carrosselImages.forEach((image, index) => {
          image.classList.toggle('active', index === carrosselIndex);
      });
      
      titulo.textContent = textos[carrosselIndex].titulo;
      descricao.innerHTML = textos[carrosselIndex].descricao; 
      
      // atualiza os dots conforme muda os slides do carrossel
      const dots = document.querySelectorAll('.carrossel-dot');
      dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === carrosselIndex);
      });
      
      // reinicia o intervalo
      reiniciarIntervalo();
  }
  
  // função para mudar o slide
  function mudarSlide(direction) {
      carrosselIndex = (carrosselIndex + direction + textos.length) % textos.length;
      atualizarCarrossel();
  }
  
  // função para ir para o slide desejado
  function irParaSlide(index) {
      carrosselIndex = index;
      atualizarCarrossel();
  }
  
  // reinicia o carrossel automaticamente
  function reiniciarIntervalo() {
      clearInterval(carrosselInterval);
      carrosselInterval = setInterval(() => mudarSlide(1), 5000);
  }
  
  // inicializar
  function iniciarCarrossel() {
      criarDots();
      atualizarCarrossel();
      reiniciarIntervalo();
  }
  
  // inicia o carrossel quando a página carregar
  document.addEventListener('DOMContentLoaded', iniciarCarrossel);


  // Função para alternar a visibilidade da resposta
function toggleResposta(respostaId) {
    const resposta = document.getElementById(respostaId);
    const btn = document.querySelector(`button[onclick="toggleResposta('${respostaId}')"]`);
    
    if (resposta.style.display === "none" || !resposta.style.display) {
      resposta.style.display = "block";
      btn.textContent = "Ocultar Resposta";
    } else {
      resposta.style.display = "none";
      btn.textContent = "Ver Resposta";
    }
  }
  