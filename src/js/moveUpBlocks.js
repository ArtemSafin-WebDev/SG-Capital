import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function moveUpBlocks() {
    const elements = Array.from(document.querySelectorAll('.js-move-up-block'));


    elements.forEach(element => {
        ScrollTrigger.matchMedia({
            '(min-width: 641px)': () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: 'top bottom-=20%',
                        scrub: false,
                        end: 'bottom top',
                        markers: false
                    }
                });

                tl.from(element.querySelector('.container'), {
                    y: 60,
                    duration: 0.4,
                    autoAlpha: 0,
                });
            }
        });
    });
}
