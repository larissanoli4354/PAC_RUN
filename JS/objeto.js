class Objeto{
    constructor(){
        this.imagem = loadImage ("./IMG/objeto_00.png");
        this.posX = 700;
        this.posY = 500;
        this.alt = 80;
        this.larg = 80;
        this.velocidade = -3;

        this.yInicial = this.posY;
        this.yFinal = this.posY + this.alt;
        this.xInicial = this.posX;
        this.xFinal = this.posX +this.larg;
    }

    mostrar(){
        image(this.imagem, this.posX, this.posY, this.alt, this.larg);
    }

    movimenta(){
        this.posX += this.velocidade;
        this.xInicial = this.posX;
        this.xFinal = this.posX +this.larg;

        this.yInicial = this.posY;
        this.yFinal = this.posY + this.alt;
        this.xInicial = this.posX;
        this.xFinal = this.posX +this.larg;
    }
}