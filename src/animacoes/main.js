
const div = createContent();
animateTitle(div)
animateBody();
function animateTitle(div) {
    const title = div.querySelector('.animatedTitle');

    // animações em JS são semelhantes aos keyframes em CSS
    // define-se primeiro as propriedades do keyframes como primeiro parâmetro
    // depois se define a contagem de tempo, iterações e outros parâmetros
    title.animate(
        // keyframes passados em formato de array
        [
            {color: '#BF7154'},
            {color: '#F2BC8D'},
            {color: '#D95E52'},
            {color: '#BF7154'},
        ],
        // parâmetros de duração em formato de objeto: duration e iterations
        {
            duration: 3000, 
            iterations: Infinity,

            // determina um tempo até iniciar a animação
            delay: 1000,
            // serve para definir a permanência do estilo após a animação
            fill: 'backwards',
            
        }
    );

}

function animateBody(){
    document.body.style.minHeight = '100vh'
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '100% 100vh';

    document.body.style.backgroundPosition = 'center';

    document.body.animate(
        [
            {backgroundImage: 'url("https://th.bing.com/th/id/OIP.0NJ_36tOuX7WCpTbnSwE4AHaEo?rs=1&pid=ImgDetMain")'},
            {backgroundImage: 'url("./image.png")'}
        ],
        {
            duration: 3000,
            iterations: Infinity
        }
    );
}

function lorem() {
    return 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim facere deleniti saepe laboriosam inventore nisi aspernatur consequatur ducimus libero quibusdam sint veniam, quas laborum voluptate temporibus labore aperiam non. Sed alias maiores totam porro, libero nulla illo earum, veritatis, mollitia qui amet provident adipisci hic quisquam nemo quis placeat labore?'
}

function createContent() {
    const fragment = new DocumentFragment();
    const div = document.createElement('div')

    const title = document.createElement('h1');
    title.appendChild(
        document.createTextNode('Estoicismo')
    );

    title.className = 'animatedTitle';

    div.appendChild(title)
    for (let i = 0; i < 10; i++) {
        const paragraph = document.createElement('p');
        paragraph.appendChild(
            document.createTextNode(lorem())
        );

        paragraph.style.color = '#BF7154';
        div.append(paragraph);
    }
    fragment.appendChild(div)

    document.body.appendChild(fragment);

    return div;
}