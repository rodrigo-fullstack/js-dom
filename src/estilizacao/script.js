const body = db();

// estilização é feita com a propriedade do elemento chamada style
body.style.backgroundImage = "url('https://th.bing.com/th/id/R.13cad1d7e05408e5881e94bbf2eba490?rik=rq35%2b0nnrXfXXg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Dy42UBkxXXc%2fU4P9llH1IWI%2fAAAAAAAAD-I%2fMT2evyWmGFw%2fs1600%2fimagens-imagens-paisagens-natureza-758ab5.jpg&ehk=aMOFfe5Gxh8ql7CG6bP47W0%2bpg0otCjSiZ%2f37kNuRmA%3d&risl=&pid=ImgRaw&r=0')";
body.style.backgroundPosition = 'top'
body.style.backgroundSize = '160%'
// define-se com o nome da propriedade CSS no padrão de camelCase

const container = body.querySelector('.container');
const elements = container.querySelectorAll('.container > .element');
// const elements = container.childNodes; // retorna os filhos do contianer (contra de utilizar é que retorna também as quebras de linha)
c(elements);
elements.forEach(element => {
    element.style.display = 'flex';
    element.style.alignItems = 'center';
    element.style.justifyContent = 'center';
});

// implementação: Estilizar como preto com cor de fonte branca todos os que forem de índice par
const containers = document.querySelectorAll('.container');
c(containers);
let i = 0
// algoritmo de notação big O quadrática
while(i < containers.length){
    const elements = containers[i].querySelectorAll('.element');
    
    let j = 0;
    while(j < elements.length){
        if((j + 1) % 2 === 0){
            elements[j].style.backgroundColor = 'black'
            elements[j].style.color = 'white'
            j++
            continue;
        } 

        elements[j].style.backgroundColor = 'white';
        elements[j].style.color = 'black';
        j++;
    }

    i++;
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