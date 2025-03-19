

// utilizando create element e append child

// create element: cria um elemento no document não visível
// const p = createElement('p', 'paragraph');
// p.innerText = 'Eu nasci pela primeira vez';

// const container = document.querySelector('.container');
// appendElement(container, p);

const container = createElement('div', 'container');
c(container);
const elements = (function(){
    const elements = []
    for(i = 0; i < 5; i++){
        const element = createElement('div', 'element');
        // cria um texto do tipo node
        const value = document.createTextNode(i * 100);
        element.appendChild(value);
        elements.push(element);
    }

    return elements;
})();

elements.forEach(element => {
    container.appendChild(element);
})
// c(container.children);
const containerBefore = document.querySelector('body > .container:nth-child(3)');
db().insertBefore(container, containerBefore);

function createElement(tag, classes){
    // cria-se o elemento no document com a tag especificada
    // document.createElement(tag, { is: customTag }(optional))
    const element = document.createElement(tag);
    element.classList.add(classes);
    return element;
}

function appendElement(whereElement, appendElement){
    // adiciona o elemento do document a uma tag específica
    whereElement.appendChild(appendElement);
}

// vê o objeto do documento do DOM
function d(){
    console.log(document);

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