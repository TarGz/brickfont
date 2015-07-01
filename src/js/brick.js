console.log("bricks 0.0.5");

// http://threejs.org/docs/#Manual/Introduction/Creating_a_scene

var controls;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000000 );

controls = new THREE.OrbitControls( camera );
controls.damping = 0.2;
controls.addEventListener( 'change', render );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



// Material
var material = new THREE.MeshNormalMaterial( { color: 0x00ff00 } );
var materialNormal = new THREE.MeshNormalMaterial()
var materialBasic = new THREE.MeshBasicMaterial( { 
    color: 'red',
    wireframe:'true',
    wireframeLinewidth:'200'
 } )


// TEST

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var cube = new THREE.Mesh( geometry, materialBasic );
// scene.add( cube );


// LOADER
var loader = new THREE.STLLoader();
loader.load( 'assets/stl/a.stl', function ( geometry ) {
  var letter = new THREE.Mesh( geometry, materialBasic);
  letter.position.z = 0;
  letter.rotation.x = 0;
  letter.rotation.y = 0;
  scene.add( letter );
});

camera.position.z = 5;

var render = function () {
  requestAnimationFrame( render );

  // cube.rotation.x += 0.1;
  // cube.rotation.y += 0.1;

  renderer.render(scene, camera);
};

render();