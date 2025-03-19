// HTML Collection é uma lista somente de leitura de elementos que podem ser acessados por seu nome, id ou índice (não pode ter mudanças na lista pois é uma implementação de interface)
const body = db() // retorna o body
const elements = body.getElementsByTagName('div');
c(elements);

// retorna um elemento no índice
// c(elements.item('0')) 

// retorna pelo nome
// c(elements.namedItem('container'));

// retorna pelo id
c(elements.namedItem('e01'));


// NodeList são listas estáticas ou dinâmicas cujos elementos são acessados somente pelo índice
const containers = document.getElementsByName('container');
// containers.forEach(element => {
//     c(element);
    
// })
c(containers)

// método values serve para iterar sobre a node list usando um for of
// for(const value of containers.values()){
//     c(value);
// }

// método entries serve para iterar sobre a node list usando um for of retornando os pares chave e valor
// for(const value of containers.entries()){
//     c('Id: ' + value[0]);
//     c('Node: ');
//     c(value[1]);
// }

// método keys serve para iterar sobre a node list usando um for of retornando somente as chaves dos valores (posição dos elementos)
// for(const value of containers.keys()){
//     c((value+1) + 'º container');
// }



// não consegue adicionar elementos no NodeList
// containers[3] = document.createElement('div', 'container')
//                         .appendChild(document.createElement('div', 'element')
//                         .appendChild(document.createTextNode('1000')));
// c(containers);


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