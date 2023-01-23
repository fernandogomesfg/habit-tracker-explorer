const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button')

button.addEventListener('click', add);
form.addEventListener('change', save)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    // const today = '07/01'        // para testar o localStorage
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("Dia já incluso 🔴");
        return;
    }

    alert("Dia adicionado com sucesso ✅");
    nlwSetup.addDay(today);
}

function save() {
    localStorage.setItem("NLWSetup", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup")) || {}
nlwSetup.setData(data);
nlwSetup.load();