window.addEventListener('DOMContentLoaded', () => {

    // Class

    function createClassMenuCard() {
        class MenuCard {
            constructor(src, srcset, alt, title, descr, rating, parentSelector) {
                this.src = src
                this.srcset = srcset
                this.alt = alt
                this.title = title
                this.descr = descr
                this.rating = rating
                this.parent = document.querySelector(parentSelector)
            }

            render() {
                const elemet = document.createElement('li');
                elemet.className = 'grid__item locked'


                elemet.innerHTML = `
    
                    <a href="" class="image-wrap">
                        <img src="${this.src}" srcset="${this.srcset}" alt="${this.alt}" />
                        <p class="image-wrap__access text-default text-x-small">Бесплатный доступ</p>
                        <svg class="icon" width="48" height="48">
                            <use xlink:href="./assets/icons/sprite.svg#lock"></use>
                        </svg>
                    </a>
                    <strong class="grid__item-title text-default text-x-small">${this.title}</strong>
                    <span class="grid__item-descr text-default text-small bold">${this.descr}</span>
                    <div class="grid__item-rating d-flex a-center">
                        <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M5.47348 6.82454C5.47348 6.82454 2.44621 7.15408 0.426743 7.37441C0.244723 7.39606 0.0837795 7.51564 0.0234256 7.69736C-0.0369284 7.87908 0.0234255 8.06834 0.157545 8.18791C1.65777 9.5334 3.91194 11.5483 3.91194 11.5483C3.91003 11.5483 3.29308 14.4794 2.88305 16.435C2.84856 16.612 2.91371 16.7994 3.07082 16.9114C3.22697 17.0235 3.42815 17.0254 3.58622 16.9378C5.35277 15.9511 7.99877 14.4672 7.99877 14.4672C7.99877 14.4672 10.6457 15.9511 12.4094 16.9387C12.5703 17.0254 12.7715 17.0235 12.9277 16.9114C13.0848 16.7994 13.1499 16.612 13.1145 16.436C12.7045 14.4794 12.0885 11.5483 12.0885 11.5483C12.0885 11.5483 14.3426 9.5334 15.8429 8.19074C15.977 8.0674 16.0364 7.87814 15.977 7.69736C15.9176 7.51658 15.7566 7.39701 15.5746 7.37629C13.5552 7.15409 10.5269 6.82454 10.5269 6.82454C10.5269 6.82454 9.27195 4.09591 8.43562 2.27682C8.35706 2.11393 8.19228 2 7.99877 2C7.80525 2 7.63952 2.11487 7.56479 2.27682C6.7275 4.09591 5.47348 6.82454 5.47348 6.82454Z"
                            fill="url(#paint0_linear_537_1506)" />
                            <defs>
                            <linearGradient id="paint0_linear_537_1506" x1="8" y1="2" x2="8" y2="17"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFBD80" />
                                <stop offset="1" stop-color="#FF820E" />
                            </linearGradient>
                            </defs>
                        </svg>
                        <span class="text-default text-x-small">${this.rating}</span>
                    </div>
                `

                this.parent.append(elemet);
            }
        }

        new MenuCard(
            './assets/image/image-1.png',
            './assets/image/image-1@2x.png',
            'Uzum card image',
            'Uzum',
            'Перевод денег с карты на карту Uzum',
            '8.5',
            '.grid .grid__list'
        ).render();

        new MenuCard(
            './assets/image/image-2.png',
            './assets/image/image-2@2x.png',
            'Payme card image',
            'Payme',
            'Перевод денег с карты на карту Payme',
            '8.2',
            '.grid .grid__list'
        ).render();

        new MenuCard(
            './assets/image/image-3.png',
            './assets/image/image-3@2x.png',
            'Click bank card image',
            'Click',
            'Перевод денег с карты на карту Click',
            '7.6',
            '.grid .grid__list'
        ).render();

        new MenuCard(
            './assets/image/image-4.png',
            './assets/image/image-4@2x.png',
            'Anor Bank bank card image',
            'Anor Bank',
            'Перевод денег с карты на карту Anor Bank',
            '7.6',
            '.grid .grid__list'
        ).render();

        new MenuCard(
            './assets/image/image-5.png',
            './assets/image/image-5@2x.png',
            'Ipak Yoli bank card image',
            'Ipak Yoli',
            'Перевод денег с карты на карту Ipak Yoli',
            '7.6',
            '.grid .grid__list'
        ).render();

        new MenuCard(
            './assets/image/image-6.png',
            './assets/image/image-6@2x.png',
            'Humans bank card image',
            'Humans',
            'Перевод денег с карты на карту Humans',
            '7.6',
            '.grid .grid__list'
        ).render();

        new MenuCard(
            './assets/image/image-7.png',
            './assets/image/image-7@2x.png',
            'OFB bank card image',
            'OFB',
            'Перевод денег с карты на карту OFB',
            '7.6',
            '.grid .grid__list'
        ).render();

        new MenuCard(
            './assets/image/image-8.png',
            './assets/image/image-8@2x.png',
            'TBC bank card image',
            'TBC',
            'Перевод денег с карты на карту TBC',
            '7.6',
            '.grid .grid__list'
        ).render();

        new MenuCard(
            './assets/image/image-9.png',
            './assets/image/image-9@2x.png',
            'Paynet bank card image',
            'Paynet',
            'Перевод денег с карты на карту Paynet',
            '7.6',
            '.grid .grid__list'
        ).render();

        new MenuCard(
            './assets/image/image-10.png',
            './assets/image/image-10@2x.png',
            'Zoomrad bank card image',
            'Zoomrad',
            'Перевод денег с карты на карту Zoomrad',
            '7.6',
            '.grid .grid__list'
        ).render();

        new MenuCard(
            './assets/image/image-11.png',
            './assets/image/image-11@2x.png',
            'Tenge Bank bank card image',
            'Tenge Bank',
            'Перевод денег с карты на карту Tenge Bank',
            '7.6',
            '.grid .grid__list'
        ).render();

        new MenuCard(
            './assets/image/image-12.png',
            './assets/image/image-12@2x.png',
            'Agro Bank bank card image',
            'Agro Bank',
            'Перевод денег с карты на карту Agro Bank',
            '7.6',
            '.grid .grid__list'
        ).render();
    }

    createClassMenuCard();


    function domElemet() {

        try {
            const gridItem = document.getElementsByClassName('grid__item');
            const firstElement = gridItem[0];
            firstElement.classList.remove('locked')
            firstElement.classList.add('unlocked')
        } catch (e) {
            console.log(e);
        }
    }

    domElemet();

})