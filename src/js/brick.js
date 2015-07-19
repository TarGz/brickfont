
            var container, stats;

            var camera, cameraTarget, scene, renderer;

            init();
            animate();

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, .1, 1000 );
                



                scene = new THREE.Scene();
                scene.fog = new THREE.Fog( 0xefefef, 2, 1500.5 );



                // TEXTURE GROUND

                // var floorTexture = new THREE.ImageUtils.loadTexture( 'assets/img/floor2.jpg' );
                // floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; 
                // floorTexture.repeat.set( 10, 10 );
                // var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
                // var floorGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
                // var floor = new THREE.Mesh(floorGeometry, floorMaterial);
                // floor.position.y = -0.5;
                // floor.rotation.x = Math.PI / 2;
                // floor.receiveShadow = true;
                // scene.add(floor);


                // DEFAULT GROUND
                // var plane = new THREE.Mesh(
                //     new THREE.PlaneBufferGeometry( 40, 40 ),
                //     new THREE.MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
                // );
                // plane.rotation.x = -Math.PI/2;
                // plane.position.y = -0.5;
                // scene.add( plane );

                // plane.receiveShadow = true;

                var loader = new THREE.STLLoader();
                
                var materialPink = new THREE.MeshPhongMaterial( { color: 0xEA2130, specular: 0xffffff, shininess: 10 } );
                var materialB = new THREE.MeshPhongMaterial( { color: 0x524796, specular: 0x524796, shininess: 20000 } );    
                var materialC = new THREE.MeshPhongMaterial( { color: 0xefefef, specular: 0xefefef, shininess: 200 } );

                var material =  materialB;




                // A
                loader.load( 'assets/stl/a-bin.stl', function ( geometry ) {

                    var mesh = new THREE.Mesh( geometry, material );

                    mesh.position.set( 0, 0, 0 );
                    mesh.rotation.set( - Math.PI / 2, 0, 0 );
                    mesh.scale.set( 1, 1, 1 );

                    mesh.castShadow = true;
                    mesh.receiveShadow = true;

                    scene.add( mesh );

                } );


                // B    
                
                loader.load( 'assets/stl/b-bin.stl', function ( geometry ) {

           
                    var mesh = new THREE.Mesh( geometry, material );

                    mesh.position.set( 32, 0, 0 );
                    // mesh.rotation.set( - Math.PI / 2, 0, 0 );
                    mesh.scale.set( 1, 1, 1 );

                    mesh.castShadow = true;
                    mesh.receiveShadow = true;

                    scene.add( mesh );

                } );

                // C

                loader.load( 'assets/stl/c-bin.stl', function ( geometry ) {

           
                    var mesh = new THREE.Mesh( geometry, material );

                    mesh.position.set( 72, 0, 0 );
                    // mesh.rotation.set( - Math.PI / 2, 0, 0 );
                     mesh.scale.set( 1, 1, 1 );

                    mesh.castShadow = true;
                    mesh.receiveShadow = true;

                    scene.add( mesh );

                } );                



                // GROUND
                var materialGround = new THREE.MeshPhongMaterial( { color: 0x515552, specular: 0x111111, shininess: 20 } );
                loader.load( 'assets/stl/32x32_bin.stl', function ( geometry ) {

                    var mesh = new THREE.Mesh( geometry, materialGround );

                    mesh.position.set( -96, -3, 96 );
                    mesh.rotation.set( - Math.PI / 2, 0, 0 );
                    mesh.scale.set( 1, 1, 1 );

                    // mesh.castShadow = true;
                    mesh.receiveShadow = true;

                    scene.add( mesh );

                } );





                // loader.load( 'assets/stl/pr2_head_pan.stl', function ( geometry ) {

                //     var mesh = new THREE.Mesh( geometry, material );

                //     mesh.position.set( 0, - 0.37, - 0.6 );
                //     mesh.rotation.set( - Math.PI / 2, 0, 0 );
                //     mesh.scale.set( 2, 2, 2 );

                //     mesh.castShadow = true;
                //     mesh.receiveShadow = true;

                //     scene.add( mesh );

                // } );

                // loader.load( 'assets/stl/pr2_head_tilt.stl', function ( geometry ) {

                //     var mesh = new THREE.Mesh( geometry, material );

                //     mesh.position.set( 0.136, - 0.37, - 0.6 );
                //     mesh.rotation.set( - Math.PI / 2, 0.3, 0 );
                //     mesh.scale.set( 2, 2, 2 );

                //     mesh.castShadow = true;
                //     mesh.receiveShadow = true;

                //     scene.add( mesh );

                // } );

                // Colored binary STL
                // loader.load( 'assets/stl/colored.stl', function ( geometry ) {

                //     var meshMaterial = material;
                //     if (geometry.hasColors) {
                //         meshMaterial = new THREE.MeshPhongMaterial({ opacity: geometry.alpha, vertexColors: THREE.VertexColors });
                //     }

                //     var mesh = new THREE.Mesh( geometry, meshMaterial );

                //     mesh.position.set( 0.5, 0.2, 0 );
                //     mesh.rotation.set( - Math.PI / 2, Math.PI / 2, 0 );
                //     mesh.scale.set( 0.3, 0.3, 0.3 );

                //     mesh.castShadow = true;
                //     mesh.receiveShadow = true;

                //     scene.add( mesh );

                // } );


                // Lights

                // scene.add( new THREE.AmbientLight( 0xefefef ) );
// var bluePoint = new THREE.PointLight(0x00ffff, 1, 0);
// bluePoint.position.set( 70, 5, 70 );
// scene.add(bluePoint);
// scene.add(new THREE.PointLightHelper(bluePoint, 3));
//   
// var greenPoint = new THREE.PointLight(0xff0000, 1, 0);
// greenPoint.position.set( -70, 5, 70 );
// scene.add(greenPoint);
// scene.add(new THREE.PointLightHelper(greenPoint, 3));


                addShadowedLight( 1, 3, 1, 0xb5a3a3, 1.2 );
                addShadowedLight( 1, 5, -1, 0xb5a3a3, .9 );
// 


                var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.4 ); 
                scene.add(  hemiLight);  


                // renderer

                renderer = new THREE.WebGLRenderer( { antialias: true } );
                renderer.setClearColor( scene.fog.color );
                renderer.setPixelRatio( window.devicePixelRatio );
                renderer.setSize( window.innerWidth, window.innerHeight );

                renderer.gammaInput = true;
                renderer.gammaOutput = true;

                renderer.shadowMapEnabled = true;
                renderer.shadowMapCullFace = THREE.CullFaceBack;

                document.body.appendChild( renderer.domElement );

                // stats

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '90px';
                document.body.appendChild( stats.domElement );

                

                camera.position.set( .8, 3, 2 );
                cameraTarget = new THREE.Vector3( 0.65, - 0.50, 0 );
                camera.lookAt( cameraTarget );

                                // CONTROLS
                controls = new THREE.OrbitControls( camera );
                controls.damping = 0.2;
                controls.addEventListener( 'change', render );
                controls.target = cameraTarget;

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function addShadowedLight( x, y, z, color, intensity ) {

                var directionalLight = new THREE.DirectionalLight( color, intensity );
                directionalLight.position.set( x, y, z )
                scene.add( directionalLight );

                directionalLight.castShadow = true;
                directionalLight.shadowCameraVisible = false;

                var d = 3;
                directionalLight.shadowCameraLeft = -d;
                directionalLight.shadowCameraRight = d;
                directionalLight.shadowCameraTop = d;
                directionalLight.shadowCameraBottom = -d;

                directionalLight.shadowCameraNear = 1;
                directionalLight.shadowCameraFar = 10;

                directionalLight.shadowMapWidth = 1024;
                directionalLight.shadowMapHeight = 1024;

                directionalLight.shadowBias = -0.005;
                directionalLight.shadowDarkness = 0.15;

            }

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            function animate() {

                requestAnimationFrame( animate );

                render();
                stats.update();

            }

            function render() {

                var timer = Date.now() * 0.0005;

                // camera.position.x = Math.cos( timer ) * 3;
                // camera.position.z = Math.sin( timer ) * 3;

                // camera.lookAt( cameraTarget );

                renderer.render( scene, camera );

            }

 
