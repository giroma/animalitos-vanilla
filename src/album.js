class Album {
  constructor() {
    this.section = document.createElement('section')
    this.section.className = 'album'
    document.body.appendChild(this.section)
  }

  show(animal) {
    this.section.classList.add('active')
    const apiKey = 'b6a6b245744549c9bb88ad6807c82b4f6c357fc4637df1674855b9453748419f'
    fetch(`https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${animal.name}`)
    .then(response => {
      return response.json()
    }).then(data => {
      this.displayImages(data.results)
    })
  }

  displayImages(images) {
    const imageTags = images.map(image => {
      return `<img src='${image.urls.regular}' alt='${image.description}' />`
    })
    this.section.innerHTML = imageTags.join('')
  }
  hide() {
    this.section.classList.remove('active')
  }
}
