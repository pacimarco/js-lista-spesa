const ingredienti = [
    'pomodori',
    'zucchero',
    'olio',
    'latte',
    'farina',
    'pane',
    'grana',
    'riso',
    'pesto',
    'mozzarella',
    'carote',
    'zucchine',
    'asparagi',
    'cipolle',
    
]

const listaDom = document.getElementById('lista-spesa')

let i = 0;

while (i < ingredienti.length) {
    listaDom.innerHTML += `<li>${ingredienti[i]}</li>`
    i++
}