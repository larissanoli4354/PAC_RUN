function colisao(){
    if(
        jogador.xInicial<imgObjeto.xFinal &&
        jogador.xFinal>imgObjeto.xInicial &&
        jogador.yInicial<imgObjeto.yFinal &&
       jogador.yFinal>imgObjeto.yInicial

    ){
       if(imgObjeto){
        imgObjeto = new Objeto;
        pontos = 0
       }
        
    }
    fill(255, 255, 255)
    text("PONTUAÇÃO: " + pontos,400,50);
}