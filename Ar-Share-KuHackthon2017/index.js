var renderer,
     scene,
     camera,
     container;

var arSource,
     arContext,
     arMarker = [];

var
     mesh;

init();

function init() {


     //contain the id of the html tag things
     container = document.getElementById('container');

     //adding web gl support
     renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

     //initiizaing scence and cemera
     scene = new THREE.Scene();
     camera = new THREE.Camera();

     //setting colour and window size
     renderer.setClearColor(0x000000, 0);
     renderer.setSize(window.innerWidth, window.innerHeight);


     container.appendChild(renderer.domElement);

     //adding scense to the cemera
     scene.add(camera);
     //scence is false
     scene.visible = false;

     //loading mesh model for to show
     mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
          color: 0xFF00FF,
          transparent: true,
          opacity: 0.5
     }));


     mesh1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
          color: 0xFF00FF,
          transparent: true,
          opacity: 0.5
     }));


     //addding mesh to the sence
     scene.add(mesh);




     //from where the vedio will come from
     arSource = new THREEx.ArToolkitSource({
          sourceType: 'webcam',
     });

     //setting camera preset
     arContext = new THREEx.ArToolkitContext({
          cameraParametersUrl: './assets/data/camera_para.dat',
          detectionMode: 'mono',
     });


     //setting hiro marker
     arMarker[0] = new THREEx.ArMarkerControls(arContext, camera, {
          type: 'pattern',
          patternUrl: './assets/data/patt.hiro',
          changeMatrixMode: 'cameraTransformMatrix'
     });


     //setting custom marker
     arMarker[1] = new THREEx.ArMarkerControls(arContext, camera, {
          type: 'pattern',
          patternUrl: './assets/data/u4bi.patt',
          changeMatrixMode: 'cameraTransformMatrix'
     });

     arMarker[2] = new THREEx.ArMarkerControls(arContext, camera, {
          type: 'pattern',
          patternUrl: './assets/data/pattern-marker.patt',
          changeMatrixMode: 'cameraTransformMatrix'
     });





     /* handle */
     arSource.init(function () {
          arSource.onResize();
          arSource.copySizeTo(renderer.domElement);


          //if cemera cintext dat file is not null this will work
          if (arContext.arController !== null) arSource.copySizeTo(arContext.arController.canvas);

     });

     arContext.init(function onCompleted() {

          camera.projectionMatrix.copy(arContext.getProjectionMatrix());

     });



     //will render the object
     render();

}




function render() {

     //need for to render the mesh
     requestAnimationFrame(render);

     renderer.render(scene, camera);


     //if there ids no source of vedio than it will return
     if (arSource.ready === false) return;

     arContext.update(arSource.domElement);

     //scense will be like the cemera scense
     scene.visible = camera.visible;

     //will rotate the rendered mesh
     mesh.rotateX(.1);

}          
