import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;

// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import * as THREE from "three";

// import CanvasLoader from "../Loader";

// const Earth = () => {
//   const earth = useGLTF("./planet/scene.gltf");

//   // Create a glowing material
//   const glowMaterial = new THREE.MeshPhongMaterial({
//     color: new THREE.Color("#00eaff"),
//     emissive: new THREE.Color("#00eaff"),
//     emissiveIntensity: 1.5,
//     shininess: 100,
//   });

//   // Create a glowing atmosphere
//   const atmosphereMaterial = new THREE.MeshBasicMaterial({
//     color: new THREE.Color("#00aaff"),
//     transparent: true,
//     opacity: 0.3,
//   });

//   return (
//     <group>
//       <primitive
//         object={earth.scene}
//         material={glowMaterial}
//         scale={2.5}
//         position-y={0}
//         rotation-y={0}
//       />
//       {/* Glowing Atmosphere */}
//       <mesh scale={2.6} position-y={0}>
//         <sphereGeometry args={[1, 64, 64]} />
//         <meshBasicMaterial {...atmosphereMaterial} />
//       </mesh>
//     </group>
//   );
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop="demand"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 60,
//         near: 0.1,
//         far: 500,
//         position: [-4, 3, 10],
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <ambientLight intensity={0.2} />
//         <pointLight position={[10, 10, 10]} intensity={1.5} color="#00aaff" />
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Earth />
//         <Preload all />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;
