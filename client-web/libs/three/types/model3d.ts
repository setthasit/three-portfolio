import { AnimationClip, AnimationMixer } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

export interface Model3D {
  model: GLTF;
  animations: AnimationClip[];
  mixer: AnimationMixer;
}
