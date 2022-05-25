import { Swiper, EffectCreative, Pagination, Autoplay, Mousewheel } from 'swiper';

Swiper.use([EffectCreative, Pagination, Autoplay, Mousewheel]);
import { IS_MOBILE } from './utils';

export default function reviewsSliders() {
    if (!IS_MOBILE) return;
    const elements = Array.from(document.querySelectorAll('.js-reviews-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        const slider = new Swiper(container, {
            slidesPerView: 'auto',
            speed: 400,
            centeredSlides: true,
            centeredSlidesBounds: true,
            // autoplay: {
            //     delay: 2000
            // },
            mousewheel: {
                releaseOnEdges: true
            }
        });

        if (slider.slides.length >= 3) {
            slider.slideTo(1);
        }
    });
}
