export default class AnimacaoBotoes {
    constructor() {
        this.tempo = ".2s";
        this.botoes = document.querySelectorAll("button");
        this.links = document.querySelectorAll("a");
        this.aplicaAnimacao();
    }
    aplicaAnimacao() {
        this.botoes.forEach((botao) => {
            botao.style.transitionDuration = this.tempo;
        });
        this.links.forEach((link) => {
            link.style.transitionDuration = this.tempo;
        });
    }
}
