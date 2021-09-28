import { AmbientLight, PointLight, Scene } from 'three';

const generateLight = (scene: Scene) => {
  const pointLight = new PointLight(0xffffff);
  pointLight.position.set(25, 5, 5);
  scene.add(pointLight);

  const ambientLight = new AmbientLight(0xffffff);
  scene.add(ambientLight);
};

export default generateLight;
