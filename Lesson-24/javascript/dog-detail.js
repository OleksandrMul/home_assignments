import { DOMUtils } from './BaseComponent.js'
import { ChangeTheme } from './ChangeTheme.js'


window.addEventListener("load", windowLoad);

function windowLoad() {

  const themeManager = new ChangeTheme()
  themeManager.run()

  const loading = document.querySelector('.loading')
  const dogDetail = document.querySelector('.dog__body')

  const urlParams = new URLSearchParams(window.location.search)
  const breed = urlParams.get('breed') || 'unknown'
  const imageUrl = urlParams.get('image') || ''

  loading.style.display = 'none'

  const picture = DOMUtils.createElement('picture', 'dog-detail-picture')
  const image = DOMUtils.createElement('img', 'dog-detail-image')
  image.src = decodeURIComponent(imageUrl)
  image.alt = `Dog breed ${breed}`

  picture.appendChild(image)

  const content = DOMUtils.createElement('div', 'dog-detail-content')

  const title = DOMUtils.createElement('h2', 'dog-detail-title', 'Wonderful dog')

  const breedInfo = DOMUtils.createElement(
    'p',
    'dog-detail-breed',
    `Breed: ${breed}`
  )

  const info = DOMUtils.createElement('div', 'dog-detail-info')

  const description = DOMUtils.createElement('h3', '', 'Description')
  const descriptionText = DOMUtils.createElement(
    'p',
    '',
    `This wonderful dog is a representative of its breed. Dogs are man's best friends, bringing joy and love to our homes.`
  )

  const characteristics = DOMUtils.createElement('h3', '', 'Characteristics')
  const characteristicsText = DOMUtils.createElement(
    'p',
    '',
    'Dogs are known for their loyalty, intelligence, and ability to learn. They can be excellent companions and protectors.'
  )

  DOMUtils.appendChild(info, [
    description,
    descriptionText,
    characteristics,
    characteristicsText,
  ])
  DOMUtils.appendChild(content, [title, breedInfo, info])
  DOMUtils.appendChild(dogDetail, [picture, content])

}