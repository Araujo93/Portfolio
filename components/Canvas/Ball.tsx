"use client";

import React, { Suspense } from "react";

// next
import { StaticImageData } from "next/image";

// Canvas
import { Canvas } from "@react-three/fiber";

// react-three-drei
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

// components
import Loader from "../Loader/index";

type BallProps = {
  imgUrl: StaticImageData;
};

type BallCanvasProps = {
  icon: StaticImageData;
};

const Ball = ({ imgUrl }: BallProps) => {
  const [decal] = useTexture([imgUrl.src]);
  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <Canvas frameloop="always">
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
