var imgCenario;
var jogador;
var imgObjeto;
var base = 500;
var pontos = 0;
var contador = 0;


function preload(){
    imgCenario = loadImage ("./IMG/fundo_jogo00.png");
    imgObjeto = loadImage ("./IMG/objeto_00.png");
    jogador = loadImage ("./IMG/jogador.gif");
    
}

function setup(){
    // CONFIGURAÇÕES INICIAIS
    createCanvas(800,600).parent("jogo");
    imgCenario = new Cenario();
    imgObjeto = new Objeto();
    jogador = new Jogador();
    frameRate(60);
}

function keyPressed(){
    if(keyCode == 32){
        jogador.pulo();
 }

}

function mousePressed(){
    jogador.pulo();
}


function draw(){
    contador ++
    if(contador == 30){
        pontos ++
        contador = 0
    }

    imgCenario.apareca();
    imgCenario.movimenta();
    if(imgCenario.posX <-800){
        imgCenario = new Cenario (imgCenario.posX);
    }
    imgObjeto.mostrar();
    imgObjeto.movimenta();
    if(imgObjeto.posX <-200){
        imgObjeto = new Objeto (imgObjeto.posX);
    }
    jogador.mostre();
    jogador.mova();
    colisao();
}