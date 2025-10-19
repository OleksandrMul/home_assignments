import { Component, DOMUtils } from './BaseComponent.js'

export class DogCard extends Component {
  constructor(dogData, container) {
    super(container)
    this.dogData = dogData
  }

  render() {

    const card = DOMUtils.createElement('div')

    const linkImage = DOMUtils.createElement('a', 'item-dog__image')
    linkImage.href = '#'
    linkImage.addEventListener('click', (e) => {
      e.preventDefault()
      this.handleClick()
    })

    const image = DOMUtils.createElement('img')
    image.src = this.dogData.message
    image.alt = this.dogData.alt || 'A wonderful dog'
    image.loading = 'lazy'

    linkImage.appendChild(image)

    const body = DOMUtils.createElement('div', 'item-dog__body')

    const title = DOMUtils.createElement('h3', 'item-dog__title')
    const titleLink = DOMUtils.createElement('a', '', this.dogData.name || 'A wonderful dog')
    titleLink.href = '#'
    titleLink.addEventListener('click', (e) => {
      e.preventDefault()
      this.handleClick()
    })
    title.appendChild(titleLink)

    const textWrapper = DOMUtils.createElement('div', 'item-dog__text')
    const text = DOMUtils.createElement(
      'p',
      '',
      this.dogData.description ||
      `Breed: ${this.dogData.breed || 'mixed'}`
    )
    textWrapper.appendChild(text)

    const linksWrapper = DOMUtils.createElement('div', 'item-dog__links')
    const readMore = DOMUtils.createElement('a', 'item-dog__link', 'Read more')
    readMore.href = '#'
    readMore.addEventListener('click', (e) => {
      e.preventDefault()
      this.handleClick()
    })
    linksWrapper.appendChild(readMore)

    DOMUtils.appendChild(body, [title, textWrapper, linksWrapper])
    DOMUtils.appendChild(card, [linkImage, body])

    this.element.appendChild(card)
    return card
  }

  handleClick() {
    const breed = this.dogData.breed || 'mixed'
    const imageUrl = encodeURIComponent(this.dogData.message)
    window.location.href = `/dog-detail.html?breed=${breed}&image=${imageUrl}`
  }
}
