import { Swiper, EffectCreative, Pagination, Autoplay, Scrollbar } from 'swiper';

Swiper.use([EffectCreative, Pagination, Autoplay, , Scrollbar]);

export default function blogSlider() {
    const elements = Array.from(document.querySelectorAll('.js-blog-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            speed: 600,
            // autoplay: {
            //     delay: 2000
            // },
            scrollbar: {
                el: element.querySelector('.slider-progress'),
                draggable: true
            }
        });
    });
}
