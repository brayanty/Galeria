(function () {
  const cartasContainer = document.querySelector('.cartas__container');
  const btnNext = document.getElementById('btnNext');
  const btnBack = document.getElementById('btnBack');
  let index = 1;
  let numeroId = 1;
  let numeroImagenes = 12;
  let imagesArray = [];
  var inicialize = false;

  function downloadImage(imageUrl) {
    const a = document.createElement("a");
    a.href = imageUrl;
    const nombre = nombreAleatorio();
    a.download = nombre; // Puedes personalizar el nombre del archivo a descargar
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

  }
  function nombreAleatorio() {
    let nombre = "Galeria.com-" + Math.floor((Math.random() * (100000 - 144 + 1)) + 100)
    nombre = nombre + ".jpg"
    return nombre;
  }

  const addEventDonwload = (id) => {
    const button = document.getElementById(id);

    button.addEventListener("click", function (event) {
      event.preventDefault(); // Previene el comportamiento predeterminado del enlace o botón
      const imageUrl = this.getAttribute("data-image-url"); // Obtén la URL de la imagen a descargar


      downloadImage(imageUrl);

    });
  }

  const addCartasElement = (h3, p, url, urlmin) => {
    // <button type="button" data-image-url="./imagen/img/FB_IMG_1688182275339.jpg"
    // class="carta__cta btn btn-primary">Descargar</button>



    const carta = document.createElement('div');
    const cartaElement = document.createElement('div');
    const button = document.createElement('button')
    const titulo = document.createElement('h3');
    const parrafo = document.createElement('p');

    button.innerText = 'Descargar';
    button.setAttribute('type', 'button');
    button.setAttribute('data-image-url', urlmin);
    button.setAttribute('class', 'carta__cta');
    button.setAttribute('class', 'btn btn-primary');
    button.setAttribute('id', `btn__id-${numeroId}`);



    titulo.innerText = h3;
    parrafo.innerText = p;


    carta.classList.add('carta');
    cartaElement.classList.add('carta-element')
    titulo.classList.add('carta__title');
    parrafo.classList.add('carta__paragraph');


    cartaElement.insertAdjacentElement('beforeend', parrafo)
    cartaElement.insertAdjacentElement('beforeend', button)
    cartaElement.insertAdjacentElement('afterbegin', titulo);

    carta.insertAdjacentElement('afterbegin', cartaElement);
    cartasContainer.insertAdjacentElement('beforeend', carta);

    carta.style.background = url;
    carta.style.backgroundPosition = 'top center';
    carta.style.backgroundSize = 'cover'


    addEventDonwload(`btn__id-${numeroId}`);
    numeroId++;
  }

  const generateImages = (start, end) => {

    for (let i = start; i <= end; i++) {
      addCartasElement('hola', 'como estas', `linear-gradient(10deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./imagen/img/preview/galeria-min (${i}).jpg")`, `./imagen/img/download/galeria- (${i}).jpg`);
    }
    inicialize = true;
  }

  generateImages(1, numeroImagenes);

  btnNext.addEventListener('click', () => {
    if (numeroImagenes >= 62 && numeroImagenes) {
      alert('No hay más imagenes');

    }
    else {
      cartasContainer.innerHTML = '';
      numeroImagenes = numeroImagenes + 12;
      index += 12;
      generateImages(index, numeroImagenes);
      if (inicialize) {
        cartasContainer.scrollIntoView({
          behavior: "smooth" // Para un desplazamiento suave

        });
        
      }
      
    }

    
  });

  btnBack.addEventListener('click', () => {
    if (numeroImagenes > 12) {
      cartasContainer.innerHTML = '';
      index -= 12;
      numeroImagenes -= 12;
      generateImages(index, numeroImagenes);
    }
  });








})();






