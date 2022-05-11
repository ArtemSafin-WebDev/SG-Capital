import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function showAll() {
    const elements = Array.from(document.querySelectorAll('.js-show-more'));

    elements.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            element.parentElement.classList.toggle('all-shown');

            ScrollTrigger.refresh();
        });
    });
}