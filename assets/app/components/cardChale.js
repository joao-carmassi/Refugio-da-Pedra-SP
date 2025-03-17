export default class CardPousada {
    constructor(dados) {
        this.chales = dados;
        this.cards = document.querySelectorAll(".containerInfoChale");
        this.colocaHtml();
    }
    colocaHtml() {
        this.cards.forEach((card) => {
            const dados = this.chales.find((chale) => chale.id === card.id);
            if (dados) {
                card.innerHTML = this.html(dados.nome, dados.id, dados.capacidade, dados.camas, dados.banheiros, dados.politica.pets_permitidos);
            }
        });
    }
    html(nome, id, capacidae, camas, baneiros, pet) {
        return `
    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
      ${nome}
    </h3>
    <p class="mt-1 text-gray-500 dark:text-neutral-400">
    <span class="font-semibold">Capacidade: </span>${capacidae}
    </p>
    <p class="mt-1 text-gray-500 dark:text-neutral-400">
      <span class="font-semibold">Camas: </span>${camas}
    </p>
    <p class="mt-1 text-gray-500 dark:text-neutral-400">
    <span class="font-semibold">Banheiros: </span>${baneiros}
    </p>
    <p class="mt-1 text-gray-500 dark:text-neutral-400">
    <span class="font-semibold">Pets: </span>
    ${pet ? "Aceitamos " : "Nao aceitamos "}
    </p>
    <a
      style="transition-duration: .2s;"
      class="mt-2 py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-hidden focus:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none"
      href="./chale.html?chale=${id}"
    >
      Ver mais
    </a>
    `;
    }
}
