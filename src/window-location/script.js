const systemData = {};

systemData.host = window.location.host;
systemData.port = window.location.port;
systemData.origin = window.location.origin;
systemData.href = window.location.href;
systemData.protocol = window.location.protocol;

c(systemData.host);
c(systemData.port);
c(systemData.origin);
c(systemData.href);
c(systemData.protocol);
c(systemData)

// window.location = 'test'; redireciona para a página em questão
// window.location.port = 0; gera erro trocando a porta
// window.location.host = 'Rodrigao'; altera o domínio da url

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