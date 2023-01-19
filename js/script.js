const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);

const data = {
    run: ['01-01', '01-06', '01-07', '01-08', '01-09', '01-10',],
    water: ['01-02', '01-06'],
    food: ['01-01', '01-02'],
    dance: ['01-01', '01-03'],
    coding: ['01-01', '01-03', '01-08', '01-09']
}

nlwSetup.setData(data);
nlwSetup.load();