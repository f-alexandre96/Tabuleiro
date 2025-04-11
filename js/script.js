const tamanho = 5;
let posX = 0; // coluna
let posY = 0; // linha

const tabuleiro = document.getElementById("tabuleiro");

function desenharTabuleiro() {
  tabuleiro.innerHTML = "";

  for (let y = 0; y < tamanho; y++) {
    for (let x = 0; x < tamanho; x++) {
      const celula = document.createElement("div");
      celula.classList.add("celula");

      
      if ((x + y) % 2 === 0) {
        celula.classList.add("branca");
      } else {
        celula.classList.add("preta");
      }

      
      if (x === posX && y === posY) {
        const peca = document.createElement("div");
        peca.classList.add("peca");
        celula.appendChild(peca);
      }

      tabuleiro.appendChild(celula);
    }
  }
}

function moverDireita() {
  if (posX < tamanho - 1) {
    posX++;
    posY++; 
    desenharTabuleiro();
  }
}

function moverEsquerda() {
  if (posX > 0) {
    posX--;
    posY++;
    desenharTabuleiro();
  }
}

desenharTabuleiro();
