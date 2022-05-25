import { Swiper, EffectFade, Pagination, Autoplay, Mousewheel } from 'swiper';

Swiper.use([EffectFade, Pagination, Autoplay, Mousewheel]);

export default function numbersPeopleSlider() {
    const elements = Array.from(document.querySelectorAll('.js-numbers-people-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 1,
            effect: 'fade',
            speed: 500,
            fadeEffect: {
                crossFade: true
            },
            // autoplay: {
            //     delay: 1800
            // }
        });
    });
}
