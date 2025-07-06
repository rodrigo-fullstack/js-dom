// FormData é um objeto que serve para preencher os dados de um formulário para envio em JS.

const form = document.querySelector('.form');
const submit = document.querySelector('.submitter');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(formDataWithForm(e.target));
})
function formDataWithForm(form){
    const formData = new FormData(form);

    console.log(formData);
}  

function formDataWithoutForm(){
    // Criando FormData vazio
    const formData = new FormData();

    // Set e append servem para atribuir dados.
    formData.set('teste', 'Eu sou um teste');
    console.log('Após usar set');
    console.log(formData);

    formData.append('teste2', 'Eu sou um teste2');
    console.log('Após usar append');
    console.log(formData);

    // Deleta o elemento escolhido
    formData.delete('teste2');
    console.log('Após usar delete');
    console.log(formData);
}


