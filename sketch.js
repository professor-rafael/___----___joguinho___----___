function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(51);
  }
  function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(51);
    rect(200,200,10,10)
  }
  // variáveis da cobrinha
   let xCobra = 50;
   let yCobra = 40;
   let wCobra = 10;
   let hCobra = 10;
  
  // velocidade da movimentação
   let velocidadeMovimentacao = 8;
  
   function setup() {
     createCanvas(1600, 400);
   }
  
   function draw() {
     background(1);
     rect(xCobra, yCobra, wCobra, hCobra);
  // adiciona comandos para as setinhas
   if (keyIsDown(LEFT_ARROW)) {
       xCobra -= velocidadeMovimentacao;
     }
   if (keyIsDown(RIGHT_ARROW)) {
       xCobra += velocidadeMovimentacao;
     }
   if (keyIsDown(UP_ARROW)) {
       yCobra -= velocidadeMovimentacao;
     }
   if (keyIsDown(DOWN_ARROW)) {
       yCobra += velocidadeMovimentacao;
     }
  }
  
