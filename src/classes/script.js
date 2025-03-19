const element = document.querySelector('#e01');

// é a propriedade que manipula classes na tag HTML
// element.classList
c(element.classList);

// adiciona uma classe
// element.classList.add('goblin');

// remove uma classe
element.classList.remove('element');
c(element.classList);

// alterna entre classe ativada ou desativada
element.classList.toggle('dark'); // atual: ativada
c(element.classList);
element.classList.toggle('dark'); // atual: desativada




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