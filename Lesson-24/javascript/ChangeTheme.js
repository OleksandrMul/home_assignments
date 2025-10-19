export class ChangeTheme {
    constructor() {
        this.htmlBlock = document.documentElement;
        this.saveUserTheme = localStorage.getItem('user-theme');
        this.themeButton = null;
        this.resetButton = null;
        this.userTheme = this.getSystemTheme();
    }

    getSystemTheme() {
        if (window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    }

    setThemeClass() {
        if (this.saveUserTheme) {
            this.htmlBlock.classList.add(this.saveUserTheme);
            this.resetButton?.classList.add('active');
        } else {
            this.htmlBlock.classList.add(this.userTheme);
        }
    }

    changeTheme(saveTheme = false) {
        const currentTheme = this.htmlBlock.classList.contains('light') ? 'light' : 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        this.htmlBlock.classList.remove(currentTheme);
        this.htmlBlock.classList.add(newTheme);

        if (saveTheme) localStorage.setItem('user-theme', newTheme);
    }

    initButtons() {
        this.themeButton = document.querySelector('.theme__change');
        this.resetButton = document.querySelector('.theme__reset');

        if (this.themeButton) {
            this.themeButton.addEventListener('click', () => {
                this.resetButton?.classList.add('active');
                this.changeTheme(true);
            });
        }

        if (this.resetButton) {
            this.resetButton.addEventListener('click', () => {
                this.resetButton.classList.remove('active');
                localStorage.setItem('user-theme', '');
            });
        }
    }

    run() {
        this.setThemeClass();
        this.initButtons();

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (!this.saveUserTheme) this.changeTheme();
        });
    }
}
