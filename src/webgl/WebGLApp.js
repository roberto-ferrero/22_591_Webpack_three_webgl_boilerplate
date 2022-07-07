import * as THREE from "three"
//import gsap from "gsap"
//import {GLTFLoader, GLTLoader} from "three/examples/jsm/loaders/GLTFLoader"

class WebGLApp{
    constructor (obj){
        console.log("(WebGLApp.CONSTRUCTORA): ", obj)
        //--
        this.$container = obj.$container
        //----------------------
        // DIMENSIONS:
        this.REF_RESOLUTION = {width:1920, height:947};
        this.REF_CAMERA_DISTANCE = 500
        this.width = this.$container.offsetWidth;
        this.height = this.$container.offsetHeight;
        this.responsiveScale = this.width/this.REF_RESOLUTION.width;
        this.cameraDistance = this.REF_CAMERA_DISTANCE*(this.height/this.REF_RESOLUTION.height)
        //----------------------
        // SCENE:
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xcccccc)
        //----------------------
        // CAMERA:
        this.camera = new THREE.PerspectiveCamera( 30, this.width / this.height, 0.1, 2000 );
        this.camera.position.z = this.cameraDistance;   
        this.camera.fov = 2*Math.atan((this.height/2)/(this.cameraDistance)) * (180/Math.PI) 
        //----------------------
        // RENDERER
        this.renderer = new THREE.WebGL1Renderer({
            antialias: true,
            alpha: true,
        });
        //this.renderer.autoClear = false // Vamos a usar 2 scenas (una para el background y otra para los puntos) que implicarán usar 2 acciones de render. Con autoclear false permitimos que la segunda no borre la primera.
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1))
        //--
        this.$container.appendChild(this.renderer.domElement)
        //--
        this._createcube(this.scene)
        //--
        window.addEventListener('resize', ()=>{
            this._resize()
        })
        //--
        this._resize()
        this._render()

    }

    //--------------------------------------------
    // PUBLIC:

    //--------------------------------------------
    // PRIVATE:
    _resize(){
        console.log("(WebGLApp._resize)!")
        this.width = this.$container.offsetWidth;
        this.height = this.$container.offsetHeight;
        this.responsiveScale = this.width/this.REF_RESOLUTION.width;
        this.cameraDistance = this.REF_CAMERA_DISTANCE*(this.height/this.REF_RESOLUTION.height)

        this.renderer.setSize( this.width, this.height );
        this.camera.aspect = this.width/this.height
        this.camera.position.z = this.cameraDistance 
        this.camera.fov = 2*Math.atan((this.height/2)/(this.cameraDistance)) * (180/Math.PI) 
        this.camera.updateProjectionMatrix();
        //--

    }

    _render(){
        //console.log("(WebGLApp._render)!")
        if(this.height != this.$container.offsetHeight){
            this._resize()
        }
        this.renderer.render( this.scene, this.camera );
        requestAnimationFrame(this._render.bind(this))
    }


    _createcube(_scene){
        const geometry = new THREE.BoxGeometry(100,100,100);
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        const cube = new THREE.Mesh(geometry,material);
        _scene.add(cube);
    }

}
export default WebGLApp