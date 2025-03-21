function toggleMode() {
  const body = document.body;
  body.classList.toggle("light");

  // Atualizar cores das variáveis CSS
  if (body.classList.contains("light")) {
    document.documentElement.style.setProperty("--primary-color", "#ffffff");
    document.documentElement.style.setProperty("--secondary-color", "#f5f5f5");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--text-secondary", "#666666");
    document.documentElement.style.setProperty(
      "--border-color",
      "rgba(0, 0, 0, 0.1)"
    );
    document.documentElement.style.setProperty(
      "--bg-gradient",
      "linear-gradient(to bottom right, #ffffff, #f0f0f0)"
    );
  } else {
    document.documentElement.style.setProperty("--primary-color", "#1a1a1a");
    document.documentElement.style.setProperty("--secondary-color", "#252525");
    document.documentElement.style.setProperty("--text-color", "#ffffff");
    document.documentElement.style.setProperty("--text-secondary", "#888888");
    document.documentElement.style.setProperty(
      "--border-color",
      "rgba(255, 255, 255, 0.1)"
    );
    document.documentElement.style.setProperty(
      "--bg-gradient",
      "linear-gradient(to bottom right, #000000, #1a1a1a)"
    );
  }

  // Garantir que os vídeos estejam carregados
  const darkVideo = document.getElementById("dark-mode-video");
  const lightVideo = document.getElementById("light-mode-video");

  if (body.classList.contains("light")) {
    lightVideo.play().catch(function (error) {
      console.log("Erro ao reproduzir vídeo:", error);
    });
  } else {
    darkVideo.play().catch(function (error) {
      console.log("Erro ao reproduzir vídeo:", error);
    });
  }
}

// Animações de scroll
ScrollReveal().reveal(".profile-section", {
  delay: 200,
  distance: "50px",
  origin: "left",
});

ScrollReveal().reveal(".section-header", {
  delay: 400,
  distance: "50px",
  origin: "top",
});

ScrollReveal().reveal(".animated-links li", {
  delay: 600,
  distance: "50px",
  origin: "right",
  interval: 200,
});

ScrollReveal().reveal(".stats-section", {
  delay: 800,
  distance: "50px",
  origin: "bottom",
});

ScrollReveal().reveal(".about-section", {
  delay: 1000,
  distance: "50px",
  origin: "bottom",
});

ScrollReveal().reveal("ul li", {
  distance: "400px",
  origin: "left",
  duration: 500,
  easing: "ease-in-out",
});
ScrollReveal().reveal("ul li.right", {
  distance: "400px",
  origin: "right",
  duration: 500,
  easing: "ease-in-out",
});

ScrollReveal().reveal("#profile", {
  distance: "400px",
  origin: "top",
  duration: 500,
  easing: "ease-in-out",
});

ScrollReveal().reveal(".links-sociais, #social-links, footer", {
  distance: "400px",
  origin: "top",
  duration: 500,
  easing: "ease-in-out",
});

ScrollReveal().reveal("#switch", {
  distance: "0px",
  opacity: 0,
  duration: 1000,
  easing: "ease-in-out",
});

ScrollReveal().reveal(".videos-section h2", {
  origin: "top",
  distance: "20px",
  duration: 1000,
  delay: 200,
});

ScrollReveal().reveal(".video-item", {
  origin: "bottom",
  distance: "30px",
  duration: 1000,
  delay: 400,
  interval: 200,
});

// Animação no scroll para os links
function checkScroll() {
  const links = document.querySelectorAll(".animated-links li");
  const triggerBottom = window.innerHeight * 0.8;

  links.forEach((link, index) => {
    const linkTop = link.getBoundingClientRect().top;

    if (linkTop < triggerBottom) {
      setTimeout(() => {
        link.classList.add("reveal");
      }, index * 200);
    }
  });
}

// Adiciona o listener para o scroll
window.addEventListener("scroll", checkScroll);
// Checa uma vez quando a página carrega
window.addEventListener("load", checkScroll);
