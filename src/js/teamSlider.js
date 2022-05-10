import { Swiper, EffectCreative, Pagination } from 'swiper';

Swiper.use([EffectCreative, Pagination]);

export default function teamSlider() {
    const elements = Array.from(document.querySelectorAll('.js-team-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            speed: 600,
            pagination: {
                el: element.querySelector('.slider-progress'),
                type: 'progressbar'
            },
            // effect: 'creative',
            // creativeEffect: {
            //     prev: {
            //         scale: 0,
            //         opacity: 0
            //     },
            //     limitProgress: 6,
            //     next: {
            //         opacity: 1,

            //         translate: ['100%', 0, 0]
            //     }
            // }
        });
    });
}
