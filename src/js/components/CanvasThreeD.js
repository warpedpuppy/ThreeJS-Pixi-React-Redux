import React from "react";
import THREE from "three";
import CloseButton from "./closeButton";

export default class CanvasThreeD extends React.Component {

    componentDidMount() {

      let mouse_down = this.mouse_down = false,
          startXMovement = this.startXMovement = 0,
          startyMovement = this.startYMovement = 0,
          block_height = this.block_height = parseInt(this.props.block_height),
           block_width =  this.block_width =parseInt(this.props.block_width),
            percentage = ((100*block_height)/block_width)/100,
            height = 1*percentage,
            width_depth = 1,
            scene = new THREE.Scene(),
            camera = new THREE.PerspectiveCamera( 75, 800/500, 0.1, 1000 ),
            geometry = this.geometry = new THREE.BoxGeometry(1, 1, 1 ),
            material = new THREE.MeshBasicMaterial( { color: 0xFFFF00, wireframe:true } ),
            cube = this.cube = new THREE.Mesh( geometry, material ),

            renderer = new THREE.WebGLRenderer();

      this.cube.scale.set(1,1,1);
      renderer.setSize(800, 500 );
      document.getElementById("threeDContainer").appendChild( renderer.domElement );

      scene.add( cube );
      camera.position.z = 6;

      this.renderer = renderer;
      this.scene = scene;
      this.camera = camera;
      this.animate();

      document.body.addEventListener("mousedown", this.mouseDown.bind(this));
      document.body.addEventListener("mousemove", this.mouseMove.bind(this));
      document.body.addEventListener("mouseup", this.mouseUp.bind(this));


      
    }

    animate() {
        //percentage = Math.abs(((100*this.props.block_height)/this.props.block_width)/100),
        if(this.block_width !== this.props.block_width){

          if(this.props.block_height > this.props.block_width){
            let  percentage = this.props.block_height/this.props.block_width,
            height = 1*percentage,
            width_depth = 1;
            this.cube.scale.set(width_depth, height, width_depth);
            console.log("h gt w = ", percentage)
        } else {
           let percentage = ((100*this.props.block_width)/this.props.block_height)/100,
            width_depth = 1*percentage,
            height = 1;
          this.cube.scale.set(width_depth, height, width_depth);
          console.log("percentage = ", percentage)
        }
        
          


          this.block_height = this.props.block_height;
          this.block_width = this.props.block_width;
        }

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
      <div id="threeDContainer" className="hidden"><CloseButton /></div>
    );
  }
}
