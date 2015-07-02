
            var container, stats;

            var camera, cameraTarget, scene, renderer;

            init();
            animate();

            function init() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 15 );
                camera.position.set( 3, 3.15, 3 );

                cameraTarget = new THREE.Vector3( 0, -0.25, 0 );

                scene = new THREE.Scene();
                scene.fog = new THREE.Fog( 0x72645b, 2, 15 );



// // CONTROLS
controls = new THREE.OrbitControls( camera );
controls.damping = 0.2;
controls.addEventListener( 'change', render );


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



                // 3D GROUND





                // ASCII file

                // var loader = new THREE.STLLoader();
                // loader.load( 'assets/stl/slotted_disk.stl', function ( geometry ) {

                //     var material = new THREE.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );
                //     var mesh = new THREE.Mesh( geometry, material );

                //     mesh.position.set( 0, - 0.25, 0.6 );
                //     mesh.rotation.set( 0, - Math.PI / 2, 0 );
                //     mesh.scale.set( 0.5, 0.5, 0.5 );

                //     mesh.castShadow = true;
                //     mesh.receiveShadow = true;

                //     scene.add( mesh );

                // } );

    // // SKYBOX/FOG
    // var skyBoxGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
    // var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff, side: THREE.BackSide } );
    // var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
    // scene.add(skyBox);





                // B    
                var loader = new THREE.STLLoader();
                loader.load( 'assets/stl/b-bin.stl', function ( geometry ) {

                    var material = new THREE.MeshPhongMaterial( { color: 0x524796, specular: 0x111111, shininess: 200 } );
                    var mesh = new THREE.Mesh( geometry, material );

                    mesh.position.set( 0.65, - 0.50, 0 );
                    mesh.rotation.set( - Math.PI / 2, 0, 0 );
                    mesh.scale.set( 0.02, 0.02, 0.02 );

                    mesh.castShadow = true;
                    mesh.receiveShadow = true;

                    scene.add( mesh );

                } );
                // A
                var material = new THREE.MeshPhongMaterial( { color: 0xEA2130, specular: 0xFF0000, shininess: 200 } );


                loader.load( 'assets/stl/a-bin.stl', function ( geometry ) {

                    var mesh = new THREE.Mesh( geometry, material );

                    mesh.position.set( 0, - 0.50, 0 );
                    mesh.rotation.set( - Math.PI / 2, 0, 0 );
                    mesh.scale.set( .02, .02, .02 );

                    mesh.castShadow = true;
                    mesh.receiveShadow = true;

                    scene.add( mesh );

                } );

                // C
                var materialC = new THREE.MeshPhongMaterial( { color: 0xefefef, specular: 0xFF0000, shininess: 200 } );


                loader.load( 'assets/stl/c-bin.stl', function ( geometry ) {

                    var mesh = new THREE.Mesh( geometry, materialC );

                    mesh.position.set( 1.3, - 0.50, 0 );
                    mesh.rotation.set( - Math.PI / 2, 0, 0 );
                    mesh.scale.set( .02, .02, .02 );

                    mesh.castShadow = true;
                    mesh.receiveShadow = true;

                    scene.add( mesh );

                } );

                // GROUND
                var materialGround = new THREE.MeshPhongMaterial( { color: 0x515552, specular: 0x111111, shininess: 20 } );
                loader.load( 'assets/stl/31x31.stl', function ( geometry ) {

                    var mesh = new THREE.Mesh( geometry, materialGround );

                    mesh.position.set( -1.6, - 0.570, 1.6 );
                    mesh.rotation.set( - Math.PI / 2, 0, 0 );
                    mesh.scale.set( .02, .02, .02 );

                    // mesh.castShadow = true;
                    // mesh.receiveShadow = true;

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

                scene.add( new THREE.AmbientLight( 0x777777 ) );



                addShadowedLight( 1, 3, 1, 0xb5a3a3, 1.35 );
                addShadowedLight( 0.5, 1, -1, 0xb5a3a3, 1 );


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

                

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function addShadowedLight( x, y, z, color, intensity ) {

                var directionalLight = new THREE.DirectionalLight( color, intensity );
                directionalLight.position.set( x, y, z )
                scene.add( directionalLight );

                directionalLight.castShadow = true;
                // directionalLight.shadowCameraVisible = true;

                var d = 1;
                directionalLight.shadowCameraLeft = -d;
                directionalLight.shadowCameraRight = d;
                directionalLight.shadowCameraTop = d;
                directionalLight.shadowCameraBottom = -d;

                directionalLight.shadowCameraNear = 1;
                directionalLight.shadowCameraFar = 4;

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

                camera.lookAt( cameraTarget );

                renderer.render( scene, camera );

            }

 
