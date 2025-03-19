export default class NavFooter {
    constructor(paginas) {
        this.link = window.location.href;
        this.body = document.querySelector("body");
        this.main = document.querySelector("main");
        this.pages = paginas;
        this.adicionaHeaderFooter();
    }
    header() {
        const html = `
      <nav
        class="w-full bg-white fixed top-0 dark:bg-neutral-900 left-1/2 -translate-x-1/2 z-50"
      >
        <div class="max-w-[85rem] gap-5 py-2 px-4 sm:flex sm:items-center sm:justify-between mx-auto dark:bg-neutral-900">
        <div class="flex items-center justify-between">
          <a
            class="flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80"
            href="./index.html"
            aria-label="Brand"
          >
            Refúgio da Pedra SP
          </a>
          <div class="flex gap-3 flex-row items-center">
            <a
              target="_blank"
              href="https://w.app/0h8blp"
              class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-hidden focus:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none md:hidden"
            >
              Reservar
            </a>
            <div class="sm:hidden">
              <button
                type="button"
                class="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                id="hs-navbar-example-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-example"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-example"
              >
                <svg
                  class="hs-collapse-open:hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  class="hs-collapse-open:block hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span class="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
        </div>
        <div
          id="hs-navbar-example"
          class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div
            class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5"
          >
            ${this.pages
            .map((item) => `
              <a
              class="${this.link.includes(item.link.replace("./", ""))
            ? "font-medium text-yellow-500 focus:outline-hidden"
            : "font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"}"
              href="${item.link}"
            >${item.nome}</a
            >
              `)
            .join("")}
          </div>
        </div>
        <a
          href='./reservar.html'
          type="button"
          class="py-3 px-4 items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-hidden focus:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none hidden md:inline-flex"
        >
          Reservar
        </a>
        </div>
      </nav>
    `;
        const header = document.createElement("header");
        header.classList.add("relative", "flex", "flex-wrap", "sm:justify-start", "sm:flex-nowrap", "w-full", "bg-white", "text-sm", "h-4", "items-center", "dark:bg-neutral-900");
        header.innerHTML = html;
        return header;
    }
    footer() {
        const html = `
      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
        <div>
          <a
            class="flex-none text-xl font-semibold text-black focus:outline-hidden dark:text-white"
            href="./index.html"
            aria-label="Brand"
            >Refúgio da Pedra SP</a
          >
        </div>
        <!-- End Col -->

        <ul class="text-center">
          ${this.pages
            .map((item) => `
            <li
            class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600"
          >
            <a
              class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="${item.link}"
            >
              ${item.nome}
            </a>
          </li>
            `)
            .join("")}
        </ul>
        <!-- End Col -->

        <!-- Social Brands -->
        <div class="md:text-end space-x-2">
          <a
            class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="https://www.google.com/search?q=Ref%C3%BAgio+da+Pedra+Sp&sca_esv=f8ded6305c32e328&sxsrf=AHTn8zpP39Gg0Bio0OMCl3H5lXrP_85Gqw%3A1741978706336&ei=UnzUZ8acFITb1sQPlZncuQc&hotel_occupancy=&ved=0ahUKEwjGjf2voIqMAxWErZUCHZUMN3cQ4dUDCBA&uact=5&oq=Ref%C3%BAgio+da+Pedra+Sp&gs_lp=Egxnd3Mtd2l6LXNlcnAiFFJlZsO6Z2lvIGRhIFBlZHJhIFNwMhEQLhiABBjHARiYBRiOBRivATIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgIQJjIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyIBAuGIAEGMcBGJgFGI4FGK8BGJcFGNwEGN4EGOAE2AEBSMEKUIYFWIYFcAF4AZABAJgBqQGgAakBqgEDMC4xuAEDyAEA-AEC-AEBmAICoALEAcICBxAjGLADGCfCAgoQABiwAxjWBBhHmAMAiAYBkAYDugYGCAEQARgUkgcDMS4xoAfbCQ&sclient=gws-wiz-serp"
            target="_blank"
          >
            <svg
              class="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
              />
            </svg>
          </a>
          <a
            class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="https://w.app/0h8blp"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="16"
              height="16"
              stroke-width="2.5"
            >
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
              <path
                d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
              ></path>
            </svg>
          </a>
          <a
            class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="https://www.instagram.com/refugiodapedrasp/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="16"
              height="16"
              stroke-width="2.5"
            >
              <path
                d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
              ></path>
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M16.5 7.5l0 .01"></path>
            </svg>
          </a>
        </div>
        <!-- End Social Brands -->
      </div>
      <!-- End Grid -->
    `;
        const footer = document.createElement("footer");
        footer.classList.add("mt-auto", "w-full", "max-w-[85rem]", "py-10", "px-4", "sm:px-6", "lg:px-8", "mx-auto", "dark:bg-neutral-900");
        footer.innerHTML = html;
        return footer;
    }
    adicionaHeaderFooter() {
        var _a, _b, _c, _d;
        (_a = this.body) === null || _a === void 0 ? void 0 : _a.prepend(this.header());
        (_b = this.body) === null || _b === void 0 ? void 0 : _b.append(this.footer());
        (_c = this.body) === null || _c === void 0 ? void 0 : _c.classList.add("max-w-[150rem]", "mx-auto");
        (_d = this.main) === null || _d === void 0 ? void 0 : _d.classList.add("mt-12");
    }
}
