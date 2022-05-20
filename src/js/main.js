import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import masks from './masks';
import validation from './validation';
import anchorLinks from './anchorLinks';
import accordions from './accordions';
import modals from './modals';
import tabs from './tabs';
import menu from './menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import checkOverflow from './checkOverflow';
import teamSlider from './teamSlider';
import blogSlider from './blogSlider';
import mediaPlayer from './mediaPlayer';
import projectsSlider from './projectsSlider';
import reviewsSliders from './reviewsSliders';
import showAll from './showAll';
import linkCopy from './linkCopy';
import moveUpBlocks from './moveUpBlocks';
import imagesLoaded from 'imagesloaded';
import fixedHeader from './fixedHeader';
import numbersPeopleSlider from './numbersPeopleSlider';
import clientHeight from './clientHeight';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    detectTouch();
    setScrollbarWidth();
    clientHeight();
    masks();
    validation();
    anchorLinks();
    accordions();
    modals();
    tabs();
    menu();
    checkOverflow();
    teamSlider();
    blogSlider();
    mediaPlayer();
    projectsSlider();
    reviewsSliders();
    showAll();
    linkCopy();
    moveUpBlocks();
    // fixedHeader();
    numbersPeopleSlider();

    let imgLoad = imagesLoaded(document.querySelector('.page-content'));
    function onAlways() {
        ScrollTrigger.refresh();
    }

    imgLoad.on('always', onAlways);
});

window.refreshScrollTrigger = () => {
    ScrollTrigger.refresh();
};

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
