import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight
        intensity={3.75}
        groundColor="blue"
        position={[0, -0.5, 0]}
      />
      <pointLight intensity={3.75} position={[-1, 0.02, -0.7]} />
      <spotLight
        position={[-0.05, 0.5, -0.04]}
        angle={0.76}
        penumbra={2}
        intensity={80}
        castShadow
      />
      <ambientLight intensity={0.1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.74}
        position={isMobile ? [-1, -2.5, -2.15] : [-1, -3.25, -2]}
        rotation={[-0.01, -0.19, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense
        fallback={
          <Html center>
            <CanvasLoader />
          </Html>
        }
      >
        <OrbitControls
          enableZoom={false}
          rotateSpeed={1.1}
          smooth={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
