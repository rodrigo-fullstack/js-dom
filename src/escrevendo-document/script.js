// writeln escreve uma linha no documento
document.writeln('Escrito com writeln...');
// document.writeln("<image src='https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_1280.jpg' width='500' style='display:block;'>");
// não pode escrever tags

// document não possui a propriedade innerText
// document.innerText = 'Escrito com innerText...';
// console.log(document.innerText);

d();

// document não possui a propriedade innerHTML
// document.innerHTML = '<p>Fui escrito com innerHTML</p>';
// d();



let body = db();

// atribui à propriedade innerText do objeto do DOM body. 
// innerText não realiza análise sintática de HTML mas considera o CSS, o que é seguro pois não analisa HTML porém pode ser menos performático devido à recalculação do layout CSS
// body.innerText = 'Vim do InnerText!'; Substitui todo o innerText passado
body.innerText += '\nVim do InnerText!';

// atribui à propriedade innerHTML do objeto do DOM body
// innerHTML atribui tags com análise sintática de HTML e CSS o que pode ser perigoso para problemas de XSS e reduz a performance pois força a recalculação das CSS
// body.innerHTML = "<image src='https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_1280.jpg' width='500'>"
body.innerHTML += "<image src='https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_1280.jpg' width='500' style='display:block;'>"

const p = document.createElement('p');
// atribui texto à tag
// textContent realiza a inserção do texto sem análise sintática de HTML e processamento de CSS, o que torna essa abordagem mais rápida e segura
p.textContent = 'Virtude é felicidade!';
body.appendChild(p);

const div = document.createElement('div');

// atribui texto através de textNode
// cria um node text #text ('valor') para ser atribuido a uma tag, também assegura que seja sem análise de HTML (parsing) e CSS
const text = document.createTextNode('Autossuficiência do Exterior: ser independente de tudo que é externo')
div.appendChild(text);
body.appendChild(div)

// vê o objeto do documento do DOM
function d(){
    console.log(document);

}

// vê o objeto do documento body
function db(){
    console.log(document.body);
    return document.body;
}