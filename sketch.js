let xb = 300;
let yb = 200;
let diametro = 23;
let raio = diametro/2


let xr = 5;
let yr = 150;
let ar = 80;
let lr = 7;

let xri = 585;
let yri = 150;

let vxb = 6;
let vyb = 6;

let colidiu = false;

let meuspontos = 0
let pontosoponente = 0

let trilha;
let ponto;
let raquetada;


function preloud(){
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background("rgb(36,5,36)");
  mexebola();
  mostrabola();
  quicabola();
  mostraraquete(xr,yr,color("white"));
  mostraraquete(xri,yri,color("white"));
  mexeraquete();
  mexeraqueteinimiga();
  quicabolaraquete(xr,yr);
  quicabolaraquete(xri,yri);
  pontos();
  placar();
  letras();
  stroke("white")
  rect(300,0,1,400)
}

function mostrabola(){
  circle(xb,yb,diametro);
}

function mexebola(){
  xb += vxb
  yb += vyb
}

function quicabola(){
  if (xb + raio > width || xb - raio < 0 ){ 
    vxb *= -1;
  }
  if (yb + raio > height || yb - raio < 0 ){ 
     vyb *= -1;
  }
}

function mostraraquete(x,y,color){
  fill("white")
  rect(x,y,lr,ar);
  
}

function mexeraquete(){
  if(keyIsDown(UP_ARROW))
    yr -= 10;
  
  if(keyIsDown(DOWN_ARROW))
    yr += 10;
}

function mexeraqueteinimiga(){
  if(keyIsDown(87))
    yri -= 10;
  
  if(keyIsDown(83))
    yri += 10;
  
}

function quicabolaraquete(x,y){
  colidiu = collideRectCircle(x,y,lr,ar,xb,yb,raio);
  
 if (colidiu) {
   vxb *= -1

   
 }
}

function placar(){
  stroke("white")
  textAlign(CENTER)
  textSize(18)
  fill("purple")
  rect(150,10,40,20)
  fill("white")
  text(meuspontos, 170,14);
  
  fill("rgb(172,34,58)")
  rect(430,10,40,20)
  fill("white")
  text(pontosoponente, 450,14);
}

function pontos(){
  if (xb > 590){
    meuspontos += 1;
  }
  if (xb < 11){
    pontosoponente += 1;
  }
}

function letras(){
  let frase = "my points"
  textSize(20);
  textAlign(LEFT,TOP)
  fill("white")
  text(frase,120,40)
  
  let frase2 = "opponent points"
  textSize(20);
  textAlign(LEFT,TOP)
  fill("white")
  text(frase2,365,40)
  
  
}