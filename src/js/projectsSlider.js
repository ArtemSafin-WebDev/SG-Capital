import { Swiper, EffectCreative, Pagination, Autoplay, Scrollbar } from 'swiper';

Swiper.use([EffectCreative, Pagination, Autoplay, , Scrollbar]);

import { IS_MOBILE } from './utils';

export default function projectsSlider() {
    if (IS_MOBILE) return;
    const elements = Array.from(document.querySelectorAll('.js-projects-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            speed: 600,
            scrollbar: {
                el: element.querySelector('.slider-progress'),
                draggable: true
            },
            autoplay: {
                delay: 2000
            },
         
        });
    });
}
