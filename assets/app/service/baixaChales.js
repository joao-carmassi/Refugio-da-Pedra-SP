export default function SBaixaChales() {
    return fetch(localHost())
        .then((promice) => {
        return promice.json();
    })
        .then((res) => {
        return res.data;
    });
}
function localHost() {
    if (window.location.href.includes("55")) {
        return "../../dist/assets/db.json";
    }
    else {
        return "./assets/db.json";
    }
}
