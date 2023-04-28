import { Peca } from ".";
import { Cor, Jogador, Posicao, verificarPosicao, Imagem } from "..";

export class Bispo extends Peca {

    protected imagem: HTMLImageElement = Imagem.getInstancia().BISPO;

    constructor(cor: Cor, jogador: Jogador){
        super(cor,jogador);
    }
    

    possiveisMovimento(posicao: Posicao): Posicao[] {
        let movimentosPossiveis: Posicao[] = [];


        return movimentosPossiveis;
    }


    public override desenhar(ctx: CanvasRenderingContext2D) {

        // Todo

    }

}
    

