import { Swiper, EffectCreative, Pagination, Autoplay, Scrollbar } from 'swiper';

Swiper.use([EffectCreative, Pagination, Autoplay, , Scrollbar]);

export default function teamSlider() {
    const elements = Array.from(document.querySelectorAll('.js-team-slider'));

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
