import { APIUtils, DOMUtils } from "./BaseComponent.js"
import { DogCard } from "./DogCard.js"

export class LoadDogs {
    constructor(cntSelector, loadingSelector, count) {

        this.cnt = document.querySelector(cntSelector)
        this.loading = document.querySelector(loadingSelector)
        this.count = count

        this.page = 1
        this.maxPages = 10
        this.isLoading = false
        this.observer = null
    }

    async run() {

        if (!this.cnt || !this.loading) {
            console.error('Container or loading element not found')
            return
        }

        await this.loadMore()

        const trigger = document.querySelector('#load-trigger')
        if (trigger) {
            this.observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && !this.isLoading) {
                        this.loadMore()
                    }
                },
                {
                    rootMargin: '0px 0px 300px 0px',
                    threshold: 0.01,
                }
            )

            this.observer.observe(trigger)
        }
    }

    async loadMore() {
        if (this.isLoading || this.page > this.maxPages) {
            if (this.page > this.maxPages) {
                this.observer?.unobserve(document.querySelector('#load-trigger'))
            }
            return
        }

        this.isLoading = true

        try {

            const dogsData = await APIUtils.fetchMultipleDogs(this.count)

            this.loading.style.display = 'none'

            dogsData.forEach((dogData) => {
                const cardContainer = DOMUtils.createElement('li', 'dog__item item-dog')
                const dogCard = new DogCard(dogData, cardContainer)
                dogCard.render()
                this.cnt.appendChild(cardContainer)
            })

            this.page++
        } catch (error) {
            console.error('Error loading dogs:', error)
            this.loading.textContent = 'Upload error. Please try again later.'
        } finally {
            this.isLoading = false
        }
    }
}
