// inserindo mais um elemento de container
let container = d().createElement('div');
container.classList.add('container');

const elements = createElements();
c(elements)
container = insertElementsIntoElement(elements, container);

// const script = document.getElementsByTagName('script')[0];
// c(script)

db().appendChild(container);

// c(container);

// sibblings são parentes ou irmãos, são os elementos que pertencem a um mesmo pai
// esse container é o último elemento, por isso retorna nulo 
c(container.nextSibling)
// c(container.previousSibling)
let n = container
// percorrendo todos os elementos da lista pelo container
while(n.previousSibling !== null){
    c(n);
    n = n.previousSibling;
}


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