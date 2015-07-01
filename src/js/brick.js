console.log("bricks 0.0.5");

// http://threejs.org/docs/#Manual/Introduction/Creating_a_scene


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 175, window.innerWidth/window.innerHeight, 0.1, 100000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var loader = new THREE.STLLoader();
loader.load( 'assets/stl/k.stl', function ( geometry ) {
  scene.add( new THREE.Mesh( geometry ) );
});

camera.position.z = 5;

var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;

  renderer.render(scene, camera);
};

render();