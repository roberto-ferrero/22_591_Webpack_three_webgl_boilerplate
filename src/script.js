
import './style.css';
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import WebGLApp from './webgl/WebGLApp';


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


const foo = new WebGLApp({
    $container: document.querySelector('#webgl_app')
})
