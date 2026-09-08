//projeto bolinha 02
let yBOLINHA=200;
let xBOLINHA=200;
let raio=15;
let yVELOCIDADE=3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
}



//-----------função movimenta Bolinha------
function mostraBolinha(){
  circle(xBOLINHA,yBOLINHA,raio),
yBolinha=yvelocidade=3;
}


//------------Verifica colisao----------
function verificaColisao(){
if(yBolinha> height ||yBolinha<0){
    yvelocidade*= -1;
   }
}