"use client";

import React, { Suspense, useEffect, useState } from "react";

// Canvas
import { Canvas } from "@react-three/fiber";

// react-three/drei
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// components
import Loader from "../Loader";

// props
type ComputersProps = {
  isMobile: boolean;
};

const Computers = ({ isMobile }: ComputersProps) => {
  const modelPath = `./desktop_pc/scene.gltf`;

  const scene = useGLTF(modelPath);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} decay={0} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        decay={0}
      />
      <primitive
        object={scene.scene}
        scale={isMobile ? 0.5 : 0.6}
        position={isMobile ? [0, -1, -1] : [0, -3, -0.25]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:640px)");

    setMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setMobile(event.matches);
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
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={mobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
