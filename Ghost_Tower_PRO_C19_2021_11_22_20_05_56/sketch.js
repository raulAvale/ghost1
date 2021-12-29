var imagemDaTorre, torre;
var imagemDaPorta, porta, grupoDePortas;
var imagemDeEscalador, escalador, grupoDeEscaladores;
var fantasma, imagemDoFantasma;
var estadoJogo = "JOGAR"

function preload(){
  imagemDaTorre = loadImage("tower.png");
  imagemDaPorta = loadImage("door.png");
  imagemDeEscalador = loadImage("climber.png");
  imagemDoFantasma = loadImage("ghost-standing.png");
  somAssustador = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  
  torre = createSprite(300,300);
  torre.addImage("tower",imagemDaTorre);
  torre.velocityY = 1;
  fantasma = createSprite(100,50,50,50)
  fantasma.addImage("ghost",imagemDoFantasma)
  fantasma.scale = 0.5
  grupoDePortas = createGroup()
  }


function draw(){
  background(200);
  if (estadoJogo == "JOGAR" ){
  if(torre.y > 400){
      torre.y = 30
    }
    fantasma.x = World.mouseX
    fantasma.y = World.mouseY
    port()
    collide()
  }
  
  drawSprites()
  if(estadoJogo == "encerrar"){
    torre.velocityY = 0;
    textSize(40)
    text("fim",250,250)
  }
}


function port(){
  if(frameCount%100 === 0){
  porta = createSprite(200,50,20,40)
  porta.addImage("door",imagemDaPorta)
  porta.x = random(100,500)
  porta.velocityY = 3
  porta.depth = fantasma.depth
  fantasma.depth = fantasma.depth+1
  grupoDePortas.add(porta)
  }
}

function collide(){
  if (grupoDePortas.isTouching (fantasma)){
estadoJogo = "encerrar"
  }
}