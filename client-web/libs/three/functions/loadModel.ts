import { AnimationMixer, MathUtils, Scene } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Model3D } from '../types/model3d';

const loadModel = (modelSrc: string, scene: Scene, models: Model3D[]) => {
  const gltfLoader = new GLTFLoader();
  gltfLoader.load(modelSrc, (glft) => {
    const model = glft.scene;

    // Add model to scene
    const [x, y, z] = [500, 500, 3000].map(() =>
      MathUtils.randFloatSpread(500),
    );
    model.position.set(x, y, z);
    model.rotation.set(x, y, z);
    scene.add(model);

    // Extract animation and play
    const mixer = new AnimationMixer(model);
    const dance = mixer.clipAction(glft.animations[0]);
    dance.play();

    //
    models.push({
      model: glft,
      animations: glft.animations,
      mixer: mixer,
    });
  });
};

export default loadModel;
