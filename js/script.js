const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button')

button.addEventListener('click', add);

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("Dia ja incluso 🔴");
        return;
    }

    alert("Dia adicionado com sucesso ✅");
    nlwSetup.addDay(today);
}

// const data = {
//     run: ['01-01', '01-06', '01-07', '01-08', '01-09', '01-10',],
//     water: ['01-02', '01-06'],
//     food: ['01-01', '01-02'],
//     dance: ['01-01', '01-03'],
//     coding: ['01-01', '01-03', '01-08', '01-09']
// }

// nlwSetup.setData(data);
// nlwSetup.load();