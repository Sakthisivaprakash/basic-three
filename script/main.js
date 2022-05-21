var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
});

var geometry = new THREE.BoxGeometry(1,1,1); // (1,10,10) (1,4,10) (1,4,4)
var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
var mesh = new THREE.Mesh(geometry, material);

// mesh.position.x = -2;
// mesh.position.y = 2;
// mesh.position.z = 2;
// mesh.position.set(2,2,-2);

// mesh.rotation.set(45,0,0);
// mesh.scale.set(1,2,1);

scene.add(mesh);

var light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10,0,25);
scene.add(light);

var render = function() {
    requestAnimationFrame(render);

    // mesh.rotation.x += 0.05; // number indicate the speed of animation 0.01 | 0.05
    // mesh.rotation.y += 0.01;

    // mesh.scale.x -= 0.01;

    renderer.render(scene, camera);
}

render();


this.tl = new TimelineMax({paused: true}); // .delay(.3)
this.tl.to(this.mesh.scale, 1, {x: 2, ease: Expo.easeOut});
this.tl.to(this.mesh.scale, .5, {x: .5, ease: Expo.easeOut});
this.tl.to(this.mesh.position, .5, {x: 2, ease: Expo.easeOut});
this.tl.to(this.mesh.rotation, .5, {y: Math.PI*.5, ease: Expo.easeOut}, "=-1.5");

document.body.addEventListener('click', () => {
    this.tl.play();
})