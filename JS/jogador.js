class Jogador{
    constructor(){
        this.imagem = loadImage ("./IMG/jogador.gif");
        this.posX = 100;
        this.posY = base;
        this.alt = 80;
        this.larg = 80;

        this.pulando = 0;
        this.velocidade = 5;
        this.altPulo = base-250;

        this.yInicial = this.posY;
        this.yFinal = this.posY + this.alt;
        this.xInicial = this.posX;
        this.xFinal = this.posX +this.larg;
    }

    

    mostre(){
        image(this.imagem, this.posX, this.posY, this.larg, this.alt);
        if(this.pulando ==1){
            this.posY -= this.velocidade;

            if(this.posY <= this.altPulo){
                this.velocidade = this.velocidade * -1;
            }
            if(this.posY == base){
                this.pulando = 0;
                this.velocidade = this.velocidade * -1 ;
            }
        }
    }

    pulo(){
        this.pulando = 1;
    }

    mova(){
        this.yInicial = this.posY;
        this.yFinal = this.posY + this.alt;
        this.xInicial = this.posX;
        this.xFinal = this.posX +this.larg;
        
    }
        
}

 