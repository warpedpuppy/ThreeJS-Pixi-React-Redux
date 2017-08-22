import React from "react";
import QueryString from "query-string";
import THREE from "three";

export default class CanvasThreeD extends React.Component {

    componentDidMount() {
      const vars = QueryString.parse(location.search);
      var mouse_down = this.mouse_down = false;
      var startXMovement = this.startXMovement = 0;
      var startyMovement = this.startYMovement = 0;
      var block_height = parseInt(vars.height);
      var block_width =  parseInt(vars.width);
      var percentage = ((100*block_height)/block_width)/100;
      var height = 1*percentage;
      var width_depth = 1;
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      var geometry = new THREE.BoxGeometry( width_depth, height, width_depth );
      var material = new THREE.MeshBasicMaterial( { color: 0xFFFF00, wireframe:true } );
      var cube = this.cube = new THREE.Mesh( geometry, material );
      var renderer = new THREE.WebGLRenderer();

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
      <div>
      </div>
    );
  }
}
