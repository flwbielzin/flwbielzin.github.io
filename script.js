window.addEventListener("scroll", onScroll);

onScroll();
function onScroll() {
  showButtonHomeOnScroll();
}

function showButtonHomeOnScroll() {
  if (scrollY > 200) {
    document.querySelector("#buttonHome").classList.add("show");
  } else {
    document.querySelector("#buttonHome").classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
});

AOS.init({
  duration: 1200,
});

var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
});

const hamburger = document.querySelector(".hamburger");
const navContent = document.querySelector(".nav-content");
const body = document.body;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navContent.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

function closeMenu() {
  hamburger.classList.remove("active");
  navContent.classList.remove("active");
  body.classList.remove("no-scroll");
}

// Funções para controle de áudio
function playAudio() {
  const audio = document.getElementById("musica");
  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");

  audio.play();
  updateVolumeDisplay();

  playButton.style.display = "none";
  pauseButton.style.display = "inline-block";
}

function pauseAudio() {
  const audio = document.getElementById("musica");
  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");

  audio.pause();

  playButton.style.display = "inline-block";
  pauseButton.style.display = "none";
}

function aumentarVolume() {
  const audio = document.getElementById("musica");
  const volumeDisplay = document.getElementById("volumeDisplay");
  
  if (audio.volume < 1.0) {
    audio.volume = Math.min(1, audio.volume + 0.1);
    const volumePercentage = Math.round(audio.volume * 100);
    volumeDisplay.textContent = `${volumePercentage}%`;
  }
}

function diminuirVolume() {
  const audio = document.getElementById("musica");
  const volumeDisplay = document.getElementById("volumeDisplay");
  
  if (audio.volume > 0.0) {
    audio.volume = Math.max(0, audio.volume - 0.1);
    const volumePercentage = Math.round(audio.volume * 100);
    volumeDisplay.textContent = `${volumePercentage}%`;
  }
}

function updateVolumeDisplay() {
  const audio = document.getElementById("musica");
  const volumeDisplay = document.getElementById("volumeDisplay");
  const volumePercentage = Math.round(audio.volume * 100);
  volumeDisplay.textContent = `${volumePercentage}%`;
}

// Atualizar a função que inicializa o volume
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("musica");
  const pauseButton = document.getElementById("pauseButton");
  const volumeDisplay = document.getElementById("volumeDisplay");

  audio.volume = 0.5;
  const volumePercentage = Math.round(audio.volume * 100);
  volumeDisplay.textContent = `${volumePercentage}%`;
  
  pauseButton.style.display = "none";
  atualizarNomeMusica();
});

document.addEventListener("click", function initAudio() {
  const audio = document.getElementById("musica");
  if (audio.paused) {
    audio
      .play()
      .then(() => {
        console.log("Áudio iniciado com sucesso");
        updateVolumeDisplay();
      })
      .catch((error) => {
        console.log("Reprodução automática bloqueada pelo navegador");
      });
  }
  // Remove o evento após a primeira execução
  document.removeEventListener("click", initAudio);
});

function voltarMusica() {
  const audio = document.getElementById("musica");
  audio.currentTime = Math.max(0, audio.currentTime - 10); // Volta 10 segundos
}

function avancarMusica() {
  const audio = document.getElementById("musica");
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 10); // Avança 10 segundos
}

// Atualize a lista de músicas para incluir todas as músicas da pasta
const musicasInfo = [
    {
        src: "./music/A Milli - Lil Wayne.mp3",
        nome: "A Milli - Lil Wayne"
    },
    {
        src: "./music/Chris Brown - Press Me (Visualizer) - ChrisBrownVEVO.mp3",
        nome: "Chris Brown - Press Me"
    },
    {
        src: "./music/DJ Khaled - STAYING ALIVE (Official Audio) ft. Drake, Lil Baby.mp3",
        nome: "DJ Khaled - STAYING ALIVE ft. Drake, Lil Baby"
    },
    {
        src: "./music/Drake - First Person Shooter (Audio) ft. J. Cole.mp3",
        nome: "Drake - First Person Shooter ft. J. Cole"
    }
];

let musicaAtual = 0;

function atualizarNomeMusica() {
    const musicNames = document.querySelectorAll("#musicName");
    musicNames.forEach(element => {
        element.textContent = musicasInfo[musicaAtual].nome;
    });
}

// Adicione esta função para verificar o tempo da música
function verificarTempoMusica() {
    const audio = document.getElementById("musica");
    const tempoMaximo = 120; // 2 minutos em segundos
    
    if (audio.currentTime >= tempoMaximo) {
        proximaMusica();
    }
}

// Adicione um listener para monitorar o tempo da música
document.getElementById("musica").addEventListener("timeupdate", verificarTempoMusica);

// Modifique a função proximaMusica para garantir que a próxima música também comece do início
function proximaMusica() {
    const audio = document.getElementById("musica");
    musicaAtual = (musicaAtual + 1) % musicasInfo.length;
    audio.src = musicasInfo[musicaAtual].src;
    audio.currentTime = 0; // Garante que começa do início
    atualizarNomeMusica();
    
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                updateVolumeDisplay();
                document.getElementById("playButton").style.display = "none";
                document.getElementById("pauseButton").style.display = "inline-block";
            })
            .catch(error => {
                console.log("Erro ao trocar música:", error);
            });
    }
}

// Atualize também a função musicaAnterior para manter a consistência
function musicaAnterior() {
    const audio = document.getElementById("musica");
    musicaAtual = (musicaAtual - 1 + musicasInfo.length) % musicasInfo.length;
    audio.src = musicasInfo[musicaAtual].src;
    audio.currentTime = 0; // Garante que começa do início
    atualizarNomeMusica();
    
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                updateVolumeDisplay();
                document.getElementById("playButton").style.display = "none";
                document.getElementById("pauseButton").style.display = "inline-block";
            })
            .catch(error => {
                console.log("Erro ao trocar música:", error);
            });
    }
}

// Modifique o evento de fim da música para remover o loop e sempre ir para a próxima
document.getElementById("musica").addEventListener("ended", () => {
    proximaMusica();
});
