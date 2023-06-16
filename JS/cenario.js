class Cenario{
    constructor(){
        this.imagem = loadImage("./IMG/fundo_jogo00.png");
        this.alt = 600;
        this.larg = 1600;
        this.posX = 0;
        this.posY = 0;
        this.velocidade = -2;
    }
    
    apareca(){
        image(this.imagem, this.posX, this.posY, this.larg, this.alt);
    }

    movimenta(){
        this.posX += this.velocidade;
        this.xInicial = this.posX;
        this.xFinal = this.posX +this.larg;


    }
}