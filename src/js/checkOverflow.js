import { debounce } from 'lodash';

export default function checkOverflow() {
    const elements = Array.from(document.querySelectorAll('.js-check-overflow'));

    elements.forEach(element => {
        const check = () => {
            if (element.scrollHeight > element.offsetHeight) {
                element.parentElement.classList.add('has-overflow');
            } else {
                element.parentElement.classList.remove('has-overflow');
            }
        };

        check();

        window.addEventListener('resize', debounce(check, 300));
    });
}
