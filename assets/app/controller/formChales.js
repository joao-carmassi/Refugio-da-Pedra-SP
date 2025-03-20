export default class FormChales {
    constructor(chales) {
        this.chales = chales;
        this.form = document.getElementById("form-chale");
        this.selectChales = document.getElementById("select-chale");
        this.aplicaEstiliInputData();
        this.adicionaEventoSubmit();
        this.colocaChalesSelect();
    }
    colocaChalesSelect() {
        this.chales.forEach((chale) => {
            const option = document.createElement("option");
            option.value = chale.id;
            option.textContent = chale.nome;
            this.selectChales.appendChild(option);
        });
    }
    adicionaEventoSubmit() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.salvaDadosForm();
        });
    }
    aplicaEstiliInputData() {
        const inputs = document.querySelectorAll('input[type="date"]');
        inputs.forEach((input) => {
            input.addEventListener("input", function () {
                this.style.color = this.value ? "black" : "gray";
            });
            input.style.color = input.value ? "black" : "gray";
        });
        const select = document.getElementById("select-chale");
        select.addEventListener("input", function () {
            this.style.color = this.value ? "black" : "gray";
        });
    }
    salvaDadosForm() {
        const dadosForm = {
            nome: this.form.querySelector("#input-nome").value,
            checkIn: this.form.querySelector("#check-in").value,
            checkOut: this.form.querySelector("#check-out")
                .value,
            adultos: this.form.querySelector("#input-adultos")
                .value,
            criancas: this.form.querySelector("#input-criancas")
                .value,
            chale: this.form.querySelector("#select-chale")
                .value,
            pets: this.form.querySelector("#input-pets").value,
        };
        const mensagem = `Ola, me chamo *${dadosForm.nome}* e gostaria de fazer uma reserva

*Check-in:* ${this.formataData(dadosForm.checkIn)}
*Check-out:* ${this.formataData(dadosForm.checkOut)}
*Adultos:* ${dadosForm.adultos}
${parseInt(dadosForm.criancas) >= 1 ? `*Crianças:* ${dadosForm.criancas}` : ""}
${dadosForm.chale ? `*Chale:* ${dadosForm.chale}` : ""}
${parseInt(dadosForm.pets) >= 1 ? `*Pets:* ${dadosForm.pets}` : ""}`;
        window.location.href = `https://api.whatsapp.com/send?phone=5512996148154&text=${encodeURIComponent(mensagem)}`;
        console.log(dadosForm);
    }
    formataData(data) {
        const partes = data.split("-");
        return `${partes[2]}/${partes[1]}/${partes[0]}`;
    }
}
