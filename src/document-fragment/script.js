// inserindo mais um elemento de container
let container = d().createElement('div');
container.classList.add('container');

const elements = createElements();
c(elements)
// documentFragment são partes do dom separadas do arquivo principal que servem para criar um conjunto de tags ou elementos para serem inseridas no dom principal
let fragment = new DocumentFragment();
for(const element of elements){
    // cria uma parte composta pelos elementos do container
    fragment.appendChild(element);
}
c(fragment)
container.appendChild(fragment);
db().appendChild(container);




function createElements(){
    let elements = [];
    for(let i = 100; i > 90; i--){
        const element = document.createElement('div')
        element.classList.add('element');
        element.textContent = i;
        elements.push(element)
    }
    return elements;
}

function insertElementsIntoElement(elements, originalElement){
    if(typeof elements === 'object'){
        elements.forEach(element => {
            originalElement.appendChild(element)
        });

        return originalElement
    }
    return null
}


// vê o objeto do documento do DOM
function d(){
    console.log(document);
    return document
}

// vê o objeto do documento body
function db(){
    console.log(document.body);
    return document.body;
}

// console log mais rápido
function c(v){
    console.log(v);
}

function iterarSobreArray(array){
    c('Exibindo array: ');
    for(i = 0; i < array.length; i++){
        c(array[i]);
    }
}