console.log("bricks 0.0.5");

// http://threejs.org/docs/#Manual/Introduction/Creating_a_scene

var controls;

var scene = new THREE.Scene();

// CAMERA
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000000 );
camera.position.z = 50;


// CONTROLS
controls = new THREE.OrbitControls( camera );
controls.damping = 0.2;
controls.addEventListener( 'change', render );

// RENDERER
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



// MATERIALS
var material = new THREE.MeshNormalMaterial( { color: 0x00ff00 } );
var materialNormal = new THREE.MeshNormalMaterial();
var materialBasic = new THREE.MeshBasicMaterial( { 
    color: 'red',
    wireframe:false,
    wireframeLinewidth:'200'
 } );

var materialLambert = new THREE.MeshLambertMaterial( { 
    color: 'red'
 } );


var materialPhong = new THREE.MeshPhongMaterial( { 
  color: 0x2e45af, 
  specular: 0x111111, 
  emissive: 0x000000,
  shininess: 10,
  shading: THREE.FlatShading,
  vertexColors:THREE.NoColors,
  fog:true,

   } );

// LIGHT
var ambientLight = new THREE.AmbientLight( 0xffffff );
scene.add( ambientLight );

var lights = [];
lights[0] = new THREE.PointLight( 0xffffff, .8, 0 );
lights[1] = new THREE.PointLight( 0xffffff, .8, 0 );
lights[2] = new THREE.PointLight( 0xffffff, .8, 0 );

lights[0].position.set( 0, 200, 0 );
lights[1].position.set( 100, 200, 100 );
lights[2].position.set( -100, -200, -100 );

scene.add( lights[0] );
scene.add( lights[1] );
scene.add( lights[2] );


// GROUND
var plane = new THREE.Mesh(
  new THREE.PlaneBufferGeometry( 400, 400 ),
  new THREE.MeshPhongMaterial( { color: 0xefefef, specular: 0x0a0e50, shininess: 200,shading: THREE.FlatShading } )
);
plane.rotation.x = 0;
plane.position.y = -0.5;
scene.add( plane );
plane.receiveShadow = true;



// // TEST

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var cube = new THREE.Mesh( geometry, materialPhong );
// scene.add( cube );


// LOADER
var loader = new THREE.STLLoader();
loader.load( 'assets/stl/a.stl', function ( geometry ) {
  var letter = new THREE.Mesh( geometry, materialPhong);
  letter.castShadow = true;
  letter.receiveShadow = true;
  letter.position.z = 0;
  letter.rotation.x = 0;
  letter.rotation.y = 0;
  scene.add( letter );
});



var render = function () {
  requestAnimationFrame( render );

  // cube.rotation.x += 0.1;
  // cube.rotation.y += 0.1;

  renderer.render(scene, camera);
};

render();