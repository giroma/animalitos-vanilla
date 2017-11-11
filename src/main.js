const animalsContainer = document.createElement('section')
animalsContainer.className = 'animals';
document.body.appendChild(animalsContainer);

//create figure tag for individual animal
const createAnimalFigure = (animal) => {
  const figure = document.createElement('figure');
  figure.className = 'animal';

  const background = document.createElement('div')
  background.className = 'background';
  background.style.backgroundImage = `url('${animal.image}')`;
  figure.appendChild(background);

  const caption = document.createElement('figcaption');
  caption.style.backgroundColor = animal.bgColor
  caption.innerHTML = `
    <h2>${animal.name}</h2>
    <img src ="${animal.icon}" alt="${animal.name}"
    class="animal-icon" />
  `
  figure.appendChild(caption)

  figure.addEventListener('click', (event) => {
    console.log(event);
  })

  return figure;
}


animals.forEach(animal => {
  animalsContainer.appendChild(createAnimalFigure(animal))
});
