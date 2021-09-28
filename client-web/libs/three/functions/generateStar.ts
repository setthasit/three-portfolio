import { MathUtils, Mesh, MeshStandardMaterial, Scene, SphereGeometry } from "three";

const generateStar = (scene: Scene) => {
  const geometry = new SphereGeometry(0.25, 10, 10);
  const material = new MeshStandardMaterial({ color: 0xf6f6dc });
  const star = new Mesh(geometry, material);

  const [x, y, z] = [500, 500, 3000].map(() => MathUtils.randFloatSpread(500));

	star.position.set(x, y, z)
	scene.add(star)
};

export default generateStar;
