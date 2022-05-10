import { Swiper, EffectCreative, Pagination } from 'swiper';

Swiper.use([EffectCreative, Pagination]);
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
            centeredSlidesBounds: true
        });

        if (slider.slides.length >= 3) {
            slider.slideTo(1);
        }
    });
}
