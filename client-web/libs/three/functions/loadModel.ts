import { AnimationMixer, Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Model3D } from "../types/model3d";

const loadModel = (modelSrc: string, scene: Scene, models: Model3D[]) => {
  const gltfLoader = new GLTFLoader();
  gltfLoader.load(modelSrc, (glft) => {
    const model = glft.scene;

    // Add model to scene
    scene.add(model);

    // Extract animation and play
    const mixer = new AnimationMixer(model);
    const dance = mixer.clipAction(glft.animations[0]);
    dance.play();

    //
    models.push({
      model: glft,
      animations: glft.animations,
      mixer: mixer
    });
  });
};

export default loadModel;
