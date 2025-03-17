export default class imgChales {
    constructor(chale, fotos, banner) {
        this.paiBanner = document.getElementById("banner");
        this.paiGaleria = document.getElementById("containerImgs");
        this.chale = chale;
        this.fotos = fotos;
        this.banner = banner;
        this.colocaBannerFoto();
        this.colaGaleriaFotos();
    }
    colocaBannerFoto() {
        this.paiBanner.innerHTML = `
    <img
      loading="lazy"
      src="./assets/img/chales/${this.chale}/refugio-${this.banner}.webp"
      alt=""
      class="w-full rounded-xl"
    />
    `;
    }
    colaGaleriaFotos() {
        let html = "";
        for (let i = 1; i <= this.fotos; i++) {
            html += this.html(this.chale, i);
        }
        this.paiGaleria.innerHTML = html;
    }
    html(chale, n) {
        return `
    <img
      loading="lazy"
      src="./assets/img/chales/${chale}/refugio-${n}.webp"
      alt=""
      class="w-full mb-2.5 md:mb-5 shadow-md"
    />
    `;
    }
}
