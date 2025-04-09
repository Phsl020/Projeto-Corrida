let xJogador1 = 0;
let xJogador2 = 0;
let finishLine;

function setup() {
  createCanvas(400, 400);
  finishLine = 350; // Posição da linha de chegada
  textSize(40);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);

  // Mostrar os emojis dos jogadores
  text("😎", xJogador1, 100); // Emoji de jogador 1 (rosto sorridente com óculos)
  text("👽", xJogador2, 300); // Emoji de jogador 2 (alienígena)

  // Desenhar a linha de chegada
  rect(finishLine, 0, 10, height);

  // Verificar se algum jogador venceu
  if (xJogador1 > finishLine) {
    text("Jogador 1 venceu!", width / 2, 200);
    noLoop(); // Parar o jogo
  }

  if (xJogador2 > finishLine) {
    text("Jogador 2 venceu!", width / 2, 200);
    noLoop(); // Parar o jogo
  }

  // Movimentar os jogadores enquanto as teclas são pressionadas
  if (keyIsPressed) {
    if (key === "a") {
      xJogador1 += random(5); // Jogador 1 se move quando a tecla 'a' é pressionada
    }
    if (key === "s") {
      xJogador2 += random(5); // Jogador 2 se move quando a tecla 's' é pressionada
    }
  }
}
