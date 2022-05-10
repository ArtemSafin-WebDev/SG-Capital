import { Swiper, EffectCreative, Pagination } from 'swiper';

Swiper.use([EffectCreative, Pagination]);
import { IS_MOBILE } from './utils';

export default function projectsSlider() {
    if (IS_MOBILE) return;
    const elements = Array.from(document.querySelectorAll('.js-projects-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            speed: 600,
            pagination: {
                el: element.querySelector('.slider-progress'),
                type: 'progressbar'
            }
        });
    });
}
