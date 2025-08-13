function observe() {
  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
  });
  observer.observe(document.documentElement);
}

function observeElement(element) {
  // Cria o observer
  const observer = new IntersectionObserver((entries) => {
    // Objeto Intersection Observer Entry
    const [entry] = entries;
    // Algumas propriedades do entry:
    const { isIntersecting, target } = entry;
    // Quando aparece na tela, muda a cor para branco.
    if (isIntersecting) {
      target.style.transition = "1s background-color";
      target.style.backgroundColor = "#fff";
    } else {
      // Quando não está na tela fica vermelho
      target.style.backgroundColor = "red";
    }
  });
  // Inicia a observação
  observer.observe(element);
}

function observeElementWithOptions(element, options) {
  const callback = (entries) => {
    const [entry] = entries;
    const { isIntersecting, target } = entry;
    if (isIntersecting) {
      target.classList.add("scale-btn");
    } else {
      target.classList.remove("scale-btn");
    }
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(element);
}

// Observando sem options
const footer = document.querySelector("footer");
observeElement(footer);

// Observando com options
const btnCta = document.querySelector("button.cta");
const options = {
  threshold: 0.6,
  rootMargin: "-50px",
};
observeElementWithOptions(btnCta, options);
