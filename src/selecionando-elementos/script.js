// captura o elemento pelo Id
// document.getElementById('');
// const element = document.getElementById('e01');
// c(element);
// c(element.tagName); retorna o nome da tag
// c(element.parentElement); retorna a tag pai
// c(element.getHTML()); retorna o html conferente
// c(element.parentElement
//          .getHTML()); retorna o html conferente do pai
// c(element.style);

// captura elementos com a tag retorna um HTML Collection (não pode ter mudanças na lista pois é uma implementação de interface)
// document.getElementsByTagName();
// const body = db() // retorna o body
// const elements = body.getElementsByTagName('div');
// c(elements);
// c(elements.container); // deixa armazenado o primeiro elemento pelo name
// c(elements.e01); // deixa armazenado os elementso com id
// c(elements.e02); // deixa armazenado os elementso com id
// c(elements[0]);
// iterarSobreArray(elements);
// c('Iterando com foreach em tagName'); Não é capaz pois é uma html collection
// elements.forEach(element => {
//     c(element)
// });

// captura pelo name e retorna um nodeList
// document.getElementsByName('');
// const containers = document.getElementsByName('container');
// containers.forEach(element => {
//     c(element);
    
// })
// c(containers.item(1));


// captura elementos pela classe, retorna um html collection
// document.getElementsByClass;
// const containers = document.getElementsByClassName('container');
// c(containers);

// captura o elemento de acordo com o seletor CSS dele
// document.querySelector();
// const container = document.querySelector('.container'); 
// pela classe retorna o primeiro elemento que aparecer
// c(container); 

// const container = document.querySelector('body > .container:nth-child(3)');
// pode aplicar comandos de seletores css
// c(container); 

// const element = document.querySelector('#e01');
// c(element);

// captura todos os elementos com o seletor CSS especificado sempre em forma de NodeList
// document.querySelectorAll
// const containers = document.querySelectorAll('div');
// const containers = document.querySelectorAll('.container');
// c(containers);

// são todos os elementos internos da tag HTML
// propriedade childNodes


// implementação: acessar elementos internos de outro elemento
// const container = document.querySelector('.container');
// const element = container.getElementsByClassName('element')[0]; maneira menos performática de acessar o primeiro elemento
// const element = container.querySelector('.element:nth-child(1)'); maneira mais performática sem muito gasto de recursos
// c(element);



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