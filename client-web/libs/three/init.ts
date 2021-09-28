import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MutableRefObject } from 'react';
import { ProfileQuery } from '../../services/profile/profile.document.graphql';
import generateStar from './functions/generateStar';
import generateLight from './functions/generateLight';
import loadModel from './functions/loadModel';
import { Model3D } from './types/model3d';
import { MathUtils } from 'three';

const initialThree = (
  ref: MutableRefObject<HTMLCanvasElement>,
  data: ProfileQuery,
) => {
  const { profile } = data;

  // Declare scene
  const clock = new THREE.Clock();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  // Create renderer
  const renderer = new THREE.WebGL1Renderer({
    canvas: ref.current,
  });

  // Setup camera
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(150);

  // Add lighting
  generateLight(scene);
  // Add stars
  for (let index = 0; index < 3000; index++) {
    generateStar(scene);
  }

  let models: Model3D[] = [];
  for (let index = 0; index < 50; index++) {
    loadModel('static/dancing_stormtrooper/scene.gltf', scene, models);
  }

  renderer.render(scene, camera);

  animate();

  function animate() {
    requestAnimationFrame(animate);

    var delta = clock.getDelta();

    // Put Animation code down here
    camera.rotation.x += 0.001;
    camera.rotation.y += 0.0005;
    camera.rotation.z -= 0.001;

    if (models) {
      models.forEach((model) => {
        model.mixer.update(delta);
      });
    }

    renderer.render(scene, camera);
  }
};

export default initialThree;
