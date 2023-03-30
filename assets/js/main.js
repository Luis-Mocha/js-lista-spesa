const listSection = document.getElementById('list-section');
console.log(listSection);
let ulElement = document.createElement('ul');
listSection.append(ulElement);
console.log(listSection);

let listSpesa = [
    'pane',
    'mele',
    'gelato',
    'carne',
    'verdure',
    'pasta'
]

let i = 0;

while (i < 6) {
    
    ulElement.innerHTML+= `
    <li>${listSpesa[i]}</li>
    `
    i++

}