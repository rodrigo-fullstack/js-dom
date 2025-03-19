const p = document.createElement('p');

p.textContent = 'Jesus Cristo, Caminho, Verdade e Vida';
p.style.position = 'absolute';
p.style.top = '50%';
p.style.left = '50%';
p.style.transform = 'translate(-50%, -50%)';

const fragment = new DocumentFragment();
fragment.append(p);
document.body.appendChild(fragment);

setTimeout(() => {
    p.animate(
        [
            {opacity: 1},
            {opacity: 0},
        ],
        {
            duration: 1000,
            iterations: 1,
            fill: 'backwards'
        }
        // método remove() dos elementos do document excluem o elemento
    // ).onfinish = () => p.remove();

    // método do elemento pai removeChild remove o elemento filho
    ).onfinish = () => document.body.removeChild(p);
    
}, 5000)
