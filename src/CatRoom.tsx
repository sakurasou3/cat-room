import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three-stdlib";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "../public/Tableset.glb");

  return <primitive object={gltf.scene} scale={15} position={[0, -15, 0]} />;
};

export const CatRoom = () => {
  return (
    <div className="cat-room">
      <Canvas camera={{ position: [0, 14, 55], fov: 45 }} shadows="soft">
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={2} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};
