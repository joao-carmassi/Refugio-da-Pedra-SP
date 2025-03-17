import AnimacaoBotoes from "./utils/animacaoBotoes.js";
import NavFooter from "./components/navFooter.js";
const pages = [
    {
        nome: "Home",
        link: "./index.html",
    },
    {
        nome: "Chales",
        link: "./chales.html",
    },
];
new NavFooter(pages);
new AnimacaoBotoes();
