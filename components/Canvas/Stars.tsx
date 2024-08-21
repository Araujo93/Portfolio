import React, { Suspense, useRef } from "react";
// react-three/fiber
import { Canvas, useFrame } from "@react-three/fiber";
// react-three/drei
import { Points, Preload, PointMaterial } from "@react-three/drei";

// maath
import * as random from "maath/random/dist/maath-random.esm";

// three
import { Points as Point } from "three";

const Stars = (props: any) => {
  const ref = useRef<Point | null>(null);

  const sphere = random.inSphere(new Float32Array(3000), { radius: 1.25 });
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
