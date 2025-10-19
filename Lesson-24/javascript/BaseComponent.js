export class Component {
  constructor(element) {
    this.element = element
  }

  render() {
    throw new Error('Render method must be implemented')
  }

  destroy() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element)
    }
  }
}

export class DOMUtils {
  static createElement(tag, className = '', content = '') {
    const element = document.createElement(tag)
    if (className) element.className = className
    if (content) element.innerHTML = content
    return element
  }

  static appendChild(parent, child) {
    if (Array.isArray(child)) {
      child.forEach((c) => parent.appendChild(c))
    } else {
      parent.appendChild(child)
    }
  }

  static removeAllChildren(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild)
    }
  }
}

export class APIUtils {
  static async fetchData(url) {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  }

  static async fetchDogBreeds() {
    return this.fetchData('https://dog.ceo/api/breeds/list/all')
  }

  static async fetchRandomDog() {
    return this.fetchData('https://dog.ceo/api/breeds/image/random')
  }

  static async fetchDogByBreed(breed) {
    return this.fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
  }

  static async fetchMultipleDogs(count = 20) {
    const promises = Array(count)
      .fill()
      .map(() => this.fetchRandomDog())
    return Promise.all(promises)
  }
}
