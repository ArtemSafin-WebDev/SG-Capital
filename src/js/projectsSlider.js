import { Swiper, EffectCreative, Pagination, Autoplay, Mousewheel } from 'swiper';

Swiper.use([EffectCreative, Pagination, Autoplay, Mousewheel]);
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
            },
            autoplay: {
                delay: 2000
            },
            mousewheel: {
                releaseOnEdges: true
            }
        });
    });
}
