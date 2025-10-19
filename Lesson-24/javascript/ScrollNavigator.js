export class ScrollNavigator {
    constructor(selector = '[data-goto]') {
        this.selector = selector;
        this.elements = document.querySelectorAll(selector);

    }

    handleClick(e, target = e.currentTarget) {
        e.preventDefault();

        const goTo = target.dataset.goto;
        const goToElement = document.querySelector(goTo);
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;

        if (goToElement) {
            window.scrollTo({
                top: goToElement.offsetTop - (headerHeight + 15),
                behavior: "smooth"
            });
        }
    }

    run() {
        if (this.elements.length > 0) {
            this.elements.forEach(el =>
                el.addEventListener('click', this.handleClick.bind(this))
            );
        } else {
            document.addEventListener('click', (e) => {
                const target = e.target.closest(this.selector);
                if (target) this.handleClick(e, target);
            });
        }
    }
}
