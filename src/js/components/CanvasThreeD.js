import React from "react";
import QueryString from "query-string";
import THREE from "three";
import { WindowResizeListener } from 'react-window-resize-listener';

export default class CanvasThreeD extends React.Component {

    componentDidMount() {

      var mouse_down = this.mouse_down = false,
          startXMovement = this.startXMovement = 0,
          startyMovement = this.startYMovement = 0;
      const urlparams = QueryString.parse(location.search),
            block_height = parseInt(urlparams.height),
            block_width =  parseInt(urlparams.width),
            percentage = ((100*block_height)/block_width)/100,
            height = 1*percentage,
            width_depth = 1,
            scene = new THREE.Scene(),
            camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ),
            geometry = new THREE.BoxGeometry( width_depth, height, width_depth ),
            material = new THREE.MeshBasicMaterial( { color: 0xFFFF00, wireframe:true } ),
            cube = this.cube = new THREE.Mesh( geometry, material ),
            renderer = new THREE.WebGLRenderer();

      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      scene.add( cube );
      camera.position.z = 3;

      this.renderer = renderer;
      this.scene = scene;
      this.camera = camera;
      this.animate();

      document.body.addEventListener("mousedown", this.mouseDown.bind(this));
      document.body.addEventListener("mousemove", this.mouseMove.bind(this));
      document.body.addEventListener("mouseup", this.mouseUp.bind(this));
    }

    animate() {
        requestAnimationFrame( this.animate.bind(this) );
        if(this.mouse_down === false){
            this.cube.rotation.x += 0.0025;
            this.cube.rotation.y += 0.0025;
        }
        this.renderer.render(this.scene, this.camera);
    };
    mouseDown(){
      this.mouse_down = true;
    }
    mouseMove(e){
      if(this.mouse_down === true){
          if(e.pageX < this.startXMovement){
              this.cube.rotation.y -= 0.05;
          } else if(e.pageX > this.startXMovement) {
              this.cube.rotation.y += 0.05;
          }
          if(e.pageY < this.startYMovement){
              this.cube.rotation.x -= 0.05;
          } else if(e.pageY > this.startYMovement){
              this.cube.rotation.x += 0.05;
          }
          this.startXMovement = e.pageX;
          this.startYMovement = e.pageY;
      }
    }
    mouseUp(){
      this.mouse_down = false;
    }


  render() {
    return (
      <WindowResizeListener onResize={windowSize => {
      this.height = windowSize.windowHeight;
      this.width = windowSize.windowWidth;
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( window.innerWidth, window.innerHeight );
    }}/>
    );
  }
}
