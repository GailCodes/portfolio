const wave = document.getElementById("wave-path");
let offset = 0;

function animateWave() {
  const newPath = `
    M0,224L60,${234.7 + Math.sin(offset) * 3}C120,${
    245 + Math.sin(offset + 0.2) * 3
  },
    240,${267 + Math.sin(offset + 1) * 3},360,${
    250.7 + Math.sin(offset + 0.2) * 3
  }
    C480,235,600,181,720,${170.7 + Math.sin(offset + 2) * 3}
    C840,160,960,192,1080,${197.3 + Math.sin(offset + 2.5) * 3}
    C1200,203,1320,181,1380,${170.7 + Math.sin(offset + 3) * 1}
    L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320
    C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z
  `;

  wave.setAttribute("d", newPath);
  offset += 0.05;
  requestAnimationFrame(animateWave);
}

animateWave();
