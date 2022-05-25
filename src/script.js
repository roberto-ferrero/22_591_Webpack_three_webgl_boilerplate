
import './style.css';

import SampleClass from './SampleClass';
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/*
ScrollTrigger.create({
    markers:true,
    trigger: "#content",
    start: "top top",
    end: "bottom top",
    onUpdate: (e) => {
        //console.log(e)
    }
})
*/


const foo = new SampleClass()
